import React from 'react';
import { ToggleLeft, ToggleRight, Baby, Code } from 'lucide-react';

interface BeginnerModeToggleProps {
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
  className?: string;
}

export const BeginnerModeToggle: React.FC<BeginnerModeToggleProps> = ({
  isEnabled,
  onToggle,
  className = ''
}) => {
  return (
    <button
      className={`beginner-mode-toggle ${isEnabled ? 'enabled' : 'disabled'} ${className}`}
      onClick={() => onToggle(!isEnabled)}
      title={isEnabled ? 'Switch to Advanced Mode' : 'Switch to Beginner Mode'}
    >
      <div className="toggle-content">
        <div className="toggle-icon">
          {isEnabled ? <Baby size={20} /> : <Code size={20} />}
        </div>
        <div className="toggle-text">
          <span className="toggle-label">
            {isEnabled ? 'Beginner Mode' : 'Advanced Mode'}
          </span>
          <span className="toggle-description">
            {isEnabled ? 'Drag & Drop Blocks' : 'Type Code Directly'}
          </span>
        </div>
        <div className="toggle-switch">
          {isEnabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
        </div>
      </div>
    </button>
  );
};
