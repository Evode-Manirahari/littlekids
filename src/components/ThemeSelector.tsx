import React, { useState } from 'react';
import { Palette, Check, Eye } from 'lucide-react';
import { themes } from '../data/themes';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
  className?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<string | null>(null);

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

  const handleThemeSelect = (themeId: string) => {
    onThemeChange(themeId);
    setIsOpen(false);
    setPreviewTheme(null);
  };

  const handlePreview = (themeId: string) => {
    setPreviewTheme(themeId);
  };

  const handlePreviewEnd = () => {
    setPreviewTheme(null);
  };

  return (
    <div className={`theme-selector ${className}`}>
      <button
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          '--theme-primary': currentThemeData.colors.primary,
          '--theme-accent': currentThemeData.colors.accent
        } as React.CSSProperties}
      >
        <Palette size={20} />
        <span>{currentThemeData.name}</span>
      </button>

      {isOpen && (
        <div className="theme-selector-dropdown">
          <div className="theme-selector-header">
            <h3>Choose Your Theme</h3>
            <p>Pick a color scheme that inspires you!</p>
          </div>
          
          <div className="theme-grid">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'selected' : ''} ${previewTheme === theme.id ? 'previewing' : ''}`}
                onClick={() => handleThemeSelect(theme.id)}
                onMouseEnter={() => handlePreview(theme.id)}
                onMouseLeave={handlePreviewEnd}
                style={{
                  '--theme-primary': theme.colors.primary,
                  '--theme-secondary': theme.colors.secondary,
                  '--theme-accent': theme.colors.accent,
                  '--theme-background': theme.colors.background,
                  '--theme-surface': theme.colors.surface,
                  '--theme-text': theme.colors.text
                } as React.CSSProperties}
              >
                <div className="theme-preview">
                  <div className="theme-preview-colors">
                    <div 
                      className="color-swatch primary" 
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div 
                      className="color-swatch secondary" 
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                    <div 
                      className="color-swatch accent" 
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    <div 
                      className="color-swatch background" 
                      style={{ backgroundColor: theme.colors.background }}
                    />
                  </div>
                  
                  <div className="theme-preview-demo">
                    <div className="demo-button">Button</div>
                    <div className="demo-card">
                      <div className="demo-text">Sample Text</div>
                    </div>
                  </div>
                </div>
                
                <div className="theme-info">
                  <h4>{theme.name}</h4>
                  <p>{theme.description}</p>
                </div>
                
                {currentTheme === theme.id && (
                  <div className="theme-selected">
                    <Check size={20} />
                  </div>
                )}
                
                {previewTheme === theme.id && (
                  <div className="theme-preview-overlay">
                    <Eye size={16} />
                    <span>Preview</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
