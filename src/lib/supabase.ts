import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string;
          role: 'student' | 'teacher' | 'parent';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string;
          role?: 'student' | 'teacher' | 'parent';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string;
          role?: 'student' | 'teacher' | 'parent';
          created_at?: string;
          updated_at?: string;
        };
      };
      game_progress: {
        Row: {
          id: string;
          user_id: string;
          level_id: string;
          completed: boolean;
          stars: number;
          hints_used: number;
          time_spent: number; // in seconds
          attempts: number;
          last_attempt_at: string;
          completed_at?: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          level_id: string;
          completed?: boolean;
          stars?: number;
          hints_used?: number;
          time_spent?: number;
          attempts?: number;
          last_attempt_at?: string;
          completed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          level_id?: string;
          completed?: boolean;
          stars?: number;
          hints_used?: number;
          time_spent?: number;
          attempts?: number;
          last_attempt_at?: string;
          completed_at?: string;
        };
      };
      code_attempts: {
        Row: {
          id: string;
          user_id: string;
          level_id: string;
          code: string;
          success: boolean;
          error_message?: string;
          execution_time: number; // in milliseconds
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          level_id: string;
          code: string;
          success: boolean;
          error_message?: string;
          execution_time?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          level_id?: string;
          code?: string;
          success?: boolean;
          error_message?: string;
          execution_time?: number;
          created_at?: string;
        };
      };
      classrooms: {
        Row: {
          id: string;
          teacher_id: string;
          name: string;
          code: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          teacher_id: string;
          name: string;
          code: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          teacher_id?: string;
          name?: string;
          code?: string;
          created_at?: string;
        };
      };
      classroom_students: {
        Row: {
          id: string;
          classroom_id: string;
          student_id: string;
          joined_at: string;
        };
        Insert: {
          id?: string;
          classroom_id: string;
          student_id: string;
          joined_at?: string;
        };
        Update: {
          id?: string;
          classroom_id?: string;
          student_id?: string;
          joined_at?: string;
        };
      };
    };
  };
}
