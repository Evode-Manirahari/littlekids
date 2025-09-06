import React, { useState, useEffect } from 'react';
import { Robot, Cat, Dragon, Star, Zap, Heart } from 'lucide-react';

interface AnimatedCharacterProps {
  type: 'robot' | 'cat' | 'dragon';
  isAnimating?: boolean;
  animationType?: 'idle' | 'happy' | 'thinking' | 'celebrating' | 'working';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  type,
  isAnimating = false,
  animationType = 'idle',
  size = 'medium',
  className = ''
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Animation frames for different states
  const animations = {
    idle: {
      robot: ['🤖', '🤖', '🤖', '🤖'],
      cat: ['🐱', '🐱', '🐱', '🐱'],
      dragon: ['🐉', '🐉', '🐉', '🐉']
    },
    happy: {
      robot: ['🤖', '🤖', '🤖', '🤖'],
      cat: ['😸', '😸', '😸', '😸'],
      dragon: ['🐉', '🐉', '🐉', '🐉']
    },
    thinking: {
      robot: ['🤔', '🤔', '🤔', '🤔'],
      cat: ['😺', '😺', '😺', '😺'],
      dragon: ['🐉', '🐉', '🐉', '🐉']
    },
    celebrating: {
      robot: ['🎉', '🤖', '🎉', '🤖'],
      cat: ['🎉', '😸', '🎉', '😸'],
      dragon: ['🎉', '🐉', '🎉', '🐉']
    },
    working: {
      robot: ['⚙️', '🤖', '⚙️', '🤖'],
      cat: ['🐾', '😸', '🐾', '😸'],
      dragon: ['🔥', '🐉', '🔥', '🐉']
    }
  };

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  };

  const animationClasses = {
    idle: 'animate-bounce',
    happy: 'animate-bounce',
    thinking: 'animate-pulse',
    celebrating: 'animate-bounce',
    working: 'animate-pulse'
  };

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % animations[animationType][type].length);
    }, 500);

    return () => clearInterval(interval);
  }, [isAnimating, animationType, type]);

  // Special effects for celebrating
  useEffect(() => {
    if (animationType === 'celebrating') {
      setIsVisible(false);
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animationType]);

  const getCharacterEmoji = () => {
    const frames = animations[animationType][type];
    return frames[currentFrame] || frames[0];
  };

  const getSpecialEffects = () => {
    if (animationType === 'celebrating') {
      return (
        <div className="character-effects">
          <Star className="effect-star-1" size={16} />
          <Star className="effect-star-2" size={20} />
          <Star className="effect-star-3" size={14} />
          <Zap className="effect-zap-1" size={18} />
          <Zap className="effect-zap-2" size={16} />
          <Heart className="effect-heart-1" size={16} />
          <Heart className="effect-heart-2" size={14} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`animated-character ${className}`}>
      <div 
        className={`character-container ${sizeClasses[size]} ${animationClasses[animationType]} ${isVisible ? 'visible' : 'hidden'}`}
        style={{ 
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }}
      >
        {getCharacterEmoji()}
      </div>
      {getSpecialEffects()}
      
      <style jsx>{`
        .animated-character {
          position: relative;
          display: inline-block;
        }
        
        .character-container {
          transition: all 0.3s ease;
        }
        
        .character-container.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .character-container.hidden {
          opacity: 0;
          transform: scale(0.8);
        }
        
        .character-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          animation: sparkle 1s ease-in-out infinite;
        }
        
        .effect-star-1 {
          position: absolute;
          top: -10px;
          left: 20px;
          color: #ffd700;
          animation: float 2s ease-in-out infinite;
        }
        
        .effect-star-2 {
          position: absolute;
          top: 10px;
          right: -10px;
          color: #ff6b6b;
          animation: float 2s ease-in-out infinite 0.5s;
        }
        
        .effect-star-3 {
          position: absolute;
          bottom: -5px;
          left: -5px;
          color: #4ecdc4;
          animation: float 2s ease-in-out infinite 1s;
        }
        
        .effect-zap-1 {
          position: absolute;
          top: 5px;
          left: -15px;
          color: #ffd700;
          animation: zap 1.5s ease-in-out infinite;
        }
        
        .effect-zap-2 {
          position: absolute;
          bottom: 5px;
          right: -15px;
          color: #ff6b6b;
          animation: zap 1.5s ease-in-out infinite 0.7s;
        }
        
        .effect-heart-1 {
          position: absolute;
          top: -5px;
          right: 10px;
          color: #ff69b4;
          animation: heartbeat 1s ease-in-out infinite;
        }
        
        .effect-heart-2 {
          position: absolute;
          bottom: 0px;
          left: 10px;
          color: #ff69b4;
          animation: heartbeat 1s ease-in-out infinite 0.5s;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes zap {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};
