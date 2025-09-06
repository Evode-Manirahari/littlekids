import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { musicService } from '../services/musicService';

interface MusicToggleProps {
  musicEnabled: boolean;
  onMusicToggle: (enabled: boolean) => void;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ musicEnabled, onMusicToggle }) => {
  const handleToggle = () => {
    const newState = !musicEnabled;
    onMusicToggle(newState);
    musicService.setMusicEnabled(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`music-toggle ${musicEnabled ? 'enabled' : 'disabled'}`}
      title={musicEnabled ? 'Disable background music' : 'Enable background music'}
      aria-label={musicEnabled ? 'Disable background music' : 'Enable background music'}
    >
      {musicEnabled ? (
        <Volume2 size={20} />
      ) : (
        <VolumeX size={20} />
      )}
      <span className="music-toggle-label">
        {musicEnabled ? 'Music On' : 'Music Off'}
      </span>
    </button>
  );
};
