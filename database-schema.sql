-- CodeQuest Jr. Database Schema
-- Run this in your Supabase SQL editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('student', 'teacher', 'parent')) DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create game_progress table
CREATE TABLE IF NOT EXISTS game_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  level_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  stars INTEGER DEFAULT 0 CHECK (stars >= 0 AND stars <= 3),
  hints_used INTEGER DEFAULT 0,
  time_spent INTEGER DEFAULT 0, -- in seconds
  attempts INTEGER DEFAULT 0,
  last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, level_id)
);

-- Create code_attempts table for analytics
CREATE TABLE IF NOT EXISTS code_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  level_id TEXT NOT NULL,
  code TEXT NOT NULL,
  success BOOLEAN NOT NULL,
  error_message TEXT,
  execution_time INTEGER DEFAULT 0, -- in milliseconds
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create classrooms table
CREATE TABLE IF NOT EXISTS classrooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create classroom_students junction table
CREATE TABLE IF NOT EXISTS classroom_students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  classroom_id UUID REFERENCES classrooms(id) ON DELETE CASCADE NOT NULL,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(classroom_id, student_id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE classrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE classroom_students ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for game_progress
CREATE POLICY "Users can view own progress" ON game_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON game_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON game_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Teachers can view student progress in their classrooms
CREATE POLICY "Teachers can view student progress" ON game_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM classrooms c
      JOIN classroom_students cs ON c.id = cs.classroom_id
      WHERE c.teacher_id = auth.uid() AND cs.student_id = user_id
    )
  );

-- Create RLS policies for code_attempts
CREATE POLICY "Users can view own attempts" ON code_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own attempts" ON code_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Teachers can view student attempts in their classrooms
CREATE POLICY "Teachers can view student attempts" ON code_attempts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM classrooms c
      JOIN classroom_students cs ON c.id = cs.classroom_id
      WHERE c.teacher_id = auth.uid() AND cs.student_id = user_id
    )
  );

-- Create RLS policies for classrooms
CREATE POLICY "Teachers can manage own classrooms" ON classrooms
  FOR ALL USING (auth.uid() = teacher_id);

-- Students can view classrooms they belong to
CREATE POLICY "Students can view their classrooms" ON classrooms
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM classroom_students cs
      WHERE cs.classroom_id = id AND cs.student_id = auth.uid()
    )
  );

-- Create RLS policies for classroom_students
CREATE POLICY "Teachers can manage classroom students" ON classroom_students
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM classrooms c
      WHERE c.id = classroom_id AND c.teacher_id = auth.uid()
    )
  );

-- Students can view their classroom memberships
CREATE POLICY "Students can view own memberships" ON classroom_students
  FOR SELECT USING (auth.uid() = student_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_game_progress_user_id ON game_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_game_progress_level_id ON game_progress(level_id);
CREATE INDEX IF NOT EXISTS idx_code_attempts_user_id ON code_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_code_attempts_level_id ON code_attempts(level_id);
CREATE INDEX IF NOT EXISTS idx_code_attempts_created_at ON code_attempts(created_at);
CREATE INDEX IF NOT EXISTS idx_classrooms_teacher_id ON classrooms(teacher_id);
CREATE INDEX IF NOT EXISTS idx_classrooms_code ON classrooms(code);
CREATE INDEX IF NOT EXISTS idx_classroom_students_classroom_id ON classroom_students(classroom_id);
CREATE INDEX IF NOT EXISTS idx_classroom_students_student_id ON classroom_students(student_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profiles updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
