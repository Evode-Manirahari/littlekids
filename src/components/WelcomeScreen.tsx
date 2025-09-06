import React from 'react';
import { Play, Trophy, Code, Star, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface WelcomeScreenProps {
  onStart: () => void;
  onTeacherDashboard: () => void;
  user: any;
  profile: any;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onTeacherDashboard, user, profile }) => {
  const { signOut } = useAuth();

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        {/* User Menu */}
        {user && (
          <div className="user-menu">
            <div className="user-info">
              <User className="user-icon" />
              <span>Welcome, {profile?.full_name || user.email}!</span>
              {profile?.role === 'teacher' && (
                <button className="btn btn-secondary btn-small" onClick={onTeacherDashboard}>
                  Teacher Dashboard
                </button>
              )}
            </div>
            <button className="btn btn-secondary btn-small" onClick={signOut}>
              <LogOut className="btn-icon" />
              Sign Out
            </button>
          </div>
        )}

        <div className="welcome-header">
          <h1 className="welcome-title">
            <Code className="title-icon bounce" />
            CodeQuest Jr.
          </h1>
          <p className="welcome-subtitle">
            Learn Python by playing games! 🎮🐍
          </p>
        </div>

        <div className="welcome-features">
          <div className="feature-card">
            <Play className="feature-icon" />
            <h3>Interactive Puzzles</h3>
            <p>Solve fun challenges by writing Python code</p>
          </div>
          
          <div className="feature-card">
            <Trophy className="feature-icon" />
            <h3>Earn Stars</h3>
            <p>Get up to 3 stars for each level you complete</p>
          </div>
          
          <div className="feature-card">
            <Star className="feature-icon" />
            <h3>Learn Step by Step</h3>
            <p>Start with simple print statements and work up to functions</p>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="btn btn-primary btn-large" onClick={onStart}>
            <Play className="btn-icon" />
            Start Coding!
          </button>
          
          <button className="btn btn-secondary" onClick={onReset}>
            Reset Progress
          </button>
        </div>

        <div className="welcome-footer">
          <p>Perfect for kids ages 8-14 who want to learn programming! 🌟</p>
        </div>
      </div>

      <style jsx>{`
        .welcome-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .welcome-container {
          max-width: 800px;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .user-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.9);
          padding: 10px 15px;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2d3748;
          font-size: 0.9rem;
        }

        .user-icon {
          width: 16px;
          height: 16px;
          color: #667eea;
        }

        .welcome-header {
          margin-bottom: 40px;
        }

        .welcome-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #2d3748;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .title-icon {
          width: 60px;
          height: 60px;
          color: #667eea;
        }

        .welcome-subtitle {
          font-size: 1.5rem;
          color: #4a5568;
          margin: 0;
        }

        .welcome-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .feature-card {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 20px;
          padding: 30px 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: #667eea;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
          margin: 0 auto 15px;
          display: block;
        }

        .feature-card h3 {
          font-size: 1.3rem;
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .feature-card p {
          color: #4a5568;
          margin: 0;
          line-height: 1.5;
        }

        .welcome-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .btn-large {
          font-size: 1.2rem;
          padding: 15px 30px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-icon {
          width: 20px;
          height: 20px;
        }

        .welcome-footer {
          color: #718096;
          font-size: 1.1rem;
        }

        @media (max-width: 600px) {
          .welcome-container {
            padding: 30px 20px;
          }

          .welcome-title {
            font-size: 2.5rem;
            flex-direction: column;
            gap: 10px;
          }

          .welcome-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
