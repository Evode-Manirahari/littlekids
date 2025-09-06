import React, { useState } from 'react';
import { BookOpen, Search, X } from 'lucide-react';
import { ConceptGlossary as ConceptGlossaryType } from '../types';

interface ConceptGlossaryProps {
  concepts: ConceptGlossaryType[];
  onClose: () => void;
}

export const ConceptGlossary: React.FC<ConceptGlossaryProps> = ({ concepts, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(concepts.map(c => c.category)))];
  
  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concept.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="glossary-overlay">
      <div className="glossary-modal">
        <div className="glossary-header">
          <h2>
            <BookOpen size={24} />
            Python Concepts Glossary
          </h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="glossary-controls">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="concepts-list">
          {filteredConcepts.map(concept => (
            <div key={concept.term} className="concept-item">
              <h3>{concept.term}</h3>
              <p className="definition">{concept.definition}</p>
              <div className="example">
                <strong>Example:</strong>
                <code>{concept.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
