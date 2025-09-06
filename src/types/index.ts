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
