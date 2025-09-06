import React from 'react';
import { Terminal, CheckCircle, XCircle, Star } from 'lucide-react';
import type { TestResult } from '../types';

interface ConsoleProps {
  output: string;
  isRunning: boolean;
  testResults?: TestResult[];
  stars?: number;
}

export const Console: React.FC<ConsoleProps> = ({ output, isRunning, testResults, stars }) => {
  const renderStars = (starCount: number) => {
    return (
      <div className="stars-display">
        {[1, 2, 3].map((star) => (
          <Star
            key={star}
            className={`star ${star <= starCount ? 'earned' : 'empty'}`}
            size={24}
          />
        ))}
        <span className="stars-text">
          {starCount > 0 ? `${starCount}/3 stars earned!` : 'No stars yet'}
        </span>
      </div>
    );
  };

  const renderTestResults = () => {
    if (!testResults || testResults.length === 0) return null;

    return (
      <div className="test-results">
        <h4>🧪 Test Results</h4>
        {testResults.map((test, index) => (
          <div key={index} className={`test-result ${test.passed ? 'passed' : 'failed'}`}>
            <div className="test-icon">
              {test.passed ? <CheckCircle size={16} /> : <XCircle size={16} />}
            </div>
            <div className="test-info">
              <span className="test-name">{test.name}</span>
              {test.message && <span className="test-message">{test.message}</span>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="console">
      <div className="console-header">
        <Terminal className="console-icon" />
        <h3>🖥️ Output</h3>
        {isRunning && <div className="running-indicator">Running...</div>}
      </div>

      <div className="console-content">
        {output && (
          <div className="console-output">
            <pre>{output}</pre>
          </div>
        )}

        {testResults && (
          <>
            {renderTestResults()}
            {stars !== undefined && renderStars(stars)}
          </>
        )}

        {!output && !testResults && !isRunning && (
          <div className="console-empty">
            <p>👋 Click "Run Code" to see your output here!</p>
          </div>
        )}

        {isRunning && (
          <div className="console-running">
            <div className="spinner"></div>
            <p>🤖 Running your code...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .console {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .console-header {
          background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
          color: white;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
        }

        .console-icon {
          width: 20px;
          height: 20px;
        }

        .running-indicator {
          margin-left: auto;
          background: #48bb78;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.9rem;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .console-content {
          padding: 20px;
          max-height: 300px;
          overflow-y: auto;
        }

        .console-output {
          background: #1a202c;
          color: #e2e8f0;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
          overflow-x: auto;
        }

        .console-output pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .test-results {
          margin-bottom: 15px;
        }

        .test-results h4 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.1rem;
        }

        .test-result {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 5px;
        }

        .test-result.passed {
          background: #f0fff4;
          border-left: 4px solid #48bb78;
        }

        .test-result.failed {
          background: #fff5f5;
          border-left: 4px solid #f56565;
        }

        .test-icon {
          flex-shrink: 0;
        }

        .test-result.passed .test-icon {
          color: #48bb78;
        }

        .test-result.failed .test-icon {
          color: #f56565;
        }

        .test-info {
          flex: 1;
        }

        .test-name {
          font-weight: bold;
          color: #2d3748;
          display: block;
        }

        .test-message {
          font-size: 0.9rem;
          color: #4a5568;
          display: block;
        }

        .stars-display {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: linear-gradient(135deg, #fff9e6 0%, #fef5e7 100%);
          border-radius: 10px;
          border: 2px solid #f6e05e;
        }

        .star {
          color: #d1d5db;
          transition: color 0.3s ease;
        }

        .star.earned {
          color: #fbbf24;
          animation: starPop 0.5s ease-out;
        }

        @keyframes starPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .stars-text {
          font-weight: bold;
          color: #92400e;
        }

        .console-empty,
        .console-running {
          text-align: center;
          padding: 30px;
          color: #6b7280;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Scrollbar styling */
        .console-content::-webkit-scrollbar {
          width: 8px;
        }

        .console-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .console-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        .console-content::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};
