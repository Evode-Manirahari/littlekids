import type { GameProgress } from '../types';

export class LocalProgressService {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  // Save progress to localStorage
  async saveProgress(levelId: string, stars: number, hintsUsed: number, timeSpent: number, attempts: number): Promise<void> {
    try {
      const progressKey = `codequest-progress-${this.userId}`;
      const existingProgress = JSON.parse(localStorage.getItem(progressKey) || '{}');
      
      const progressData = {
        ...existingProgress,
        [levelId]: {
          completed: stars > 0,
          stars: Math.max(existingProgress[levelId]?.stars || 0, stars),
          hints_used: hintsUsed,
          time_spent: timeSpent,
          attempts: attempts,
          last_attempt_at: new Date().toISOString(),
          completed_at: stars > 0 && !existingProgress[levelId]?.completed ? new Date().toISOString() : existingProgress[levelId]?.completed_at,
        }
      };

      localStorage.setItem(progressKey, JSON.stringify(progressData));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  // Load all progress from localStorage
  async loadProgress(): Promise<GameProgress> {
    try {
      const progressKey = `codequest-progress-${this.userId}`;
      const progressData = JSON.parse(localStorage.getItem(progressKey) || '{}');
      
      const progress: GameProgress = {
        completedLevels: [],
        stars: {},
        currentLevel: 'level1',
        hintsUsed: {},
      };

      Object.entries(progressData).forEach(([levelId, data]: [string, any]) => {
        if (data.completed) {
          progress.completedLevels.push(levelId);
        }
        progress.stars[levelId] = data.stars || 0;
        progress.hintsUsed[levelId] = data.hints_used || 0;
      });

      // Find the highest completed level
      const completedLevels = progress.completedLevels.sort();
      if (completedLevels.length > 0) {
        const lastCompleted = completedLevels[completedLevels.length - 1];
        const levelNumber = parseInt(lastCompleted.replace('level', ''));
        progress.currentLevel = `level${levelNumber + 1}`;
      }

      return progress;
    } catch (error) {
      console.error('Error loading progress:', error);
      return {
        completedLevels: [],
        stars: {},
        currentLevel: 'level1',
        hintsUsed: {},
      };
    }
  }

  // Log code attempt for analytics (local storage)
  async logCodeAttempt(levelId: string, code: string, success: boolean, errorMessage?: string, executionTime?: number): Promise<void> {
    try {
      const attemptsKey = `codequest-attempts-${this.userId}`;
      const existingAttempts = JSON.parse(localStorage.getItem(attemptsKey) || '[]');
      
      const attempt = {
        id: Date.now().toString(),
        level_id: levelId,
        code: code,
        success: success,
        error_message: errorMessage,
        execution_time: executionTime || 0,
        created_at: new Date().toISOString(),
      };

      existingAttempts.push(attempt);
      
      // Keep only last 100 attempts to prevent localStorage from getting too large
      if (existingAttempts.length > 100) {
        existingAttempts.splice(0, existingAttempts.length - 100);
      }

      localStorage.setItem(attemptsKey, JSON.stringify(existingAttempts));
    } catch (error) {
      console.error('Error logging code attempt:', error);
    }
  }

  // Get analytics data (local storage)
  async getAnalytics(levelId?: string): Promise<any[]> {
    try {
      const attemptsKey = `codequest-attempts-${this.userId}`;
      const attempts = JSON.parse(localStorage.getItem(attemptsKey) || '[]');
      
      if (levelId) {
        return attempts.filter((attempt: any) => attempt.level_id === levelId);
      }
      
      return attempts;
    } catch (error) {
      console.error('Error getting analytics:', error);
      return [];
    }
  }

  // Get classroom progress (simplified for local storage)
  async getClassroomProgress(_classroomId: string): Promise<any[]> {
    // For local storage, we'll return empty array
    // In a real implementation, this would fetch from a shared storage
    return [];
  }
}
