import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language }) => {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // Configure editor for kids
    editor.updateOptions({
      fontSize: 16,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      lineHeight: 1.6,
      padding: { top: 16, bottom: 16 },
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      automaticLayout: true,
      tabSize: 2,
      insertSpaces: true,
      detectIndentation: false,
      renderLineHighlight: 'gutter',
      selectionHighlight: false,
      occurrencesHighlight: false,
      renderWhitespace: 'selection',
      bracketPairColorization: { enabled: true },
      guides: {
        bracketPairs: true,
        indentation: true
      }
    });

    // Kid-friendly theme
    monaco.editor.defineTheme('kid-friendly', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '0066cc', fontStyle: 'bold' },
        { token: 'string', foreground: '009900' },
        { token: 'comment', foreground: '888888', fontStyle: 'italic' },
        { token: 'number', foreground: 'ff6600' },
        { token: 'function', foreground: 'cc0066', fontStyle: 'bold' },
        { token: 'variable', foreground: '0066cc' }
      ],
      colors: {
        'editor.background': '#fefefe',
        'editor.foreground': '#333333',
        'editorLineNumber.foreground': '#999999',
        'editorLineNumber.activeForeground': '#333333',
        'editorGutter.background': '#f8f8f8',
        'editorBracketMatch.background': '#e8f4fd',
        'editorBracketMatch.border': '#0066cc',
        'editor.selectionBackground': '#b3d9ff',
        'editorCursor.foreground': '#0066cc'
      }
    });

    monaco.editor.setTheme('kid-friendly');

    // Add helpful keybindings
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      // Trigger run code (this would need to be passed as a prop)
      console.log('Run code shortcut triggered');
    });

    // Focus the editor
    editor.focus();
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  return (
    <div className="code-editor">
      <Editor
        height="400px"
        defaultLanguage={language}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
          contextmenu: true,
          mouseWheelZoom: true,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on'
        }}
      />
      
      <style>{`
        .code-editor {
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: border-color 0.3s ease;
        }

        .code-editor:focus-within {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        :global(.monaco-editor) {
          border-radius: 8px;
        }

        :global(.monaco-editor .margin) {
          background-color: #f8f8f8 !important;
        }

        :global(.monaco-editor .view-lines) {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        }
      `}</style>
    </div>
  );
};
