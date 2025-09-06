import React, { useState, useCallback } from 'react';
import { ArrowLeft, Play, Lightbulb, RotateCcw } from 'lucide-react';
import { CodeEditor } from './CodeEditor';
import { Console } from './Console';
import { GridView } from './GridView';
import { HintSystem } from './HintSystem';
import { levels } from '../data/levels';
import { pyodideEngine } from '../engine/pyodideEngine';
import { LocalProgressService } from '../services/localProgressService';
import type { GameProgress, CodeExecutionResult, HintState } from '../types';

interface GameScreenProps {
  levelId: string;
  progress: GameProgress;
  onComplete: (levelId: string, stars: number, hintsUsed: number) => void;
  onBack: () => void;
  progressService?: LocalProgressService | null;
}

export const GameScreen: React.FC<GameScreenProps> = ({ 
  levelId, 
  onComplete, 
  onBack,
  progressService
}) => {
  const level = levels.find(l => l.id === levelId);
  const [code, setCode] = useState(level?.starterCode || '');
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<CodeExecutionResult | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [hintState, setHintState] = useState<HintState>({
    currentHint: 0,
    maxHints: level?.hints.length || 0,
    hints: level?.hints || []
  });

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
      
      // For now, let's make level completion easier for kids
      // Any successful execution gets 1 star minimum
      if (result.success) {
        const stars = result.stars || 1; // Give at least 1 star for successful execution
        const starText = stars > 1 ? 's' : '';
        setConsoleOutput(prev => prev + `\n🎉 Great job! You earned ${stars} star${starText}! 🎉`);
        
        // Update the result to ensure we have stars
        setExecutionResult(prev => prev ? { ...prev, stars } : { ...result, stars });
      }
    } catch (error) {
      const executionTime = Date.now() - startTime;
      setConsoleOutput(`Error: ${error}`);
      
      // Log failed attempt to analytics
      if (progressService) {
        await progressService.logCodeAttempt(
          levelId,
          code,
          false,
          error?.toString(),
          executionTime
        );
      }
    } finally {
      setIsRunning(false);
    }
  }, [code, level, levelId, hintState.currentHint, onComplete, progressService]);

  const resetCode = () => {
    setCode(level.starterCode);
    setConsoleOutput('');
    setExecutionResult(null);
  };

  const getNextHint = () => {
    if (hintState.currentHint < hintState.maxHints) {
      setHintState(prev => ({
        ...prev,
        currentHint: prev.currentHint + 1
      }));
    }
  };

  const stars = executionResult?.stars || 0;

  return (
    <div className="game-screen">
      <div className="game-header">
        <button className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft className="btn-icon" />
          Back
        </button>
        
        <div className="level-info">
          <h1>{level.title}</h1>
          <p>{level.description}</p>
        </div>

        <div className="game-actions">
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
                    onClick={() => onComplete(levelId, executionResult.stars || 1, hintState.currentHint)}
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

      <style>{`
        .game-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .level-info h1 {
          color: #2d3748;
          margin: 0 0 5px 0;
          font-size: 1.8rem;
        }

        .level-info p {
          color: #4a5568;
          margin: 0;
        }

        .game-actions {
          display: flex;
          gap: 10px;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        .game-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          height: calc(100vh - 140px);
        }

        .game-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .instructions-panel,
        .editor-panel,
        .console-panel {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .instructions-panel h3,
        .editor-panel h3 {
          color: #2d3748;
          margin: 0 0 15px 0;
          font-size: 1.2rem;
        }

        .instructions-panel p {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .editor-actions {
          display: flex;
          gap: 10px;
        }

        .game-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dice-visualization {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .dice-visualization h3 {
          color: #2d3748;
          margin: 0 0 20px 0;
        }

        .dice-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
        }

        .dice {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .completion-message {
          background: linear-gradient(135deg, #06ffa5, #00d4aa);
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-top: 15px;
          text-align: center;
          animation: bounce 0.5s ease-out;
        }

        .completion-message h4 {
          margin: 0 0 10px 0;
          font-size: 1.3rem;
        }

        .completion-message p {
          margin: 5px 0;
          font-size: 1rem;
        }

        @media (max-width: 1024px) {
          .game-content {
            grid-template-columns: 1fr;
            height: auto;
          }

          .game-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .game-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
