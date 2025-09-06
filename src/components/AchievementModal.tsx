import React from 'react';
import { X } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  return (
    <div className="achievement-modal-overlay">
      <div className="achievement-modal">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="achievement-content">
          <div className="achievement-icon">
            {achievement.icon}
          </div>
          <h2>🎉 Achievement Unlocked! 🎉</h2>
          <h3>{achievement.name}</h3>
          <p>{achievement.description}</p>
        </div>
        
        <div className="achievement-animation">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">⭐</div>
          <div className="sparkle sparkle-3">✨</div>
          <div className="sparkle sparkle-4">⭐</div>
        </div>
      </div>
    </div>
  );
};
