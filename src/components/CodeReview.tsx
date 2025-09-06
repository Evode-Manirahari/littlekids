import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, Info, Lightbulb, Star, X, Eye, EyeOff } from 'lucide-react';
import { codeReviewService, CodeReviewResult, CodeIssue } from '../services/codeReviewService';
import { soundService } from '../services/soundService';

interface CodeReviewProps {
  code: string;
  level: number;
  onClose: () => void;
  onApplySuggestion?: (suggestion: string) => void;
}

const CodeReview: React.FC<CodeReviewProps> = ({ code, level, onClose, onApplySuggestion }) => {
  const [reviewResult, setReviewResult] = useState<CodeReviewResult | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<CodeIssue | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    analyzeCode();
  }, [code, level]);

  const analyzeCode = async () => {
    setIsAnalyzing(true);
    try {
      // Simulate analysis delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      const result = codeReviewService.analyzeCode(code, level);
      setReviewResult(result);
      soundService.playSuccess();
    } catch (error) {
      console.error('Code analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getIssueIcon = (type: CodeIssue['type']) => {
    switch (type) {
      case 'error':
        return <X className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'suggestion':
        return <Lightbulb className="w-4 h-4 text-blue-500" />;
      case 'style':
        return <Info className="w-4 h-4 text-purple-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: CodeIssue['severity']) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'text-green-600 bg-green-100';
      case 'B':
        return 'text-blue-600 bg-blue-100';
      case 'C':
        return 'text-yellow-600 bg-yellow-100';
      case 'D':
        return 'text-orange-600 bg-orange-100';
      case 'F':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleApplySuggestion = (suggestion: string) => {
    if (onApplySuggestion) {
      onApplySuggestion(suggestion);
      soundService.playClick();
    }
  };

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyzing Your Code</h3>
          <p className="text-gray-600">Our AI teacher is reviewing your code...</p>
        </div>
      </div>
    );
  }

  if (!reviewResult) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Code Review</h2>
              <p className="text-blue-100">Let's see how you did!</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Score and Grade */}
            <div className="mb-6">
              <div className="flex items-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800">{reviewResult.score}</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold px-4 py-2 rounded-lg ${getGradeColor(reviewResult.grade)}`}>
                    {reviewResult.grade}
                  </div>
                  <div className="text-sm text-gray-600">Grade</div>
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${reviewResult.score}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Overall Quality</div>
                </div>
              </div>
            </div>

            {/* Overall Feedback */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Teacher's Feedback
              </h3>
              <p className="text-gray-700 leading-relaxed">{reviewResult.overall_feedback}</p>
            </div>

            {/* Strengths */}
            {reviewResult.strengths.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What You Did Well
                </h3>
                <ul className="space-y-2">
                  {reviewResult.strengths.map((strength, index) => (
                    <li key={index} className="text-green-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Issues */}
            {reviewResult.issues.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Areas for Improvement ({reviewResult.issues.length})
                </h3>
                <div className="space-y-3">
                  {reviewResult.issues.map((issue, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${getSeverityColor(issue.severity)}`}
                      onClick={() => setSelectedIssue(issue)}
                    >
                      <div className="flex items-start gap-3">
                        {getIssueIcon(issue.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{issue.message}</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-50">
                              Line {issue.line}
                            </span>
                          </div>
                          <p className="text-sm opacity-90">{issue.explanation}</p>
                          {issue.suggestion && (
                            <div className="mt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApplySuggestion(issue.suggestion!);
                                }}
                                className="text-xs px-3 py-1 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors"
                              >
                                Apply Suggestion
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {reviewResult.suggestions.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Learning Suggestions
                </h3>
                <ul className="space-y-2">
                  {reviewResult.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-blue-700 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar - Issue Details */}
          {selectedIssue && (
            <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Issue Details</h3>
                <button
                  onClick={() => setSelectedIssue(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Type</div>
                  <div className="flex items-center gap-2">
                    {getIssueIcon(selectedIssue.type)}
                    <span className="capitalize">{selectedIssue.type}</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Severity</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(selectedIssue.severity)}`}>
                    {selectedIssue.severity}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Category</div>
                  <span className="text-sm capitalize">{selectedIssue.category.replace('_', ' ')}</span>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Location</div>
                  <span className="text-sm">Line {selectedIssue.line}, Column {selectedIssue.column}</span>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Message</div>
                  <p className="text-sm text-gray-800">{selectedIssue.message}</p>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Explanation</div>
                  <p className="text-sm text-gray-800">{selectedIssue.explanation}</p>
                </div>

                {selectedIssue.suggestion && (
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Suggestion</div>
                    <p className="text-sm text-gray-800 mb-2">{selectedIssue.suggestion}</p>
                    <button
                      onClick={() => handleApplySuggestion(selectedIssue.suggestion!)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Apply This Suggestion
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeReview;
