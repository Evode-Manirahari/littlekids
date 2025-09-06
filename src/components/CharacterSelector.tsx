import React, { useState } from 'react';
import { Robot, Cat, Dragon, Check } from 'lucide-react';
import { AnimatedCharacter } from './AnimatedCharacter';

interface CharacterSelectorProps {
  selectedCharacter: 'robot' | 'cat' | 'dragon';
  onCharacterChange: (character: 'robot' | 'cat' | 'dragon') => void;
  className?: string;
}

export const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  selectedCharacter,
  onCharacterChange,
  className = ''
}) => {
  const [hoveredCharacter, setHoveredCharacter] = useState<'robot' | 'cat' | 'dragon' | null>(null);

  const characters = [
    {
      id: 'robot' as const,
      name: 'Robo',
      description: 'A friendly robot who loves coding!',
      icon: Robot,
      color: '#4f46e5'
    },
    {
      id: 'cat' as const,
      name: 'Whiskers',
      description: 'A curious cat who loves puzzles!',
      icon: Cat,
      color: '#f59e0b'
    },
    {
      id: 'dragon' as const,
      name: 'Sparky',
      description: 'A magical dragon who breathes code!',
      icon: Dragon,
      color: '#ef4444'
    }
  ];

  return (
    <div className={`character-selector ${className}`}>
      <h3 className="character-selector-title">Choose Your Coding Buddy!</h3>
      <div className="character-grid">
        {characters.map((character) => {
          const IconComponent = character.icon;
          const isSelected = selectedCharacter === character.id;
          const isHovered = hoveredCharacter === character.id;
          
          return (
            <div
              key={character.id}
              className={`character-option ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
              onClick={() => onCharacterChange(character.id)}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              style={{
                '--character-color': character.color
              } as React.CSSProperties}
            >
              <div className="character-preview">
                <AnimatedCharacter
                  type={character.id}
                  isAnimating={isHovered || isSelected}
                  animationType={isSelected ? 'celebrating' : isHovered ? 'happy' : 'idle'}
                  size="large"
                />
              </div>
              
              <div className="character-info">
                <div className="character-name">
                  <IconComponent size={20} />
                  <span>{character.name}</span>
                </div>
                <p className="character-description">{character.description}</p>
              </div>
              
              {isSelected && (
                <div className="character-selected">
                  <Check size={24} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
