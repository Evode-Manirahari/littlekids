// Tutorial data for different learning styles and concepts
// Comprehensive video tutorials for CodeQuest Jr.

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: 'beginner' | 'intermediate' | 'advanced' | 'concept' | 'project';
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  duration: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  videoUrl: string;
  thumbnail: string;
  tags: string[];
  prerequisites: string[];
  relatedLevels: string[];
  transcript?: string;
  exercises?: string[];
}

export const tutorials: Tutorial[] = [
  // BEGINNER TUTORIALS
  {
    id: 'python-intro-visual',
    title: 'Python Introduction - Visual Learning',
    description: 'Learn Python basics with colorful animations and visual examples',
    category: 'beginner',
    learningStyle: 'visual',
    duration: '8:30',
    difficulty: 1,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['python', 'basics', 'visual', 'introduction'],
    prerequisites: [],
    relatedLevels: ['level1', 'level2', 'level3'],
    transcript: 'Welcome to Python! In this video, we\'ll learn the basics of Python programming...',
    exercises: [
      'Write your first print statement',
      'Create a variable with your name',
      'Print a message to the console'
    ]
  },
  {
    id: 'python-intro-auditory',
    title: 'Python Introduction - Audio Learning',
    description: 'Listen and learn Python concepts with clear explanations and examples',
    category: 'beginner',
    learningStyle: 'auditory',
    duration: '12:15',
    difficulty: 1,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['python', 'basics', 'audio', 'introduction'],
    prerequisites: [],
    relatedLevels: ['level1', 'level2', 'level3'],
    transcript: 'Hello and welcome to Python programming! Let\'s start with the fundamentals...',
    exercises: [
      'Listen to the explanation and repeat the concepts',
      'Practice speaking the code out loud',
      'Explain what you learned to someone else'
    ]
  },
  {
    id: 'variables-kinesthetic',
    title: 'Variables and Data Types - Hands-On',
    description: 'Learn variables by doing! Interactive exercises and real-world examples',
    category: 'beginner',
    learningStyle: 'kinesthetic',
    duration: '15:45',
    difficulty: 2,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['variables', 'data-types', 'hands-on', 'interactive'],
    prerequisites: ['python-intro-visual'],
    relatedLevels: ['level2', 'level3', 'level4'],
    transcript: 'Let\'s get our hands dirty with variables! We\'ll create, modify, and use variables...',
    exercises: [
      'Create 5 different variables',
      'Change the value of a variable',
      'Use variables in a print statement'
    ]
  },
  {
    id: 'loops-reading',
    title: 'Loops and Iteration - Reading Guide',
    description: 'Master loops through step-by-step reading and code analysis',
    category: 'beginner',
    learningStyle: 'reading',
    duration: '20:30',
    difficulty: 2,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['loops', 'iteration', 'for', 'while', 'reading'],
    prerequisites: ['variables-kinesthetic'],
    relatedLevels: ['level4', 'level5', 'level6'],
    transcript: 'Loops are powerful tools in programming. Let\'s read through examples and understand how they work...',
    exercises: [
      'Read and analyze the loop examples',
      'Write your own loop with a counter',
      'Create a loop that prints numbers 1 to 10'
    ]
  },

  // INTERMEDIATE TUTORIALS
  {
    id: 'functions-visual',
    title: 'Functions - Visual Learning',
    description: 'See how functions work with animated diagrams and visual flowcharts',
    category: 'intermediate',
    learningStyle: 'visual',
    duration: '18:20',
    difficulty: 3,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['functions', 'parameters', 'return', 'visual'],
    prerequisites: ['loops-reading'],
    relatedLevels: ['level7', 'level8', 'level9'],
    transcript: 'Functions are like magic boxes that take input and give output. Let\'s see how they work...',
    exercises: [
      'Create a function that adds two numbers',
      'Write a function that greets a person',
      'Make a function that calculates the area of a circle'
    ]
  },
  {
    id: 'lists-auditory',
    title: 'Lists and Data Structures - Audio Learning',
    description: 'Listen to explanations of lists, dictionaries, and data manipulation',
    category: 'intermediate',
    learningStyle: 'auditory',
    duration: '25:10',
    difficulty: 3,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['lists', 'dictionaries', 'data-structures', 'audio'],
    prerequisites: ['functions-visual'],
    relatedLevels: ['level8', 'level9', 'level10'],
    transcript: 'Data structures are the building blocks of programming. Let\'s explore lists and dictionaries...',
    exercises: [
      'Create a list of your favorite foods',
      'Add and remove items from a list',
      'Create a dictionary with your personal information'
    ]
  },
  {
    id: 'conditionals-kinesthetic',
    title: 'Conditionals and Logic - Hands-On',
    description: 'Build decision-making programs with interactive exercises',
    category: 'intermediate',
    learningStyle: 'kinesthetic',
    duration: '22:35',
    difficulty: 3,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['conditionals', 'if-else', 'logic', 'hands-on'],
    prerequisites: ['lists-auditory'],
    relatedLevels: ['level9', 'level10', 'level11'],
    transcript: 'Let\'s make our programs smart! We\'ll learn how to make decisions with if-else statements...',
    exercises: [
      'Create a program that checks if a number is even or odd',
      'Build a simple calculator with if-else statements',
      'Make a program that gives different responses based on age'
    ]
  },

  // ADVANCED TUTORIALS
  {
    id: 'classes-visual',
    title: 'Object-Oriented Programming - Visual Learning',
    description: 'Understand classes and objects with visual diagrams and animations',
    category: 'advanced',
    learningStyle: 'visual',
    duration: '30:45',
    difficulty: 4,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['classes', 'objects', 'oop', 'visual'],
    prerequisites: ['conditionals-kinesthetic'],
    relatedLevels: ['level12', 'level13', 'level14'],
    transcript: 'Object-oriented programming is like creating blueprints for objects. Let\'s see how it works...',
    exercises: [
      'Create a class for a car',
      'Add methods to your car class',
      'Create multiple car objects'
    ]
  },
  {
    id: 'file-handling-auditory',
    title: 'File Handling and I/O - Audio Learning',
    description: 'Learn to read and write files with clear audio explanations',
    category: 'advanced',
    learningStyle: 'auditory',
    duration: '28:15',
    difficulty: 4,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['files', 'io', 'reading', 'writing', 'audio'],
    prerequisites: ['classes-visual'],
    relatedLevels: ['level14', 'level15', 'level16'],
    transcript: 'Files are how we store data permanently. Let\'s learn to read and write files...',
    exercises: [
      'Create a text file with your name',
      'Read a file and print its contents',
      'Write a program that saves user input to a file'
    ]
  },

  // CONCEPT TUTORIALS
  {
    id: 'debugging-visual',
    title: 'Debugging Techniques - Visual Guide',
    description: 'Learn to find and fix bugs with visual debugging tools',
    category: 'concept',
    learningStyle: 'visual',
    duration: '16:30',
    difficulty: 3,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['debugging', 'errors', 'troubleshooting', 'visual'],
    prerequisites: ['functions-visual'],
    relatedLevels: ['level5', 'level6', 'level7', 'level8', 'level9', 'level10'],
    transcript: 'Bugs are part of programming! Let\'s learn how to find and fix them...',
    exercises: [
      'Find the bug in a simple program',
      'Use print statements to debug',
      'Fix a program with multiple errors'
    ]
  },
  {
    id: 'algorithms-kinesthetic',
    title: 'Algorithms and Problem Solving - Hands-On',
    description: 'Solve problems step by step with interactive algorithm building',
    category: 'concept',
    learningStyle: 'kinesthetic',
    duration: '35:20',
    difficulty: 4,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['algorithms', 'problem-solving', 'logic', 'hands-on'],
    prerequisites: ['conditionals-kinesthetic'],
    relatedLevels: ['level10', 'level11', 'level12', 'level13'],
    transcript: 'Algorithms are step-by-step solutions to problems. Let\'s build them together...',
    exercises: [
      'Create an algorithm to find the largest number',
      'Build a sorting algorithm',
      'Solve a real-world problem with code'
    ]
  },

  // PROJECT TUTORIALS
  {
    id: 'game-project-visual',
    title: 'Build a Number Guessing Game - Visual',
    description: 'Create a complete game project with visual step-by-step instructions',
    category: 'project',
    learningStyle: 'visual',
    duration: '45:30',
    difficulty: 4,
    videoUrl: 'https://www.youtube.com/watch?v=bdUqQidffPE',
    thumbnail: 'https://img.youtube.com/vi/bdUqQidffPE/maxresdefault.jpg',
    tags: ['game', 'project', 'complete', 'visual'],
    prerequisites: ['conditionals-kinesthetic', 'functions-visual'],
    relatedLevels: ['level15', 'level16', 'level17'],
    transcript: 'Let\'s build a complete game! We\'ll create a number guessing game from start to finish...',
    exercises: [
      'Plan your game on paper',
      'Write the basic game structure',
      'Add features like scoring and difficulty levels'
    ]
  },
  {
    id: 'data-analysis-auditory',
    title: 'Data Analysis Project - Audio Guide',
    description: 'Analyze real data with step-by-step audio instructions',
    category: 'project',
    learningStyle: 'auditory',
    duration: '50:15',
    difficulty: 5,
    videoUrl: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    thumbnail: 'https://img.youtube.com/vi/uzyiCpsS0qQ/maxresdefault.jpg',
    tags: ['data-analysis', 'project', 'real-world', 'audio'],
    prerequisites: ['lists-auditory', 'file-handling-auditory'],
    relatedLevels: ['level18', 'level19', 'level20'],
    transcript: 'Let\'s analyze real data! We\'ll work with student grades and find interesting patterns...',
    exercises: [
      'Load data from a file',
      'Calculate statistics',
      'Create visualizations'
    ]
  }
];

// Helper functions
export const getTutorialsByLearningStyle = (style: Tutorial['learningStyle']): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.learningStyle === style);
};

export const getTutorialsByCategory = (category: Tutorial['category']): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.category === category);
};

export const getTutorialsByDifficulty = (difficulty: Tutorial['difficulty']): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.difficulty === difficulty);
};

export const getTutorialsForLevel = (levelId: string): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.relatedLevels.includes(levelId));
};

export const getTutorialById = (id: string): Tutorial | undefined => {
  return tutorials.find(tutorial => tutorial.id === id);
};
