import { loadPyodide } from 'pyodide';
import type { Level, CodeExecutionResult, TestResult } from '../types';

class PyodideEngine {
  private pyodide: any = null;
  private initialized = false;

  async initialize() {
    if (this.initialized) return;
    
    console.log('Initializing Pyodide...');
    this.pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.28.2/full/'
    });
    
    // Set up Python environment
    this.pyodide.runPython(`
import sys
import io
from contextlib import redirect_stdout, redirect_stderr

# Capture output
class OutputCapture:
    def __init__(self):
        self.output = []
    
    def write(self, text):
        self.output.append(text)
    
    def flush(self):
        pass
    
    def get_output(self):
        return ''.join(self.output)

# Global output capture
output_capture = OutputCapture()
sys.stdout = output_capture
sys.stderr = output_capture
    `);
    
    this.initialized = true;
    console.log('Pyodide initialized successfully');
  }

  async executeCode(code: string, level: Level): Promise<CodeExecutionResult> {
    await this.initialize();
    
    try {
      // Clear previous output
      this.pyodide.runPython('output_capture.output.clear()');
      
      // Set up level-specific environment
      await this.setupLevelEnvironment(level);
      
      // Execute student code
      this.pyodide.runPython(code);
      
      // Get output
      const output = this.pyodide.runPython('output_capture.get_output()');
      
      // Run tests
      const testResults = await this.runTests(level);
      
      // Calculate stars based on test results
      const stars = this.calculateStars(testResults);
      
      return {
        success: true,
        output,
        testResults,
        stars
      };
      
    } catch (error: any) {
      console.error('Code execution error:', error);
      return {
        success: false,
        output: '',
        error: error.message || 'Unknown error occurred'
      };
    }
  }

  private async setupLevelEnvironment(level: Level) {
    let setupCode = '';
    
    switch (level.category) {
      case 'loops':
        setupCode = `
import random

def roller():
    """Simulates a die roll from 1 to 6"""
    return random.randint(1, 6)

# Test roller function
def test_roller():
    for _ in range(10):
        roll = roller()
        assert 1 <= roll <= 6, f"Roll {roll} is not between 1 and 6"
    print("✅ Roller function works correctly!")

test_roller()
        `;
        break;
        
      case 'functions':
        setupCode = `
class World:
    def __init__(self, grid_data):
        self.width = grid_data['width']
        self.height = grid_data['height']
        self.start = tuple(grid_data['start'])
        self.goal = tuple(grid_data['goal'])
        self.tiles = {}
        for tile in grid_data['tiles']:
            self.tiles[(tile['x'], tile['y'])] = tile['type']
    
    def at(self, x, y):
        tile_type = self.tiles.get((x, y), 'empty')
        return {'type': tile_type}
    
    def __str__(self):
        return f"World({self.width}x{self.height}, start={self.start}, goal={self.goal})"

# Create world instance
world_data = ${JSON.stringify(level.world || {})}
if world_data:
    world = World(world_data)
    print(f"🌍 World created: {world}")
else:
    world = None
        `;
        break;
        
      default:
        setupCode = `
# Basic setup for ${level.category} level
print("🚀 Ready to code!")
        `;
    }
    
    if (setupCode) {
      this.pyodide.runPython(setupCode);
    }
  }

  private async runTests(level: Level): Promise<TestResult[]> {
    const results: TestResult[] = [];
    
    for (const test of level.tests) {
      try {
        let testCode = '';
        
        switch (level.category) {
          case 'print':
            // For print levels, just give 1 star for any successful execution
            testCode = `
# Test: ${test.name}
print(f"🧪 Running test: {test.name}")
result = True  # Give 1 star for any successful execution
if result:
    print(f"✅ Test '{test.name}' passed!")
else:
    print(f"❌ Test '{test.name}' failed!")
            `;
            break;
            
          case 'loops':
            testCode = `
# Test: ${test.name}
def fake_roller(sequence):
    it = iter(sequence)
    return lambda: next(it)

test_sequence = ${JSON.stringify(test.input)}
expected = ${JSON.stringify(test.expected)}
actual = rolls_until_six(fake_roller(test_sequence))

if actual == expected:
    print(f"✅ Test '{test.name}' passed!")
    result = True
else:
    print(f"❌ Test '{test.name}' failed! Expected {expected}, got {actual}")
    result = False
            `;
            break;
            
          case 'functions':
            testCode = `
# Test: ${test.name}
if world:
    moves = move_to_goal(world)
    print(f"🤖 Robot moves: {moves}")
    
    # Simulate robot movement
    x, y = world.start
    valid_moves = 0
    
    for move in moves:
        if move == "UP": y -= 1
        elif move == "DOWN": y += 1
        elif move == "LEFT": x -= 1
        elif move == "RIGHT": x += 1
        
        cell = world.at(x, y)["type"]
        if cell == "lava":
            print(f"💥 Hit lava at ({x}, {y})!")
            result = False
            break
        elif cell == "wall":
            print(f"💥 Hit wall at ({x}, {y})!")
            result = False
            break
        elif cell == "goal":
            print(f"🎯 Reached goal at ({x}, {y})!")
            result = True
            break
        else:
            valid_moves += 1
    else:
        print(f"❌ Never reached goal! Final position: ({x}, {y})")
        result = False
else:
    print("❌ No world available for testing")
    result = False
            `;
            break;
            
          default:
            testCode = `
# Test: ${test.name}
print(f"🧪 Running test: {test.name}")
result = True  # Placeholder for other test types
            `;
        }
        
        this.pyodide.runPython(testCode);
        
        // Get the result from Python
        const result = this.pyodide.runPython('result');
        
        results.push({
          name: test.name,
          passed: result,
          message: result ? 'Test passed!' : 'Test failed'
        });
        
      } catch (error: any) {
        results.push({
          name: test.name,
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    }
    
    return results;
  }

  private calculateStars(testResults: TestResult[]): number {
    const passedTests = testResults.filter(t => t.passed).length;
    const totalTests = testResults.length;
    
    if (passedTests === 0) return 0;
    if (passedTests === totalTests) return 3;
    if (passedTests >= totalTests * 0.6) return 2;
    return 1;
  }
}

export const pyodideEngine = new PyodideEngine();
