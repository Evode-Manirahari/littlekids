import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Lightbulb, RotateCcw, BookOpen, Video, HelpCircle } from 'lucide-react';
import { CodeEditor } from './CodeEditor';
import { Console } from './Console';
import { GridView } from './GridView';
import { HintSystem } from './HintSystem';
import { ThemeToggle } from './ThemeToggle';
import { SoundToggle } from './SoundToggle';
import { AchievementModal } from './AchievementModal';
import { CodeSnippetsPanel } from './CodeSnippetsPanel';
import { ConceptGlossary } from './ConceptGlossary';
import { ErrorTranslator } from './ErrorTranslator';
import { VideoTutorial } from './VideoTutorial';
import { levels } from '../data/levels';
import { codeSnippets } from '../data/codeSnippets';
import { conceptGlossary } from '../data/conceptGlossary';
import { errorTranslations } from '../data/errorTranslations';
import { achievements } from '../data/achievements';
import { pyodideEngine } from '../engine/pyodideEngine';
import { LocalProgressService } from '../services/localProgressService';
import { soundService } from '../services/soundService';
import { particleService } from '../services/particleService';
import type { GameProgress, CodeExecutionResult, HintState, Achievement } from '../types';

interface EnhancedGameScreenProps {
  levelId: string;
  progress: GameProgress;
  onComplete: (levelId: string, stars: number, hintsUsed: number) => void;
  onBack: () => void;
  progressService?: LocalProgressService | null;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
}

export const EnhancedGameScreen: React.FC<EnhancedGameScreenProps> = ({ 
  levelId, 
  onComplete, 
  onBack,
  progressService,
  theme,
  onThemeToggle,
  soundEnabled,
  onSoundToggle
}) => {
  const level = levels.find(l => l.id === levelId);
  const [code, setCode] = useState(level?.starterCode || '');
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<CodeExecutionResult | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showErrorTranslator, setShowErrorTranslator] = useState(false);
  const [currentError, setCurrentError] = useState<string>('');
  const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);
  const [hintState, setHintState] = useState<HintState>({
    currentHint: 0,
    maxHints: level?.hints.length || 0,
    hints: level?.hints || []
  });
  
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particleCanvasRef.current) {
      particleService.initialize(particleCanvasRef.current);
    }
    
    return () => {
      particleService.destroy();
    };
  }, []);

  useEffect(() => {
    soundService.setSoundEnabled(soundEnabled);
  }, [soundEnabled]);

  if (!level) {
    return (
      <div className="error-screen">
        <h2>Level not found!</h2>
        <button className="btn btn-primary" onClick={onBack}>Go Back</button>
      </div>
    );
  }

  const runCode = useCallback(async () => {
    setIsRunning(true);
    setConsoleOutput('');
    setExecutionResult(null);
    setCurrentError('');
    setShowErrorTranslator(false);

    // Play code run sound
    soundService.playCodeRun();

    const startTime = Date.now();

    try {
      const result = await pyodideEngine.executeCode(code, level);
      const executionTime = Date.now() - startTime;
      
      setExecutionResult(result);
      setConsoleOutput(result.output);
      
      // Log attempt to analytics
      if (progressService) {
        await progressService.logCodeAttempt(
          levelId,
          code,
          result.success,
          result.error,
          executionTime
        );
      }
      
      if (result.success) {
        // Play success sound
        soundService.playSuccess();
        
        // Create particle effect
        if (gameContainerRef.current) {
          const rect = gameContainerRef.current.getBoundingClientRect();
          particleService.createSuccessEffect(rect.width / 2, rect.height / 2);
        }
        
        const stars = result.stars || 1;
        const starText = stars > 1 ? 's' : '';
        setConsoleOutput(prev => prev + `\n🎉 Great job! You earned ${stars} star${starText}! 🎉`);
        
        // Check for achievements
        checkAchievements(levelId, stars);
        
        setExecutionResult(prev => prev ? { ...prev, stars } : { ...result, stars });
      } else if (result.error) {
        // Play error sound
        soundService.playError();
        
        // Show error translator
        setCurrentError(result.error);
        setShowErrorTranslator(true);
      }
    } catch (error) {
      const executionTime = Date.now() - startTime;
      const errorMessage = error?.toString() || 'Unknown error';
      
      // Play error sound
      soundService.playError();
      
      // Show error translator
      setCurrentError(errorMessage);
      setShowErrorTranslator(true);
      setConsoleOutput(`Error: ${errorMessage}`);
      
      // Log failed attempt to analytics
      if (progressService) {
        await progressService.logCodeAttempt(
          levelId,
          code,
          false,
          errorMessage,
          executionTime
        );
      }
    } finally {
      setIsRunning(false);
    }
  }, [code, level, levelId, progressService]);

  const checkAchievements = (_levelId: string, stars: number) => {
    // Check for various achievements
    const achievementChecks = [
      { id: 'first_code', condition: () => true },
      { id: 'print_master', condition: () => level.category === 'print' },
      { id: 'loop_wizard', condition: () => level.category === 'loops' },
      { id: 'function_builder', condition: () => level.category === 'functions' },
      { id: 'list_collector', condition: () => level.category === 'lists' },
      { id: 'string_artist', condition: () => level.category === 'strings' },
      { id: 'conditional_thinker', condition: () => level.category === 'conditionals' },
      { id: 'debug_detective', condition: () => level.category === 'debugging' },
      { id: 'project_creator', condition: () => level.category === 'project' },
      { id: 'star_collector', condition: () => stars >= 3 },
      { id: 'speed_demon', condition: () => true } // This would need timing logic
    ];

    for (const check of achievementChecks) {
      if (check.condition()) {
        const achievement = achievements.find(a => a.id === check.id);
        if (achievement && !achievement.unlocked) {
          achievement.unlocked = true;
          achievement.unlockedAt = new Date().toISOString();
          setUnlockedAchievement(achievement);
          
          // Play achievement sound
          soundService.playAchievement();
          
          // Create achievement particle effect
          if (gameContainerRef.current) {
            const rect = gameContainerRef.current.getBoundingClientRect();
            particleService.createAchievementEffect(rect.width / 2, rect.height / 2);
          }
          break; // Only show one achievement at a time
        }
      }
    }
  };

  const resetCode = () => {
    setCode(level.starterCode);
    setConsoleOutput('');
    setExecutionResult(null);
    setCurrentError('');
    setShowErrorTranslator(false);
    soundService.playClick();
  };

  const getNextHint = () => {
    if (hintState.currentHint < hintState.maxHints) {
      setHintState(prev => ({
        ...prev,
        currentHint: prev.currentHint + 1
      }));
      soundService.playHint();
    }
  };

  const handleInsertSnippet = (snippetCode: string) => {
    setCode(prev => prev + '\n' + snippetCode);
    soundService.playClick();
  };

  const handleLevelComplete = () => {
    soundService.playLevelComplete();
    
    // Create confetti effect
    if (gameContainerRef.current) {
      const rect = gameContainerRef.current.getBoundingClientRect();
      particleService.createConfettiEffect(rect.width / 2, rect.height / 2);
    }
    
    onComplete(levelId, executionResult?.stars || 1, hintState.currentHint);
  };

  const stars = executionResult?.stars || 0;

  return (
    <div className="game-screen" data-theme={theme} ref={gameContainerRef}>
      {/* Particle Canvas */}
      <canvas
        ref={particleCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1000
        }}
      />

      <div className="game-header">
        <button className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft className="btn-icon" />
          Back
        </button>
        
        <div className="level-info">
          <h1>{level.title}</h1>
          <p>{level.description}</p>
        </div>

        <div className="game-controls">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <SoundToggle soundEnabled={soundEnabled} onToggle={onSoundToggle} />
          
          <button 
            className="btn btn-secondary"
            onClick={() => setShowHints(!showHints)}
          >
            <Lightbulb className="btn-icon" />
            Hints ({hintState.currentHint}/{hintState.maxHints})
          </button>
          
          <button className="btn btn-secondary" onClick={resetCode}>
            <RotateCcw className="btn-icon" />
            Reset
          </button>
        </div>
      </div>

      <div className="game-content">
        <div className="game-left">
          <div className="instructions-panel">
            <h3>📝 Instructions</h3>
            <p>{level.instructions}</p>
            
            {/* Educational Content */}
            <div className="educational-content">
              {level.videoTutorial && (
                <button 
                  className="btn btn-secondary btn-small"
                  onClick={() => setShowVideo(true)}
                >
                  <Video className="btn-icon" />
                  Watch Tutorial
                </button>
              )}
              
              {level.codeWalkthrough && (
                <button 
                  className="btn btn-secondary btn-small"
                  onClick={() => setShowGlossary(true)}
                >
                  <HelpCircle className="btn-icon" />
                  Code Walkthrough
                </button>
              )}
              
              <button 
                className="btn btn-secondary btn-small"
                onClick={() => setShowGlossary(true)}
              >
                <BookOpen className="btn-icon" />
                Glossary
              </button>
            </div>
            
            {showHints && (
              <HintSystem 
                hintState={hintState}
                onGetHint={getNextHint}
              />
            )}
          </div>

          <div className="editor-panel">
            <div className="editor-header">
              <h3>🐍 Your Code</h3>
              <div className="editor-actions">
                <button 
                  className="btn btn-primary"
                  onClick={runCode}
                  disabled={isRunning}
                >
                  <Play className="btn-icon" />
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>
                
                {executionResult?.success && (
                  <button 
                    className="btn btn-success"
                    onClick={handleLevelComplete}
                  >
                    🎉 Next Level! 🎉
                  </button>
                )}
              </div>
            </div>
            
            <CodeEditor 
              value={code}
              onChange={setCode}
              language="python"
            />
          </div>

          <div className="console-panel">
            <Console 
              output={consoleOutput}
              isRunning={isRunning}
              testResults={executionResult?.testResults}
              stars={stars}
            />
            
            {showErrorTranslator && currentError && (
              <ErrorTranslator 
                error={currentError}
                translations={errorTranslations}
              />
            )}
            
            {executionResult?.success && (
              <div className="completion-message">
                <h4>🎉 Level Completed! 🎉</h4>
                <p>You earned {executionResult.stars || 1} star{(executionResult.stars || 1) > 1 ? 's' : ''}!</p>
                <p>Click "Next Level!" to continue your adventure!</p>
              </div>
            )}
          </div>
        </div>

        <div className="game-right">
          {level.world && (
            <GridView 
              world={level.world}
              moves={executionResult?.testResults?.[0]?.actual}
            />
          )}
          
          {level.category === 'loops' && (
            <div className="dice-visualization">
              <h3>🎲 Dice Visualization</h3>
              <div className="dice-container">
                <div className="dice bounce">
                  {executionResult?.testResults?.[0]?.actual || '?'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Code Snippets Panel */}
      <CodeSnippetsPanel 
        snippets={codeSnippets}
        onInsertSnippet={handleInsertSnippet}
      />

      {/* Modals */}
      {showGlossary && (
        <ConceptGlossary 
          concepts={conceptGlossary}
          onClose={() => setShowGlossary(false)}
        />
      )}

      {showVideo && level.videoTutorial && (
        <VideoTutorial 
          videoUrl={level.videoTutorial}
          additionalTutorials={level.additionalTutorials}
          title={level.title}
          onClose={() => setShowVideo(false)}
        />
      )}

      {unlockedAchievement && (
        <AchievementModal 
          achievement={unlockedAchievement}
          onClose={() => setUnlockedAchievement(null)}
        />
      )}
    </div>
  );
};
