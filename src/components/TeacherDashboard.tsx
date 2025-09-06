import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Trophy, Clock, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { ProgressService } from '../services/progressService';
import { supabase } from '../lib/supabase';

interface StudentProgress {
  student_id: string;
  full_name: string;
  email: string;
  levels_completed: number;
  total_stars: number;
  total_attempts: number;
  last_active: string;
}

interface ClassroomData {
  id: string;
  name: string;
  code: string;
  student_count: number;
  created_at: string;
}

export const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const [classrooms, setClassrooms] = useState<ClassroomData[]>([]);
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null);
  const [studentProgress, setStudentProgress] = useState<StudentProgress[]>([]);
  const [analytics, setAnalytics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadTeacherData();
    }
  }, [user]);

  const loadTeacherData = async () => {
    if (!user) return;

    try {
      const progressService = new ProgressService(user.id);

      // Load classrooms
      const { data: classroomData, error: classroomError } = await supabase
        .from('classrooms')
        .select('*')
        .eq('teacher_id', user.id);

      if (classroomError) throw classroomError;

      setClassrooms(classroomData || []);

      // Load analytics
      const analyticsData = await progressService.getAnalytics();
      setAnalytics(analyticsData);

      setLoading(false);
    } catch (error) {
      console.error('Error loading teacher data:', error);
      setLoading(false);
    }
  };

  const loadClassroomProgress = async (classroomId: string) => {
    try {
      const progressService = new ProgressService(user!.id);
      const progressData = await progressService.getClassroomProgress(classroomId);
      setStudentProgress(progressData);
    } catch (error) {
      console.error('Error loading classroom progress:', error);
    }
  };

  const createClassroom = async (name: string) => {
    if (!user) return;

    try {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      const { data, error } = await supabase
        .from('classrooms')
        .insert({
          teacher_id: user.id,
          name: name,
          code: code,
        })
        .select()
        .single();

      if (error) throw error;

      setClassrooms(prev => [...prev, data]);
    } catch (error) {
      console.error('Error creating classroom:', error);
    }
  };

  if (loading) {
    return (
      <div className="teacher-dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="teacher-dashboard">
      <div className="dashboard-header">
        <h1>🎓 Teacher Dashboard</h1>
        <p>Monitor your students' coding progress and create engaging learning experiences</p>
      </div>

      <div className="dashboard-content">
        {/* Analytics Overview */}
        <div className="analytics-section">
          <h2>📊 Class Analytics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-content">
                <h3>{analytics.length}</h3>
                <p>Total Code Attempts</p>
              </div>
            </div>
            
            <div className="stat-card">
              <Trophy className="stat-icon" />
              <div className="stat-content">
                <h3>{analytics.filter(a => a.success).length}</h3>
                <p>Successful Attempts</p>
              </div>
            </div>
            
            <div className="stat-card">
              <BookOpen className="stat-icon" />
              <div className="stat-content">
                <h3>{new Set(analytics.map(a => a.level_id)).size}</h3>
                <p>Levels Attempted</p>
              </div>
            </div>
            
            <div className="stat-card">
              <Clock className="stat-icon" />
              <div className="stat-content">
                <h3>{analytics.length > 0 ? Math.round(analytics.reduce((sum, a) => sum + (a.execution_time || 0), 0) / analytics.length / 1000) : 0}s</h3>
                <p>Avg. Execution Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Classrooms Section */}
        <div className="classrooms-section">
          <div className="section-header">
            <h2>🏫 Your Classrooms</h2>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const name = prompt('Enter classroom name:');
                if (name) createClassroom(name);
              }}
            >
              Create Classroom
            </button>
          </div>

          <div className="classrooms-grid">
            {classrooms.map((classroom) => (
              <div key={classroom.id} className="classroom-card">
                <div className="classroom-header">
                  <h3>{classroom.name}</h3>
                  <div className="classroom-code">
                    Code: <strong>{classroom.code}</strong>
                  </div>
                </div>
                
                <div className="classroom-stats">
                  <div className="stat">
                    <Users size={16} />
                    <span>{classroom.student_count} students</span>
                  </div>
                  <div className="stat">
                    <Clock size={16} />
                    <span>Created {new Date(classroom.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="classroom-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      setSelectedClassroom(classroom.id);
                      loadClassroomProgress(classroom.id);
                    }}
                  >
                    View Progress
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Progress */}
        {selectedClassroom && studentProgress.length > 0 && (
          <div className="progress-section">
            <h2>👥 Student Progress</h2>
            <div className="progress-table">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Levels Completed</th>
                    <th>Total Stars</th>
                    <th>Attempts</th>
                    <th>Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {studentProgress.map((student) => (
                    <tr key={student.student_id}>
                      <td>{student.full_name}</td>
                      <td>{student.email}</td>
                      <td>{student.levels_completed}</td>
                      <td>{student.total_stars}</td>
                      <td>{student.total_attempts}</td>
                      <td>{new Date(student.last_active).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Common Errors */}
        <div className="errors-section">
          <h2>🚨 Common Errors</h2>
          <div className="errors-list">
            {analytics
              .filter(a => !a.success && a.error_message)
              .slice(0, 5)
              .map((error, index) => (
                <div key={index} className="error-item">
                  <AlertCircle className="error-icon" />
                  <div className="error-content">
                    <p><strong>Level {error.level_id}:</strong> {error.error_message}</p>
                    <small>Attempted by {error.profiles?.full_name} on {new Date(error.created_at).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style>{`
        .teacher-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .dashboard-header h1 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 2.5rem;
        }

        .dashboard-header p {
          color: #4a5568;
          margin: 0;
          font-size: 1.1rem;
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .analytics-section,
        .classrooms-section,
        .progress-section,
        .errors-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .analytics-section h2,
        .classrooms-section h2,
        .progress-section h2,
        .errors-section h2 {
          color: #2d3748;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 15px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
        }

        .stat-content h3 {
          color: #2d3748;
          margin: 0 0 5px 0;
          font-size: 2rem;
          font-weight: bold;
        }

        .stat-content p {
          color: #4a5568;
          margin: 0;
          font-size: 0.9rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .classrooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .classroom-card {
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          padding: 20px;
          background: white;
          transition: all 0.3s ease;
        }

        .classroom-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .classroom-header h3 {
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .classroom-code {
          color: #4a5568;
          font-size: 0.9rem;
        }

        .classroom-stats {
          display: flex;
          gap: 15px;
          margin: 15px 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4a5568;
          font-size: 0.9rem;
        }

        .classroom-actions {
          margin-top: 15px;
        }

        .progress-table {
          overflow-x: auto;
        }

        .progress-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .progress-table th,
        .progress-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }

        .progress-table th {
          background: #f7fafc;
          color: #2d3748;
          font-weight: 600;
        }

        .progress-table td {
          color: #4a5568;
        }

        .errors-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .error-item {
          display: flex;
          gap: 15px;
          padding: 15px;
          background: #fed7d7;
          border-radius: 10px;
          border-left: 4px solid #fc8181;
        }

        .error-icon {
          color: #c53030;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .error-content p {
          margin: 0 0 5px 0;
          color: #c53030;
        }

        .error-content small {
          color: #9c4221;
        }

        .loading {
          text-align: center;
          padding: 50px;
          color: white;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .classrooms-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .dashboard-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};
