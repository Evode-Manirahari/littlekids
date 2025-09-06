import React from 'react';
import { ArrowLeft, Lock, Star, Play, CheckCircle } from 'lucide-react';
import { levels } from '../data/levels';
import type { GameProgress } from '../types';

interface LevelSelectProps {
  progress: GameProgress;
  onSelectLevel: (levelId: string) => void;
  onBack: () => void;
  onReset: () => void;
}

export const LevelSelect: React.FC<LevelSelectProps> = ({ progress, onSelectLevel, onBack }) => {
  const isLevelUnlocked = (levelIndex: number) => {
    if (levelIndex === 0) return true; // First level is always unlocked
    return progress.completedLevels.includes(levels[levelIndex - 1].id);
  };

  const getStarsForLevel = (levelId: string) => {
    return progress.stars[levelId] || 0;
  };

  const renderStars = (levelId: string) => {
    const starCount = getStarsForLevel(levelId);
    return (
      <div className="stars">
        {[1, 2, 3].map((star) => (
          <Star
            key={star}
            className={`star ${star <= starCount ? 'filled' : 'empty'}`}
            size={16}
          />
        ))}
      </div>
    );
  };

  const getDifficultyColor = (difficulty: number) => {
    const colors = ['#4ade80', '#facc15', '#f97316', '#ef4444'];
    return colors[Math.min(difficulty - 1, colors.length - 1)];
  };

  const getDifficultyLabel = (difficulty: number) => {
    const labels = ['Easy', 'Medium', 'Hard', 'Expert'];
    return labels[Math.min(difficulty - 1, labels.length - 1)];
  };

  return (
    <div className="level-select">
      <div className="level-select-container">
        <div className="level-select-header">
          <button className="btn btn-secondary" onClick={onBack}>
            <ArrowLeft className="btn-icon" />
            Back
          </button>
          <h1>Choose Your Adventure! 🎮</h1>
          <div className="progress-summary">
            <span>{progress.completedLevels.length} of {levels.length} levels completed</span>
          </div>
        </div>

        <div className="levels-grid">
          {levels.map((level, index) => {
            const unlocked = isLevelUnlocked(index);
            const completed = progress.completedLevels.includes(level.id);
            const stars = getStarsForLevel(level.id);

            return (
              <div
                key={level.id}
                className={`level-card ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''}`}
                onClick={() => unlocked && onSelectLevel(level.id)}
              >
                <div className="level-header">
                  <div className="level-number">{index + 1}</div>
                  <div className="level-status">
                    {!unlocked && <Lock className="status-icon" />}
                    {completed && <CheckCircle className="status-icon completed" />}
                  </div>
                </div>

                <div className="level-content">
                  <h3 className="level-title">{level.title}</h3>
                  <p className="level-description">{level.description}</p>
                  
                  <div className="level-meta">
                    <div 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(level.difficulty) }}
                    >
                      {getDifficultyLabel(level.difficulty)}
                    </div>
                    <div className="level-category">
                      {level.category.charAt(0).toUpperCase() + level.category.slice(1)}
                    </div>
                  </div>

                  <div className="level-footer">
                    {unlocked && (
                      <button className="btn btn-primary btn-small">
                        <Play className="btn-icon" />
                        {completed ? 'Play Again' : 'Play'}
                      </button>
                    )}
                    {stars > 0 && renderStars(level.id)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="level-select-footer">
          <p>🌟 Complete levels to unlock new adventures!</p>
        </div>
      </div>

      <style>{`
        .level-select {
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .level-select-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .level-select-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .level-select-header button {
          position: absolute;
          left: 0;
          top: 0;
        }

        .level-select-header h1 {
          color: white;
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .progress-summary {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .level-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .level-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .level-card.unlocked {
          border-color: #4ade80;
        }

        .level-card.completed {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-color: #38a169;
        }

        .level-card.locked {
          opacity: 0.6;
          cursor: not-allowed;
          background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
        }

        .level-card.locked:hover {
          transform: none;
          box-shadow: none;
        }

        .level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .level-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .level-card.locked .level-number {
          background: #cbd5e0;
        }

        .status-icon {
          width: 24px;
          height: 24px;
          color: #cbd5e0;
        }

        .status-icon.completed {
          color: #38a169;
        }

        .level-title {
          font-size: 1.4rem;
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .level-description {
          color: #4a5568;
          margin: 0 0 15px 0;
          line-height: 1.5;
        }

        .level-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .difficulty-badge {
          padding: 4px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .level-category {
          padding: 4px 12px;
          border-radius: 15px;
          background: #edf2f7;
          color: #4a5568;
          font-size: 0.8rem;
        }

        .level-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #cbd5e0;
        }

        .star.filled {
          color: #fbbf24;
        }

        .level-select-footer {
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .levels-grid {
            grid-template-columns: 1fr;
          }

          .level-select-header h1 {
            font-size: 2rem;
          }

          .level-select-header button {
            position: static;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};
