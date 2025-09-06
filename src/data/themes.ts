// Theme definitions for CodeQuest Jr.
// Multiple color schemes to choose from

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  gradients: {
    background: string;
    surface: string;
    accent: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    description: 'Cool blues and teals like the deep sea',
    colors: {
      primary: '#0066CC',
      secondary: '#00B4D8',
      accent: '#0077B6',
      background: '#001D3D',
      surface: '#003566',
      text: '#FFFFFF',
      textSecondary: '#B8D4F0',
      border: '#0077B6',
      success: '#00C851',
      warning: '#FF8800',
      error: '#FF4444',
      info: '#33B5E5'
    },
    gradients: {
      background: 'linear-gradient(135deg, #001D3D 0%, #003566 100%)',
      surface: 'linear-gradient(135deg, #003566 0%, #0077B6 100%)',
      accent: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(0, 119, 182, 0.2)',
      medium: '0 4px 8px rgba(0, 119, 182, 0.3)',
      large: '0 8px 16px rgba(0, 119, 182, 0.4)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    description: 'Warm oranges and purples like a beautiful sunset',
    colors: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FF8E53',
      background: '#2D1B69',
      surface: '#4A2C7A',
      text: '#FFFFFF',
      textSecondary: '#FFE5D9',
      border: '#FF8E53',
      success: '#00C851',
      warning: '#FFD700',
      error: '#FF4444',
      info: '#FF8E53'
    },
    gradients: {
      background: 'linear-gradient(135deg, #2D1B69 0%, #4A2C7A 100%)',
      surface: 'linear-gradient(135deg, #4A2C7A 0%, #FF6B35 100%)',
      accent: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(255, 107, 53, 0.2)',
      medium: '0 4px 8px rgba(255, 107, 53, 0.3)',
      large: '0 8px 16px rgba(255, 107, 53, 0.4)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'forest',
    name: 'Forest Adventure',
    description: 'Natural greens and browns like a magical forest',
    colors: {
      primary: '#2D5016',
      secondary: '#4A7C59',
      accent: '#6B8E23',
      background: '#0F1419',
      surface: '#1A2332',
      text: '#FFFFFF',
      textSecondary: '#B8D4B8',
      border: '#6B8E23',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#4CAF50'
    },
    gradients: {
      background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)',
      surface: 'linear-gradient(135deg, #1A2332 0%, #2D5016 100%)',
      accent: 'linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(107, 142, 35, 0.2)',
      medium: '0 4px 8px rgba(107, 142, 35, 0.3)',
      large: '0 8px 16px rgba(107, 142, 35, 0.4)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'cosmic',
    name: 'Cosmic Space',
    description: 'Deep purples and pinks like outer space',
    colors: {
      primary: '#6A4C93',
      secondary: '#9A4C95',
      accent: '#C77DFF',
      background: '#0A0A0A',
      surface: '#1A0A2E',
      text: '#FFFFFF',
      textSecondary: '#E0B0FF',
      border: '#C77DFF',
      success: '#00E676',
      warning: '#FFD600',
      error: '#FF1744',
      info: '#C77DFF'
    },
    gradients: {
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 100%)',
      surface: 'linear-gradient(135deg, #1A0A2E 0%, #6A4C93 100%)',
      accent: 'linear-gradient(135deg, #6A4C93 0%, #C77DFF 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(199, 125, 255, 0.2)',
      medium: '0 4px 8px rgba(199, 125, 255, 0.3)',
      large: '0 8px 16px rgba(199, 125, 255, 0.4)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'neon',
    name: 'Neon Cyber',
    description: 'Bright neon colors like a cyberpunk city',
    colors: {
      primary: '#00FFFF',
      secondary: '#FF00FF',
      accent: '#00FF00',
      background: '#000000',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      border: '#00FFFF',
      success: '#00FF00',
      warning: '#FFFF00',
      error: '#FF0000',
      info: '#00FFFF'
    },
    gradients: {
      background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
      surface: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
      accent: 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(0, 255, 255, 0.3)',
      medium: '0 4px 8px rgba(0, 255, 255, 0.4)',
      large: '0 8px 16px rgba(0, 255, 255, 0.5)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'pastel',
    name: 'Pastel Dreams',
    description: 'Soft pastel colors like cotton candy clouds',
    colors: {
      primary: '#FFB3BA',
      secondary: '#FFDFBA',
      accent: '#FFFFBA',
      background: '#F0F8FF',
      surface: '#FFFFFF',
      text: '#4A4A4A',
      textSecondary: '#8A8A8A',
      border: '#FFB3BA',
      success: '#B3FFB3',
      warning: '#FFFFB3',
      error: '#FFB3B3',
      info: '#B3E5FF'
    },
    gradients: {
      background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
      surface: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8FF 100%)',
      accent: 'linear-gradient(135deg, #FFB3BA 0%, #FFDFBA 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(255, 179, 186, 0.2)',
      medium: '0 4px 8px rgba(255, 179, 186, 0.3)',
      large: '0 8px 16px rgba(255, 179, 186, 0.4)'
    },
    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '16px'
    }
  },
  {
    id: 'monochrome',
    name: 'Classic Monochrome',
    description: 'Clean black and white for a professional look',
    colors: {
      primary: '#000000',
      secondary: '#333333',
      accent: '#666666',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#000000',
      textSecondary: '#666666',
      border: '#CCCCCC',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3'
    },
    gradients: {
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      surface: 'linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)',
      accent: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
      large: '0 8px 16px rgba(0, 0, 0, 0.2)'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  },
  {
    id: 'rainbow',
    name: 'Rainbow Magic',
    description: 'All the colors of the rainbow for maximum fun',
    colors: {
      primary: '#FF0000',
      secondary: '#FF7F00',
      accent: '#FFFF00',
      background: '#000000',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      border: '#00FF00',
      success: '#00FF00',
      warning: '#FFFF00',
      error: '#FF0000',
      info: '#0000FF'
    },
    gradients: {
      background: 'linear-gradient(135deg, #FF0000 0%, #FF7F00 25%, #FFFF00 50%, #00FF00 75%, #0000FF 100%)',
      surface: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
      accent: 'linear-gradient(135deg, #FF0000 0%, #FF7F00 25%, #FFFF00 50%, #00FF00 75%, #0000FF 100%)'
    },
    shadows: {
      small: '0 2px 4px rgba(255, 0, 0, 0.3)',
      medium: '0 4px 8px rgba(0, 255, 0, 0.3)',
      large: '0 8px 16px rgba(0, 0, 255, 0.3)'
    },
    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '16px'
    }
  }
];

export const defaultTheme = themes[0]; // Ocean Breeze as default
