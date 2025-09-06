import React, { useState } from 'react';
import { Code, ChevronDown, ChevronUp } from 'lucide-react';
import { CodeSnippet } from '../types';

interface CodeSnippetsPanelProps {
  snippets: CodeSnippet[];
  onInsertSnippet: (code: string) => void;
}

export const CodeSnippetsPanel: React.FC<CodeSnippetsPanelProps> = ({ snippets, onInsertSnippet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(snippets.map(s => s.category)))];
  const filteredSnippets = selectedCategory === 'all' 
    ? snippets 
    : snippets.filter(s => s.category === selectedCategory);

  return (
    <div className="code-snippets-panel">
      <button 
        className="snippets-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Code size={16} />
        Code Snippets
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="snippets-content">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="snippets-list">
            {filteredSnippets.map(snippet => (
              <div key={snippet.id} className="snippet-item">
                <div className="snippet-header">
                  <h4>{snippet.title}</h4>
                  <span className={`difficulty ${snippet.difficulty}`}>
                    {snippet.difficulty}
                  </span>
                </div>
                <p className="snippet-description">{snippet.description}</p>
                <div className="snippet-code">
                  <pre>{snippet.code}</pre>
                  <button 
                    className="insert-btn"
                    onClick={() => onInsertSnippet(snippet.code)}
                  >
                    Insert Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
