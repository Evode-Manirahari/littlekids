import React, { useState, useEffect } from 'react';
import { X, Play, BookOpen, Eye, Headphones, Hand, FileText, Star, Clock } from 'lucide-react';
import { Tutorial, getTutorialsForLevel } from '../data/tutorials';

interface EnhancedTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  levelId?: string;
  learningStyle?: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  onTutorialComplete?: (tutorialId: string) => void;
}

export const EnhancedTutorialModal: React.FC<EnhancedTutorialModalProps> = ({
  isOpen,
  onClose,
  levelId,
  learningStyle,
  onTutorialComplete
}) => {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [filter, setFilter] = useState<'all' | 'visual' | 'auditory' | 'kinesthetic' | 'reading'>('all');
  const [category, setCategory] = useState<'all' | 'beginner' | 'intermediate' | 'advanced' | 'concept' | 'project'>('all');
  // Removed unused state variables
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  // Load tutorials based on level and learning style
  useEffect(() => {
    let filteredTutorials = tutorials;
    
    if (levelId) {
      filteredTutorials = getTutorialsForLevel(levelId);
    }
    
    if (learningStyle) {
      filteredTutorials = filteredTutorials.filter(t => t.learningStyle === learningStyle);
    }
    
    setTutorials(filteredTutorials);
  }, [levelId, learningStyle]);

  // Filter tutorials based on current filters
  const filteredTutorials = tutorials.filter(tutorial => {
    const styleMatch = filter === 'all' || tutorial.learningStyle === filter;
    const categoryMatch = category === 'all' || tutorial.category === category;
    return styleMatch && categoryMatch;
  });

  const handleTutorialSelect = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
  };

  // Removed unused functions

  const handleExerciseComplete = (exercise: string) => {
    if (!completedExercises.includes(exercise)) {
      setCompletedExercises([...completedExercises, exercise]);
    }
  };

  const handleTutorialComplete = () => {
    if (selectedTutorial && onTutorialComplete) {
      onTutorialComplete(selectedTutorial.id);
    }
  };

  const getLearningStyleIcon = (style: Tutorial['learningStyle']) => {
    switch (style) {
      case 'visual': return <Eye size={16} />;
      case 'auditory': return <Headphones size={16} />;
      case 'kinesthetic': return <Hand size={16} />;
      case 'reading': return <FileText size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getLearningStyleColor = (style: Tutorial['learningStyle']) => {
    switch (style) {
      case 'visual': return '#4CAF50';
      case 'auditory': return '#2196F3';
      case 'kinesthetic': return '#FF9800';
      case 'reading': return '#9C27B0';
      default: return '#607D8B';
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < difficulty ? '#FFD700' : 'none'}
        color={i < difficulty ? '#FFD700' : '#CCCCCC'}
      />
    ));
  };

  if (!isOpen) return null;

  return (
    <div className="enhanced-tutorial-modal-overlay">
      <div className="enhanced-tutorial-modal">
        <div className="tutorial-header">
          <h2>📚 Learning Center</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="tutorial-content">
          {!selectedTutorial ? (
            <div className="tutorial-list">
              <div className="tutorial-filters">
                <div className="filter-group">
                  <label>Learning Style:</label>
                  <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
                    <option value="all">All Styles</option>
                    <option value="visual">Visual</option>
                    <option value="auditory">Auditory</option>
                    <option value="kinesthetic">Kinesthetic</option>
                    <option value="reading">Reading</option>
                  </select>
                </div>
                
                <div className="filter-group">
                  <label>Category:</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value as any)}>
                    <option value="all">All Categories</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="concept">Concepts</option>
                    <option value="project">Projects</option>
                  </select>
                </div>
              </div>

              <div className="tutorial-grid">
                {filteredTutorials.map(tutorial => (
                  <div
                    key={tutorial.id}
                    className="tutorial-card"
                    onClick={() => handleTutorialSelect(tutorial)}
                  >
                    <div className="tutorial-thumbnail">
                      <img src={tutorial.thumbnail} alt={tutorial.title} />
                      <div className="tutorial-overlay">
                        <Play size={32} />
                      </div>
                    </div>
                    
                    <div className="tutorial-info">
                      <div className="tutorial-meta">
                        <div 
                          className="learning-style-badge"
                          style={{ backgroundColor: getLearningStyleColor(tutorial.learningStyle) }}
                        >
                          {getLearningStyleIcon(tutorial.learningStyle)}
                          <span>{tutorial.learningStyle}</span>
                        </div>
                        <div className="tutorial-duration">
                          <Clock size={14} />
                          {tutorial.duration}
                        </div>
                      </div>
                      
                      <h3>{tutorial.title}</h3>
                      <p>{tutorial.description}</p>
                      
                      <div className="tutorial-details">
                        <div className="difficulty">
                          {getDifficultyStars(tutorial.difficulty)}
                        </div>
                        <div className="tags">
                          {tutorial.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="tutorial-player">
              <div className="video-container">
                <iframe
                  src={selectedTutorial.videoUrl.replace('watch?v=', 'embed/')}
                  title={selectedTutorial.title}
                  allowFullScreen
                />
              </div>
              
              <div className="tutorial-details-panel">
                <div className="tutorial-info-header">
                  <h3>{selectedTutorial.title}</h3>
                  <div className="tutorial-meta">
                    <div 
                      className="learning-style-badge"
                      style={{ backgroundColor: getLearningStyleColor(selectedTutorial.learningStyle) }}
                    >
                      {getLearningStyleIcon(selectedTutorial.learningStyle)}
                      <span>{selectedTutorial.learningStyle}</span>
                    </div>
                    <div className="tutorial-duration">
                      <Clock size={14} />
                      {selectedTutorial.duration}
                    </div>
                    <div className="tutorial-difficulty">
                      {getDifficultyStars(selectedTutorial.difficulty)}
                    </div>
                  </div>
                </div>
                
                <div className="tutorial-description">
                  <p>{selectedTutorial.description}</p>
                </div>
                
                {selectedTutorial.transcript && (
                  <div className="tutorial-transcript">
                    <h4>Transcript</h4>
                    <p>{selectedTutorial.transcript}</p>
                  </div>
                )}
                
                {selectedTutorial.exercises && (
                  <div className="tutorial-exercises">
                    <h4>Exercises</h4>
                    <div className="exercise-list">
                      {selectedTutorial.exercises.map((exercise, index) => (
                        <div
                          key={index}
                          className={`exercise-item ${completedExercises.includes(exercise) ? 'completed' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={completedExercises.includes(exercise)}
                            onChange={() => handleExerciseComplete(exercise)}
                          />
                          <span>{exercise}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="tutorial-actions">
                  <button className="btn btn-secondary" onClick={() => setSelectedTutorial(null)}>
                    Back to List
                  </button>
                  <button className="btn btn-primary" onClick={handleTutorialComplete}>
                    Mark as Complete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
