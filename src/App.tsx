import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { GameScreen } from './components/GameScreen';
import { LevelSelect } from './components/LevelSelect';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AuthModal } from './components/AuthModal';
import { TeacherDashboard } from './components/TeacherDashboard';
import { LocalAuthProvider, useLocalAuth } from './contexts/LocalAuthContext';
import { LocalProgressService } from './services/localProgressService';
import type { GameProgress } from './types';

// Main App Router Component
function AppRouter() {
  const { user, profile, loading } = useLocalAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading CodeQuest Jr...</p>
      </div>
    );
  }

  return (
    <div className="app">
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
              onTeacherDashboard={() => navigate('/teacher')}
              user={user}
              profile={profile}
            />
          } />
          
          <Route path="/game" element={
            user ? <GameApp /> : <Navigate to="/" replace />
          } />
          
          <Route path="/teacher" element={
            user && profile?.role === 'teacher' ? 
            <TeacherDashboard /> : 
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
function GameApp() {
  const { user } = useLocalAuth();
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState<'levelSelect' | 'game'>('levelSelect');
  const [currentLevelId, setCurrentLevelId] = useState<string>('');
  const [progress, setProgress] = useState<GameProgress>({
    completedLevels: [],
    stars: {},
    currentLevel: 'level1',
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
      setProgress(cloudProgress);
    } catch (error) {
      console.error('Error loading progress:', error);
      // Fall back to local storage
      const saved = localStorage.getItem('codequest-progress');
      if (saved) {
        setProgress(JSON.parse(saved));
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
        hintsUsed: { ...prev.hintsUsed, [levelId]: (prev.hintsUsed[levelId] || 0) + hintsUsed }
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
      completedLevels: [],
      stars: {},
      currentLevel: 'level1',
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
        <GameScreen 
          levelId={currentLevelId}
          progress={progress}
          onComplete={(levelId, stars, hintsUsed) => {
            saveProgress(levelId, stars, hintsUsed, 0, 1);
            setCurrentScreen('levelSelect');
          }}
          onBack={() => setCurrentScreen('levelSelect')}
          progressService={progressService}
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
