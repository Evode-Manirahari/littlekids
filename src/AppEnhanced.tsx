import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { EnhancedGameScreen } from './components/EnhancedGameScreen';
import { LevelSelect } from './components/LevelSelect';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AuthModal } from './components/AuthModal';
import { TeacherDashboard } from './components/TeacherDashboard';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeSelector } from './components/ThemeSelector';
import { SoundToggle } from './components/SoundToggle';
import { MusicToggle } from './components/MusicToggle';
import { LocalAuthProvider, useLocalAuth } from './contexts/LocalAuthContext';
import { LocalProgressService } from './services/localProgressService';
import { soundService } from './services/soundService';
import type { GameProgressEnhanced } from './types';

// Main App Router Component
function AppRouter() {
  const { user, profile, loading } = useLocalAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [themeId, setThemeId] = useState<string>('ocean');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const navigate = useNavigate();

  // Load user preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('codequest-theme') as 'light' | 'dark' || 'light';
    const savedThemeId = localStorage.getItem('codequest-theme-id') || 'ocean';
    const savedSound = localStorage.getItem('codequest-sound') === 'true';
    const savedMusic = localStorage.getItem('codequest-music') === 'true';
    setTheme(savedTheme);
    setThemeId(savedThemeId);
    setSoundEnabled(savedSound);
    setMusicEnabled(savedMusic);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('codequest-theme', newTheme);
  };

  const handleSoundToggle = () => {
    const newSoundEnabled = !soundEnabled;
    setSoundEnabled(newSoundEnabled);
    localStorage.setItem('codequest-sound', newSoundEnabled.toString());
    soundService.setSoundEnabled(newSoundEnabled);
  };

  const handleMusicToggle = () => {
    const newMusicEnabled = !musicEnabled;
    setMusicEnabled(newMusicEnabled);
    localStorage.setItem('codequest-music', newMusicEnabled.toString());
  };

  const handleThemeChange = (newThemeId: string) => {
    setThemeId(newThemeId);
    localStorage.setItem('codequest-theme-id', newThemeId);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading CodeQuest Jr...</p>
      </div>
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <Routes>
          <Route path="/" element={
            <WelcomeScreen 
              onStart={() => {
                console.log('Start button clicked, user:', user);
                if (user) {
                  console.log('Navigating to /game');
                  navigate('/game');
                } else {
                  console.log('Opening auth modal');
                  setShowAuthModal(true);
                }
              }}
              theme={theme}
              onThemeToggle={handleThemeToggle}
              themeId={themeId}
              onThemeChange={handleThemeChange}
              soundEnabled={soundEnabled}
              onSoundToggle={handleSoundToggle}
              musicEnabled={musicEnabled}
              onMusicToggle={handleMusicToggle}
              onTeacherDashboard={() => navigate('/teacher')}
              user={user}
              profile={profile}
            />
          } />
          
          <Route path="/game" element={
            user ? <GameApp 
              theme={theme}
              onThemeToggle={handleThemeToggle}
              soundEnabled={soundEnabled}
              onSoundToggle={handleSoundToggle}
              musicEnabled={musicEnabled}
              onMusicToggle={handleMusicToggle}
            /> : <Navigate to="/" replace />
          } />
          
          <Route path="/teacher" element={
            user && profile?.role === 'teacher' ? 
            <TeacherDashboard 
              theme={theme}
              onThemeToggle={handleThemeToggle}
              soundEnabled={soundEnabled}
              onSoundToggle={handleSoundToggle}
            /> : 
            <Navigate to="/" replace />
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
}

// Game Application Component (for authenticated users)
function GameApp({ 
  theme, 
  onThemeToggle, 
  soundEnabled, 
  onSoundToggle,
  musicEnabled,
  onMusicToggle
}: { 
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  musicEnabled: boolean;
  onMusicToggle: () => void;
}) {
  const { user } = useLocalAuth();
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState<'levelSelect' | 'game'>('levelSelect');
  const [currentLevelId, setCurrentLevelId] = useState<string>('');
  const [progress, setProgress] = useState<GameProgressEnhanced>({
    currentLevel: 'level1',
    completedLevels: [],
    stars: {},
    totalStars: 0,
    achievements: [],
    streak: 0,
    lastPlayed: new Date().toISOString(),
    avatar: '🤖',
    theme: theme,
    soundEnabled: soundEnabled,
    musicEnabled: false,
    hintsUsed: {}
  });
  const [progressService] = useState(() => user ? new LocalProgressService(user.id) : null);

  // Load progress from cloud on mount
  useEffect(() => {
    if (progressService) {
      loadProgress();
    }
  }, [progressService]);

  const loadProgress = async () => {
    if (!progressService) return;
    
    try {
      const cloudProgress = await progressService.loadProgress();
      setProgress(prev => ({
        ...prev,
        ...cloudProgress,
        theme,
        soundEnabled,
        hintsUsed: cloudProgress.hintsUsed || {}
      }));
    } catch (error) {
      console.error('Error loading progress:', error);
      // Fall back to local storage
      const saved = localStorage.getItem('codequest-progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        setProgress(prev => ({
          ...prev,
          ...parsed,
          theme,
          soundEnabled,
          hintsUsed: parsed.hintsUsed || {}
        }));
      }
    }
  };

  // Save progress to both cloud and localStorage
  const saveProgress = async (levelId: string, stars: number, hintsUsed: number, timeSpent: number, attempts: number) => {
    // Save to localStorage
    setProgress(prev => {
      const newProgress = {
        ...prev,
        completedLevels: prev.completedLevels.includes(levelId) 
          ? prev.completedLevels 
          : [...prev.completedLevels, levelId],
        stars: { ...prev.stars, [levelId]: Math.max(prev.stars[levelId] || 0, stars) },
        totalStars: Object.values({ ...prev.stars, [levelId]: Math.max(prev.stars[levelId] || 0, stars) }).reduce((sum, s) => sum + s, 0),
        lastPlayed: new Date().toISOString()
      };
      localStorage.setItem('codequest-progress', JSON.stringify(newProgress));
      return newProgress;
    });

    // Save to cloud
    if (progressService) {
      try {
        await progressService.saveProgress(levelId, stars, hintsUsed, timeSpent, attempts);
      } catch (error) {
        console.error('Error saving progress to cloud:', error);
      }
    }
  };

  const startGame = (levelId: string) => {
    setCurrentLevelId(levelId);
    setCurrentScreen('game');
  };

  const resetProgress = () => {
    setProgress({
      currentLevel: 'level1',
      completedLevels: [],
      stars: {},
      totalStars: 0,
      achievements: [],
      streak: 0,
      lastPlayed: new Date().toISOString(),
      avatar: '🤖',
      theme,
      soundEnabled,
      musicEnabled: false,
      hintsUsed: {}
    });
    localStorage.removeItem('codequest-progress');
  };

  return (
    <>
      {currentScreen === 'levelSelect' && (
        <LevelSelect 
          progress={progress}
          onSelectLevel={startGame}
          onBack={() => navigate('/')}
          onReset={resetProgress}
        />
      )}
      
      {currentScreen === 'game' && (
        <EnhancedGameScreen 
          levelId={currentLevelId}
          progress={progress}
          onComplete={(levelId, stars, hintsUsed) => {
            saveProgress(levelId, stars, hintsUsed, 0, 1);
            setCurrentScreen('levelSelect');
          }}
          onBack={() => setCurrentScreen('levelSelect')}
          progressService={progressService}
          theme={theme}
          onThemeToggle={onThemeToggle}
          soundEnabled={soundEnabled}
          onSoundToggle={onSoundToggle}
          musicEnabled={musicEnabled}
          onMusicToggle={onMusicToggle}
        />
      )}
    </>
  );
}

// Main App Component with Auth Provider
function App() {
  return (
    <LocalAuthProvider>
      <Router>
        <AppRouter />
      </Router>
    </LocalAuthProvider>
  );
}

export default App;
