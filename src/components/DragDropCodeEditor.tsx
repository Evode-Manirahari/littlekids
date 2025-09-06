import React, { useState, useRef, useCallback } from 'react';
import { Move, Trash2, Code } from 'lucide-react';

interface CodeBlock {
  id: string;
  type: 'print' | 'variable' | 'if' | 'for' | 'function' | 'comment';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DragDropCodeEditorProps {
  onCodeChange: (code: string) => void;
  initialCode?: string;
  className?: string;
}

export const DragDropCodeEditor: React.FC<DragDropCodeEditorProps> = ({
  onCodeChange,
  // initialCode = '', // Removed unused parameter
  className = ''
}) => {
  const [blocks, setBlocks] = useState<CodeBlock[]>([]);
  const [draggedBlock, setDraggedBlock] = useState<CodeBlock | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Available code blocks
  const availableBlocks = [
    { type: 'print', label: 'Print', template: 'print("Hello World!")', color: '#4CAF50' },
    { type: 'variable', label: 'Variable', template: 'name = "Python"', color: '#2196F3' },
    { type: 'if', label: 'If Statement', template: 'if condition:\n    # do something', color: '#FF9800' },
    { type: 'for', label: 'For Loop', template: 'for i in range(5):\n    print(i)', color: '#9C27B0' },
    { type: 'function', label: 'Function', template: 'def my_function():\n    return "Hello"', color: '#F44336' },
    { type: 'comment', label: 'Comment', template: '# This is a comment', color: '#607D8B' }
  ];

  // Generate code from blocks
  const generateCode = useCallback((blocks: CodeBlock[]): string => {
    return blocks
      .sort((a, b) => a.y - b.y || a.x - b.x)
      .map(block => block.content)
      .join('\n');
  }, []);

  // Handle block creation
  const handleCreateBlock = (type: string) => {
    const template = availableBlocks.find(b => b.type === type)?.template || '';
    const newBlock: CodeBlock = {
      id: Date.now().toString(),
      type: type as CodeBlock['type'],
      content: template,
      x: 50 + (blocks.length * 20),
      y: 50 + (blocks.length * 20),
      width: 200,
      height: 60
    };
    
    const newBlocks = [...blocks, newBlock];
    setBlocks(newBlocks);
    onCodeChange(generateCode(newBlocks));
  };

  // Handle block deletion
  const handleDeleteBlock = (blockId: string) => {
    const newBlocks = blocks.filter(block => block.id !== blockId);
    setBlocks(newBlocks);
    onCodeChange(generateCode(newBlocks));
  };

  // Handle block content change
  const handleBlockContentChange = (blockId: string, content: string) => {
    const newBlocks = blocks.map(block => 
      block.id === blockId ? { ...block, content } : block
    );
    setBlocks(newBlocks);
    onCodeChange(generateCode(newBlocks));
  };

  // Handle mouse down on block
  const handleMouseDown = (e: React.MouseEvent, block: CodeBlock) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggedBlock(block);
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left - block.x,
        y: e.clientY - rect.top - block.y
      });
    }
  };

  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !draggedBlock || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;

    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === draggedBlock.id
          ? { ...block, x: Math.max(0, newX), y: Math.max(0, newY) }
          : block
      )
    );
  }, [isDragging, draggedBlock, dragOffset]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDraggedBlock(null);
    }
  }, [isDragging]);

  // Add event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={`drag-drop-code-editor ${className}`}>
      {/* Toolbar */}
      <div className="code-toolbar">
        <h3>Drag & Drop Code Blocks</h3>
        <div className="block-palette">
          {availableBlocks.map(block => (
            <button
              key={block.type}
              className="block-button"
              onClick={() => handleCreateBlock(block.type)}
              style={{ backgroundColor: block.color }}
            >
              <Code size={16} />
              {block.label}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="code-canvas" ref={canvasRef}>
        {blocks.map(block => (
          <div
            key={block.id}
            className={`code-block ${isDragging && draggedBlock?.id === block.id ? 'dragging' : ''}`}
            style={{
              left: block.x,
              top: block.y,
              width: block.width,
              height: block.height,
              backgroundColor: availableBlocks.find(b => b.type === block.type)?.color
            }}
            onMouseDown={(e) => handleMouseDown(e, block)}
          >
            <div className="block-header">
              <Move className="drag-handle" size={16} />
              <button
                className="delete-button"
                onClick={() => handleDeleteBlock(block.id)}
              >
                <Trash2 size={14} />
              </button>
            </div>
            
            <textarea
              className="block-content"
              value={block.content}
              onChange={(e) => handleBlockContentChange(block.id, e.target.value)}
              placeholder="Enter code here..."
            />
          </div>
        ))}
        
        {blocks.length === 0 && (
          <div className="empty-canvas">
            <Code size={48} />
            <p>Drag blocks from the toolbar to start coding!</p>
          </div>
        )}
      </div>

      {/* Generated Code Preview */}
      <div className="code-preview">
        <h4>Generated Code:</h4>
        <pre className="code-output">
          {generateCode(blocks) || '// No code generated yet'}
        </pre>
      </div>
    </div>
  );
};
