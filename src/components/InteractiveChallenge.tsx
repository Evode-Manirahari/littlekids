import React, { useState, useEffect } from 'react';
import { CheckCircle, Lightbulb, Target, Trophy, Clock, RotateCcw } from 'lucide-react';

interface ChallengeStep {
  id: string;
  title: string;
  description: string;
  hint: string;
  solution: string;
  isCompleted: boolean;
  points: number;
}

interface InteractiveChallengeProps {
  challengeId: string;
  title: string;
  description: string;
  steps: ChallengeStep[];
  onComplete: (challengeId: string, totalPoints: number) => void;
  onStepComplete: (stepId: string) => void;
  timeLimit?: number; // in minutes
  className?: string;
}

export const InteractiveChallenge: React.FC<InteractiveChallengeProps> = ({
  challengeId,
  title,
  description,
  steps,
  onComplete,
  onStepComplete,
  timeLimit,
  className = ''
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const currentStep = steps[currentStepIndex];
  const progress = (completedSteps.length / steps.length) * 100;

  // Timer effect
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0 || isCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev === null || prev <= 1) {
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isCompleted]);

  const handleStepComplete = (stepId: string) => {
    if (completedSteps.includes(stepId)) return;

    const step = steps.find(s => s.id === stepId);
    if (!step) return;

    setCompletedSteps(prev => [...prev, stepId]);
    setTotalPoints(prev => prev + step.points);
    onStepComplete(stepId);

    // Move to next step
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // All steps completed
      setIsCompleted(true);
      onComplete(challengeId, totalPoints + step.points);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setShowHint(false);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setShowHint(false);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setShowHint(false);
    setIsCompleted(false);
    setTotalPoints(0);
    setTimeRemaining(timeLimit ? timeLimit * 60 : null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStepStatus = (stepId: string) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (steps.findIndex(s => s.id === stepId) === currentStepIndex) return 'current';
    return 'pending';
  };

  return (
    <div className={`interactive-challenge ${className}`}>
      <div className="challenge-header">
        <div className="challenge-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
        <div className="challenge-stats">
          {timeRemaining !== null && (
            <div className="timer">
              <Clock size={16} />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}
          <div className="points">
            <Trophy size={16} />
            <span>{totalPoints} points</span>
          </div>
        </div>
      </div>

      <div className="challenge-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-text">
          {completedSteps.length} of {steps.length} steps completed
        </div>
      </div>

      <div className="challenge-content">
        <div className="steps-sidebar">
          <h3>Steps</h3>
          <div className="steps-list">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-item ${getStepStatus(step.id)}`}
                onClick={() => setCurrentStepIndex(index)}
              >
                <div className="step-number">
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle size={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="step-info">
                  <div className="step-title">{step.title}</div>
                  <div className="step-points">{step.points} pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="current-step">
          <div className="step-header">
            <h3>Step {currentStepIndex + 1}: {currentStep.title}</h3>
            <div className="step-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb size={16} />
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            </div>
          </div>

          <div className="step-content">
            <div className="step-description">
              <p>{currentStep.description}</p>
            </div>

            {showHint && (
              <div className="step-hint">
                <div className="hint-header">
                  <Lightbulb size={16} />
                  <span>Hint</span>
                </div>
                <p>{currentStep.hint}</p>
              </div>
            )}

            <div className="step-solution">
              <div className="solution-header">
                <Target size={16} />
                <span>Solution</span>
              </div>
              <div className="solution-content">
                <pre>{currentStep.solution}</pre>
              </div>
            </div>

            <div className="step-actions-bottom">
              <button
                className="btn btn-primary"
                onClick={() => handleStepComplete(currentStep.id)}
                disabled={completedSteps.includes(currentStep.id)}
              >
                {completedSteps.includes(currentStep.id) ? (
                  <>
                    <CheckCircle size={16} />
                    Completed
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} />
                    Mark as Complete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="challenge-navigation">
        <button
          className="btn btn-secondary"
          onClick={handlePreviousStep}
          disabled={currentStepIndex === 0}
        >
          Previous Step
        </button>
        
        <button
          className="btn btn-secondary"
          onClick={handleReset}
        >
          <RotateCcw size={16} />
          Reset Challenge
        </button>
        
        <button
          className="btn btn-primary"
          onClick={handleNextStep}
          disabled={currentStepIndex === steps.length - 1}
        >
          Next Step
        </button>
      </div>

      {isCompleted && (
        <div className="challenge-completion">
          <div className="completion-content">
            <Trophy size={48} />
            <h3>Challenge Completed!</h3>
            <p>You earned {totalPoints} points!</p>
            <div className="completion-stats">
              <div className="stat">
                <span className="stat-label">Steps Completed:</span>
                <span className="stat-value">{completedSteps.length}/{steps.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Total Points:</span>
                <span className="stat-value">{totalPoints}</span>
              </div>
              {timeRemaining !== null && (
                <div className="stat">
                  <span className="stat-label">Time Remaining:</span>
                  <span className="stat-value">{formatTime(timeRemaining)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
