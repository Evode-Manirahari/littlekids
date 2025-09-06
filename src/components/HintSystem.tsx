import React from 'react';
import { Lightbulb, ChevronRight } from 'lucide-react';
import type { HintState } from '../types';

interface HintSystemProps {
  hintState: HintState;
  onGetHint: () => void;
}

export const HintSystem: React.FC<HintSystemProps> = ({ hintState, onGetHint }) => {
  const hasMoreHints = hintState.currentHint < hintState.maxHints;
  const hasHints = hintState.maxHints > 0;

  if (!hasHints) {
    return (
      <div className="hint-system no-hints">
        <p>No hints available for this level. You've got this! 💪</p>
      </div>
    );
  }

  return (
    <div className="hint-system">
      <div className="hints-header">
        <Lightbulb className="hint-icon" />
        <h4>💡 Hints</h4>
        <span className="hint-progress">
          {hintState.currentHint}/{hintState.maxHints} used
        </span>
      </div>

      <div className="hints-content">
        {hintState.hints.slice(0, hintState.currentHint).map((hint, index) => (
          <div key={index} className="hint-item shown">
            <div className="hint-number">{index + 1}</div>
            <div className="hint-text">{hint}</div>
          </div>
        ))}

        {hasMoreHints && (
          <div className="hint-actions">
            <button className="btn btn-secondary btn-small" onClick={onGetHint}>
              <Lightbulb className="btn-icon" />
              Get Next Hint
              <ChevronRight className="btn-icon" />
            </button>
          </div>
        )}

        {!hasMoreHints && (
          <div className="hint-complete">
            <p>🎯 All hints revealed! Try your best solution.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .hint-system {
          background: linear-gradient(135deg, #fff9e6 0%, #fef5e7 100%);
          border: 2px solid #f6e05e;
          border-radius: 15px;
          padding: 20px;
          margin-top: 20px;
        }

        .hint-system.no-hints {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-color: #48bb78;
          text-align: center;
          color: #2d3748;
        }

        .hints-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .hint-icon {
          width: 20px;
          height: 20px;
          color: #d97706;
        }

        .hints-header h4 {
          color: #92400e;
          margin: 0;
          font-size: 1.1rem;
        }

        .hint-progress {
          margin-left: auto;
          background: #d97706;
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hints-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hint-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          opacity: 0;
          animation: hintReveal 0.5s ease-out forwards;
        }

        .hint-item.shown {
          opacity: 1;
        }

        @keyframes hintReveal {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hint-number {
          width: 24px;
          height: 24px;
          background: #d97706;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hint-text {
          flex: 1;
          color: #92400e;
          line-height: 1.5;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          border-left: 3px solid #d97706;
        }

        .hint-actions {
          text-align: center;
          padding-top: 10px;
          border-top: 1px solid rgba(217, 119, 6, 0.2);
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        .hint-complete {
          text-align: center;
          padding: 15px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          color: #92400e;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .hints-header {
            flex-wrap: wrap;
          }

          .hint-progress {
            margin-left: 0;
            margin-top: 5px;
          }

          .hint-item {
            flex-direction: column;
            gap: 8px;
          }

          .hint-number {
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  );
};
