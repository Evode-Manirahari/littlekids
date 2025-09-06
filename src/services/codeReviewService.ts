export interface CodeIssue {
  type: 'error' | 'warning' | 'suggestion' | 'style';
  severity: 'high' | 'medium' | 'low';
  line: number;
  column: number;
  message: string;
  suggestion?: string;
  explanation: string;
  category: 'syntax' | 'logic' | 'style' | 'best_practice' | 'performance' | 'readability';
}

export interface CodeReviewResult {
  score: number; // 0-100
  issues: CodeIssue[];
  suggestions: string[];
  strengths: string[];
  overall_feedback: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

export interface CodeMetrics {
  lines_of_code: number;
  complexity: number;
  readability_score: number;
  variable_naming_score: number;
  comment_coverage: number;
}

class CodeReviewService {
  private patterns = {
    // Syntax issues
    syntax: {
      missing_colon: /if\s+.*[^:]$/,
      missing_quotes: /print\s+[^"'].*[^"']$/,
      incorrect_indentation: /^[^\s].*:$/,
      missing_parentheses: /print\s+[^(].*[^)]$/,
    },
    
    // Style issues
    style: {
      snake_case: /[A-Z]/,
      long_lines: /.{81,}/,
      trailing_whitespace: /\s+$/,
      multiple_spaces: /  +/,
    },
    
    // Best practices
    best_practice: {
      magic_numbers: /\b\d{2,}\b/,
      unused_imports: /^import\s+\w+$/,
      hardcoded_strings: /"[^"]{20,}"/,
    },
    
    // Logic issues
    logic: {
      infinite_loop: /while\s+True:/,
      unreachable_code: /return\s+.*\n.*/,
      comparison_operator: /==\s*=\s*[^=]/,
    }
  };

  // Removed unused keywords object

  analyzeCode(code: string, level: number): CodeReviewResult {
    const lines = code.split('\n');
    const issues: CodeIssue[] = [];
    const suggestions: string[] = [];
    const strengths: string[] = [];

    // Analyze each line
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const trimmedLine = line.trim();
      
      if (!trimmedLine) return;

      // Check for syntax issues
      this.checkSyntaxIssues(line, lineNumber, issues);
      
      // Check for style issues
      this.checkStyleIssues(line, lineNumber, issues);
      
      // Check for logic issues
      this.checkLogicIssues(line, lineNumber, issues);
      
      // Check for best practices
      this.checkBestPractices(line, lineNumber, issues, level);
    });

    // Analyze overall code structure
    this.analyzeCodeStructure(code, suggestions, strengths);

    // Calculate metrics
    const metrics = this.calculateMetrics(code);
    
    // Generate overall feedback
    const score = this.calculateScore(issues, metrics);
    const grade = this.calculateGrade(score);
    const overall_feedback = this.generateOverallFeedback(score, strengths);

    return {
      score,
      issues,
      suggestions,
      strengths,
      overall_feedback,
      grade,
    };
  }

  private checkSyntaxIssues(line: string, lineNumber: number, issues: CodeIssue[]) {
    // Missing colon after if/for/while/def
    if (this.patterns.syntax.missing_colon.test(line) && !line.includes('#')) {
      issues.push({
        type: 'error',
        severity: 'high',
        line: lineNumber,
        column: line.length,
        message: 'Missing colon (:) at the end of the statement',
        suggestion: 'Add a colon (:) at the end of the line',
        explanation: 'Python requires a colon after if, for, while, and def statements to indicate the start of a code block.',
        category: 'syntax'
      });
    }

    // Missing quotes around strings
    if (this.patterns.syntax.missing_quotes.test(line) && line.includes('print')) {
      issues.push({
        type: 'error',
        severity: 'high',
        line: lineNumber,
        column: line.indexOf('print') + 5,
        message: 'String should be in quotes',
        suggestion: 'Put your text in quotes like "Hello World"',
        explanation: 'Text that you want to print needs to be wrapped in quotes so Python knows it\'s a string.',
        category: 'syntax'
      });
    }

    // Incorrect indentation
    if (this.patterns.syntax.incorrect_indentation.test(line) && line.includes(':')) {
      issues.push({
        type: 'error',
        severity: 'high',
        line: lineNumber,
        column: 0,
        message: 'Code after colon should be indented',
        suggestion: 'Add 4 spaces at the beginning of the next line',
        explanation: 'After a colon, the next line should be indented to show it belongs to the block above.',
        category: 'syntax'
      });
    }
  }

  private checkStyleIssues(line: string, lineNumber: number, issues: CodeIssue[]) {
    // Check for snake_case in variable names
    if (this.patterns.style.snake_case.test(line) && line.includes('=')) {
      const variableMatch = line.match(/(\w+)\s*=/);
      if (variableMatch && /[A-Z]/.test(variableMatch[1])) {
        issues.push({
          type: 'suggestion',
          severity: 'low',
          line: lineNumber,
          column: line.indexOf(variableMatch[1]),
          message: 'Variable names should use snake_case',
          suggestion: `Use snake_case: ${variableMatch[1].toLowerCase()}`,
          explanation: 'Python convention is to use snake_case (lowercase with underscores) for variable names.',
          category: 'style'
        });
      }
    }

    // Check for long lines
    if (this.patterns.style.long_lines.test(line)) {
      issues.push({
        type: 'suggestion',
        severity: 'low',
        line: lineNumber,
        column: 80,
        message: 'Line is too long',
        suggestion: 'Break this line into multiple lines',
        explanation: 'Long lines are hard to read. Try to keep lines under 80 characters.',
        category: 'style'
      });
    }

    // Check for trailing whitespace
    if (this.patterns.style.trailing_whitespace.test(line)) {
      issues.push({
        type: 'suggestion',
        severity: 'low',
        line: lineNumber,
        column: line.length,
        message: 'Remove trailing whitespace',
        suggestion: 'Delete spaces at the end of the line',
        explanation: 'Extra spaces at the end of lines are unnecessary and can cause issues.',
        category: 'style'
      });
    }
  }

  private checkLogicIssues(line: string, lineNumber: number, issues: CodeIssue[]) {
    // Check for infinite loops
    if (this.patterns.logic.infinite_loop.test(line)) {
      issues.push({
        type: 'warning',
        severity: 'high',
        line: lineNumber,
        column: line.indexOf('while'),
        message: 'This might create an infinite loop',
        suggestion: 'Add a way to break out of the loop',
        explanation: 'while True creates a loop that runs forever unless you add a break statement.',
        category: 'logic'
      });
    }

    // Check for comparison operator issues
    if (this.patterns.logic.comparison_operator.test(line)) {
      issues.push({
        type: 'error',
        severity: 'high',
        line: lineNumber,
        column: line.indexOf('=='),
        message: 'Use == for comparison, not =',
        suggestion: 'Change = to == for comparison',
        explanation: 'Use == to compare values, = is for assigning values to variables.',
        category: 'logic'
      });
    }
  }

  private checkBestPractices(line: string, lineNumber: number, issues: CodeIssue[], level: number) {
    // Check for magic numbers (only for higher levels)
    if (level > 5 && this.patterns.best_practice.magic_numbers.test(line)) {
      issues.push({
        type: 'suggestion',
        severity: 'medium',
        line: lineNumber,
        column: line.search(/\d{2,}/),
        message: 'Consider using a variable instead of a magic number',
        suggestion: 'Create a variable with a descriptive name',
        explanation: 'Magic numbers make code hard to understand. Use variables with meaningful names instead.',
        category: 'best_practice'
      });
    }

    // Check for hardcoded strings (only for higher levels)
    if (level > 8 && this.patterns.best_practice.hardcoded_strings.test(line)) {
      issues.push({
        type: 'suggestion',
        severity: 'low',
        line: lineNumber,
        column: line.indexOf('"'),
        message: 'Consider using a variable for long strings',
        suggestion: 'Store the string in a variable',
        explanation: 'Long strings can be stored in variables to make code more readable and reusable.',
        category: 'best_practice'
      });
    }
  }

  private analyzeCodeStructure(code: string, suggestions: string[], strengths: string[]) {
    const lines = code.split('\n').filter(line => line.trim());
    
    // Check for comments
    const commentLines = lines.filter(line => line.trim().startsWith('#')).length;
    const commentRatio = commentLines / lines.length;
    
    if (commentRatio < 0.1 && lines.length > 5) {
      suggestions.push('Add comments to explain what your code does');
    } else if (commentRatio > 0.2) {
      strengths.push('Great use of comments to explain your code');
    }

    // Check for functions
    const functionCount = (code.match(/def\s+\w+/g) || []).length;
    if (functionCount > 0) {
      strengths.push('Good use of functions to organize your code');
    }

    // Check for proper variable naming
    const variableNames = code.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\s*=/g) || [];
    const goodNames = variableNames.filter(name => 
      /^[a-z_][a-z0-9_]*$/.test(name.replace('=', '').trim())
    );
    
    if (goodNames.length === variableNames.length && variableNames.length > 0) {
      strengths.push('Excellent variable naming conventions');
    }

    // Check for code organization
    if (lines.length > 10 && functionCount > 0) {
      strengths.push('Well-organized code structure');
    }
  }

  private calculateMetrics(code: string): CodeMetrics {
    const lines = code.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim());
    
    // Calculate complexity (simple metric based on control structures)
    const complexity = (code.match(/\b(if|for|while|try|except|def)\b/g) || []).length;
    
    // Calculate readability score (simple metric)
    const avgLineLength = nonEmptyLines.reduce((sum, line) => sum + line.length, 0) / nonEmptyLines.length;
    const readabilityScore = Math.max(0, 100 - (avgLineLength - 40) * 2);
    
    // Calculate variable naming score
    const variableNames = code.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\s*=/g) || [];
    const goodNames = variableNames.filter(name => 
      /^[a-z_][a-z0-9_]*$/.test(name.replace('=', '').trim())
    );
    const namingScore = variableNames.length > 0 ? (goodNames.length / variableNames.length) * 100 : 100;
    
    // Calculate comment coverage
    const commentLines = lines.filter(line => line.trim().startsWith('#')).length;
    const commentCoverage = lines.length > 0 ? (commentLines / lines.length) * 100 : 0;

    return {
      lines_of_code: nonEmptyLines.length,
      complexity,
      readability_score: Math.round(readabilityScore),
      variable_naming_score: Math.round(namingScore),
      comment_coverage: Math.round(commentCoverage),
    };
  }

  private calculateScore(issues: CodeIssue[], metrics: CodeMetrics): number {
    let score = 100;
    
    // Deduct points for issues
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 8;
          break;
        case 'low':
          score -= 3;
          break;
      }
    });
    
    // Adjust based on metrics
    score += (metrics.readability_score - 50) * 0.1;
    score += (metrics.variable_naming_score - 50) * 0.1;
    score += (metrics.comment_coverage - 10) * 0.2;
    
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  private calculateGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  private generateOverallFeedback(score: number, strengths: string[]): string {
    if (score >= 90) {
      return `Excellent work! Your code is well-written and follows good practices. ${strengths.join(' ')} Keep up the great work!`;
    } else if (score >= 80) {
      return `Good job! Your code works well and shows understanding of Python concepts. ${strengths.join(' ')} There are a few areas for improvement.`;
    } else if (score >= 70) {
      return `Nice effort! Your code shows progress in learning Python. ${strengths.join(' ')} Focus on the suggestions to improve your code quality.`;
    } else if (score >= 60) {
      return `You're on the right track! Keep practicing and pay attention to the feedback. ${strengths.join(' ')} Don't give up!`;
    } else {
      return `Don't worry, coding takes practice! Review the suggestions and try again. ${strengths.join(' ')} Every programmer started where you are now.`;
    }
  }

  // Get kid-friendly explanation for common errors
  getKidFriendlyExplanation(error: string): string {
    const explanations: { [key: string]: string } = {
      'SyntaxError': 'Oops! There\'s a small mistake in how you wrote your code. Check for missing colons, quotes, or parentheses.',
      'IndentationError': 'Python is picky about spacing! Make sure your code is lined up properly with the right amount of spaces.',
      'NameError': 'Python can\'t find a variable you\'re trying to use. Check if you spelled it correctly and created it first.',
      'TypeError': 'You\'re trying to use different types of data together. Make sure you\'re using numbers with numbers and text with text.',
      'ValueError': 'The value you\'re using isn\'t quite right for what you\'re trying to do. Double-check your input.',
      'IndexError': 'You\'re trying to access something that doesn\'t exist in your list. Check if the position is correct.',
      'KeyError': 'You\'re looking for a key that doesn\'t exist in your dictionary. Make sure the key name is spelled correctly.',
    };

    return explanations[error] || 'Something went wrong, but don\'t worry! Check your code carefully and try again.';
  }

  // Generate learning suggestions based on issues
  generateLearningSuggestions(issues: CodeIssue[]): string[] {
    const suggestions: string[] = [];
    const categories = new Set(issues.map(issue => issue.category));

    if (categories.has('syntax')) {
      suggestions.push('Review Python syntax basics: colons, indentation, and quotes');
    }
    if (categories.has('logic')) {
      suggestions.push('Practice with conditional statements and loops');
    }
    if (categories.has('style')) {
      suggestions.push('Learn about Python coding conventions and best practices');
    }
    if (categories.has('best_practice')) {
      suggestions.push('Explore advanced Python concepts like functions and data structures');
    }

    return suggestions;
  }
}

export const codeReviewService = new CodeReviewService();
