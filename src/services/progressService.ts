import { supabase } from '../lib/supabase';
import type { GameProgress } from '../types';

export interface CloudProgress {
  level_id: string;
  completed: boolean;
  stars: number;
  hints_used: number;
  time_spent: number;
  attempts: number;
  last_attempt_at: string;
  completed_at?: string;
}

export class ProgressService {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  // Save progress to cloud
  async saveProgress(levelId: string, stars: number, hintsUsed: number, timeSpent: number, attempts: number): Promise<void> {
    try {
      // Check if progress already exists
      const { data: existingProgress } = await supabase
        .from('game_progress')
        .select('*')
        .eq('user_id', this.userId)
        .eq('level_id', levelId)
        .single();

      const progressData = {
        user_id: this.userId,
        level_id: levelId,
        completed: stars > 0,
        stars: Math.max(existingProgress?.stars || 0, stars),
        hints_used: hintsUsed,
        time_spent: timeSpent,
        attempts: attempts,
        last_attempt_at: new Date().toISOString(),
        completed_at: stars > 0 && !existingProgress?.completed ? new Date().toISOString() : existingProgress?.completed_at,
      };

      if (existingProgress) {
        // Update existing progress
        const { error } = await supabase
          .from('game_progress')
          .update(progressData)
          .eq('id', existingProgress.id);

        if (error) throw error;
      } else {
        // Insert new progress
        const { error } = await supabase
          .from('game_progress')
          .insert(progressData);

        if (error) throw error;
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      throw error;
    }
  }

  // Load all progress from cloud
  async loadProgress(): Promise<GameProgress> {
    try {
      const { data: progressData, error } = await supabase
        .from('game_progress')
        .select('*')
        .eq('user_id', this.userId);

      if (error) throw error;

      const progress: GameProgress = {
        completedLevels: [],
        stars: {},
        currentLevel: 'level1',
        hintsUsed: {},
      };

      if (progressData) {
        progressData.forEach((item) => {
          if (item.completed) {
            progress.completedLevels.push(item.level_id);
          }
          progress.stars[item.level_id] = item.stars;
          progress.hintsUsed[item.level_id] = item.hints_used;
        });

        // Find the highest completed level
        const completedLevels = progressData
          .filter(p => p.completed)
          .sort((a, b) => a.level_id.localeCompare(b.level_id));
        
        if (completedLevels.length > 0) {
          const lastCompleted = completedLevels[completedLevels.length - 1];
          const levelNumber = parseInt(lastCompleted.level_id.replace('level', ''));
          progress.currentLevel = `level${levelNumber + 1}`;
        }
      }

      return progress;
    } catch (error) {
      console.error('Error loading progress:', error);
      // Return default progress if cloud load fails
      return {
        completedLevels: [],
        stars: {},
        currentLevel: 'level1',
        hintsUsed: {},
      };
    }
  }

  // Log code attempt for analytics
  async logCodeAttempt(levelId: string, code: string, success: boolean, errorMessage?: string, executionTime?: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('code_attempts')
        .insert({
          user_id: this.userId,
          level_id: levelId,
          code: code,
          success: success,
          error_message: errorMessage,
          execution_time: executionTime || 0,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error logging code attempt:', error);
      // Don't throw - this is for analytics only
    }
  }

  // Get analytics data for teachers
  async getAnalytics(levelId?: string): Promise<any> {
    try {
      let query = supabase
        .from('code_attempts')
        .select(`
          *,
          profiles!inner(full_name, role)
        `)
        .eq('profiles.role', 'student');

      if (levelId) {
        query = query.eq('level_id', levelId);
      }

      const { data, error } = await query;

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting analytics:', error);
      return [];
    }
  }

  // Get classroom progress for teachers
  async getClassroomProgress(classroomId: string): Promise<any> {
    try {
      const { data, error } = await supabase
        .from('classroom_students')
        .select(`
          student_id,
          profiles!inner(full_name, email),
          game_progress!inner(*)
        `)
        .eq('classroom_id', classroomId);

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting classroom progress:', error);
      return [];
    }
  }
}
