export interface Level {
  id: string;
  title: string;
  description: string;
  difficulty: number;
  category: 'print' | 'loops' | 'conditionals' | 'functions' | 'lists' | 'strings' | 'dictionaries' | 'debugging' | 'project';
  starterCode: string;
  instructions: string;
  tests: TestCase[];
  hints: string[];
  parMoves?: number;
  parTime?: number;
  world?: GridWorld;
  diceConfig?: DiceConfig;
  videoTutorial?: string;
  additionalTutorials?: string[];
  codeWalkthrough?: string;
  whyThisWorks?: string;
  conceptGlossary?: string[];
}

export interface TestCase {
  name: string;
  input: any;
  expected: any;
  description?: string;
}

export interface GridWorld {
  width: number;
  height: number;
  start: [number, number];
  goal: [number, number];
  tiles: Tile[];
}

export interface Tile {
  type: 'empty' | 'wall' | 'goal' | 'lava' | 'gem';
  x: number;
  y: number;
}

export interface DiceConfig {
  sides: number;
  targetValue: number;
  description: string;
}

export interface GameProgress {
  completedLevels: string[];
  stars: { [levelId: string]: number };
  currentLevel: string;
  hintsUsed: { [levelId: string]: number };
}

export interface CodeExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  testResults?: TestResult[];
  stars?: number;
}

export interface TestResult {
  name: string;
  passed: boolean;
  message?: string;
  expected?: any;
  actual?: any;
}

export interface HintState {
  currentHint: number;
  maxHints: number;
  hints: string[];
}

export interface GameProgressEnhanced {
  currentLevel: string;
  completedLevels: string[];
  stars: Record<string, number>;
  totalStars: number;
  achievements: string[];
  streak: number;
  lastPlayed: string;
  avatar: string;
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  musicEnabled: boolean;
  hintsUsed: { [levelId: string]: number };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'parent';
  avatar: string;
  character: 'robot' | 'cat' | 'dragon';
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  musicEnabled: boolean;
  createdAt: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ConceptGlossary {
  term: string;
  definition: string;
  example: string;
  category: string;
}

export interface ErrorTranslation {
  errorType: string;
  kidFriendlyMessage: string;
  suggestion: string;
  example: string;
}
