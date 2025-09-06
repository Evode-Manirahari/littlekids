import React from 'react';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { ErrorTranslation } from '../types';

interface ErrorTranslatorProps {
  error: string;
  translations: ErrorTranslation[];
}

export const ErrorTranslator: React.FC<ErrorTranslatorProps> = ({ error, translations }) => {
  const findTranslation = (errorMessage: string): ErrorTranslation | null => {
    const lowerError = errorMessage.toLowerCase();
    
    for (const translation of translations) {
      if (lowerError.includes(translation.errorType.toLowerCase())) {
        return translation;
      }
    }
    
    // Check for common error patterns
    if (lowerError.includes('syntax')) {
      return translations.find(t => t.errorType === 'SyntaxError') || null;
    }
    if (lowerError.includes('name') && lowerError.includes('not defined')) {
      return translations.find(t => t.errorType === 'NameError') || null;
    }
    if (lowerError.includes('type')) {
      return translations.find(t => t.errorType === 'TypeError') || null;
    }
    if (lowerError.includes('indentation')) {
      return translations.find(t => t.errorType === 'IndentationError') || null;
    }
    
    return null;
  };

  const translation = findTranslation(error);

  if (!translation) {
    return (
      <div className="error-translator">
        <div className="error-header">
          <AlertTriangle size={20} />
          <span>Error</span>
        </div>
        <div className="error-message">
          <code>{error}</code>
        </div>
        <div className="error-suggestion">
          <Lightbulb size={16} />
          <span>Try checking your code for typos or missing punctuation!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="error-translator">
      <div className="error-header">
        <AlertTriangle size={20} />
        <span>Error</span>
      </div>
      
      <div className="kid-friendly-message">
        <h4>🤔 What happened?</h4>
        <p>{translation.kidFriendlyMessage}</p>
      </div>
      
      <div className="error-suggestion">
        <Lightbulb size={16} />
        <span>{translation.suggestion}</span>
      </div>
      
      <div className="error-example">
        <h4>💡 Example:</h4>
        <code>{translation.example}</code>
      </div>
      
      <div className="original-error">
        <details>
          <summary>Show original error</summary>
          <code>{error}</code>
        </details>
      </div>
    </div>
  );
};
