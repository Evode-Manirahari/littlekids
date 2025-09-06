import React, { useState } from 'react';
import { Play, Pause, X, ExternalLink } from 'lucide-react';

interface VideoTutorialProps {
  videoUrl: string;
  additionalTutorials?: string[];
  title: string;
  onClose: () => void;
}

export const VideoTutorial: React.FC<VideoTutorialProps> = ({ videoUrl, additionalTutorials = [], title, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleOpenExternal = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="video-tutorial-overlay">
      <div className="video-tutorial-modal">
        <div className="video-header">
          <h3>📺 Video Tutorial</h3>
          <div className="video-controls">
            <button 
              className="external-btn"
              onClick={handleOpenExternal}
              title="Open in YouTube"
            >
              <ExternalLink size={16} />
            </button>
            <button className="close-button" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="video-content">
          <div className="video-placeholder">
            <div className="video-thumbnail">
              <div className="play-button" onClick={handlePlayPause}>
                {isPlaying ? <Pause size={48} /> : <Play size={48} />}
              </div>
            </div>
            <p className="video-title">{title}</p>
            <p className="video-description">
              Click the play button to watch the tutorial, or click the external link to open in YouTube.
            </p>
          </div>
          
          {additionalTutorials.length > 0 && (
            <div className="additional-tutorials">
              <h4>📚 Additional Learning Resources</h4>
              <div className="tutorial-links">
                {additionalTutorials.map((url, index) => (
                  <button
                    key={index}
                    className="tutorial-link-btn"
                    onClick={() => window.open(url, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Tutorial {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="video-actions">
          <button className="btn btn-primary" onClick={handleOpenExternal}>
            <ExternalLink size={16} />
            Watch on YouTube
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
