import React, { useState } from 'react';
import { X, Mail, Lock, User, GraduationCap, Users, Heart } from 'lucide-react';
import { useLocalAuth } from '../contexts/LocalAuthContext';
import { CharacterSelector } from './CharacterSelector';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const { signIn, signUp } = useLocalAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'student' | 'teacher' | 'parent'>('student');
  const [character, setCharacter] = useState<'robot' | 'cat' | 'dragon'>('robot');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'signin') {
        await signIn(email, password);
      } else {
        await signUp(email, password, fullName, role, character);
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="auth-header">
          <h2>{mode === 'signin' ? 'Welcome Back! 🎮' : 'Join CodeQuest Jr.! 🚀'}</h2>
          <p>
            {mode === 'signin' 
              ? 'Sign in to continue your coding adventure'
              : 'Create an account to save your progress and earn achievements'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'signup' && (
            <>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={20} />
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>I am a...</label>
                <div className="role-selector">
                  <button
                    type="button"
                    className={`role-option ${role === 'student' ? 'active' : ''}`}
                    onClick={() => setRole('student')}
                  >
                    <GraduationCap size={20} />
                    <span>Student</span>
                    <small>Learning to code</small>
                  </button>
                  
                  <button
                    type="button"
                    className={`role-option ${role === 'teacher' ? 'active' : ''}`}
                    onClick={() => setRole('teacher')}
                  >
                    <Users size={20} />
                    <span>Teacher</span>
                    <small>Teaching coding</small>
                  </button>
                  
                  <button
                    type="button"
                    className={`role-option ${role === 'parent' ? 'active' : ''}`}
                    onClick={() => setRole('parent')}
                  >
                    <Heart size={20} />
                    <span>Parent</span>
                    <small>Supporting my child</small>
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <CharacterSelector
                  selectedCharacter={character}
                  onCharacterChange={setCharacter}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-large"
            disabled={loading}
          >
            {loading ? 'Please wait...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="auth-toggle"
              onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
            >
              {mode === 'signin' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      <style>{`
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .auth-modal {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .auth-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          transition: color 0.3s ease;
        }

        .auth-close-btn:hover {
          color: #333;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .auth-header h2 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.8rem;
        }

        .auth-header p {
          color: #4a5568;
          margin: 0;
          line-height: 1.5;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #2d3748;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #a0aec0;
          z-index: 1;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 45px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .role-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .role-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 10px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .role-option:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .role-option.active {
          border-color: #667eea;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
        }

        .role-option span {
          font-weight: 600;
          color: #2d3748;
          margin: 5px 0;
        }

        .role-option small {
          color: #4a5568;
          font-size: 0.8rem;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          border-left: 4px solid #fc8181;
        }

        .btn-large {
          padding: 15px 30px;
          font-size: 1.1rem;
          margin-top: 10px;
        }

        .auth-footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .auth-footer p {
          color: #4a5568;
          margin: 0;
        }

        .auth-toggle {
          background: none;
          border: none;
          color: #667eea;
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
        }

        .auth-toggle:hover {
          color: #5a67d8;
        }

        @media (max-width: 600px) {
          .auth-modal {
            padding: 30px 20px;
            margin: 10px;
          }

          .role-selector {
            grid-template-columns: 1fr;
          }

          .auth-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};
