import type { Level } from '../types';

export const levels: Level[] = [
  {
    id: 'level1',
    title: 'Say Hello!',
    description: 'Learn to use print statements and variables',
    difficulty: 1,
    category: 'print',
    starterCode: `# Say hello to your new friend!
# Use a variable to store a name, then print a greeting

name = "Ava"  # Change this to your name
print("Hello, " + name + "!")`,
    instructions: 'Create a variable called "name" and use print() to say hello!',
    tests: [
      {
        name: 'Has print statement',
        input: null,
        expected: true,
        description: 'Your code should use print() to display a message'
      },
      {
        name: 'Uses variable',
        input: null,
        expected: true,
        description: 'Your code should create and use a variable'
      }
    ],
    hints: [
      'Variables store information. Try: name = "Your Name"',
      'Use print() to display text: print("Hello, " + name)'
    ]
  },
  
  {
    id: 'level2',
    title: 'Roll Until Six',
    description: 'Learn while loops by rolling dice',
    difficulty: 2,
    category: 'loops',
    starterCode: `# Roll the die until you get a 6
# Count how many rolls it takes

def rolls_until_six(roller):
    count = 0
    # TODO: Write a while loop here
    # Keep rolling until you get a 6
    # Don't forget to count each roll!
    
    return count

# Test your function
print("🎲 Testing dice roller...")
result = rolls_until_six(roller)
print(f"🎯 It took {result} rolls to get a 6!")`,
    instructions: 'Complete the rolls_until_six function using a while loop. The roller() function gives you a random number from 1-6.',
    tests: [
      {
        name: 'Rolls until six - sequence [6]',
        input: [6],
        expected: 1,
        description: 'Should return 1 when first roll is 6'
      },
      {
        name: 'Rolls until six - sequence [1,6]',
        input: [1, 6],
        expected: 2,
        description: 'Should return 2 when second roll is 6'
      },
      {
        name: 'Rolls until six - sequence [2,3,4,5,6]',
        input: [2, 3, 4, 5, 6],
        expected: 5,
        description: 'Should return 5 when fifth roll is 6'
      }
    ],
    hints: [
      'Use "while True:" to create a loop that runs forever',
      'Inside the loop, call roller() and check if the result is 6. If it is, use "return" to stop the loop'
    ]
  },
  
  {
    id: 'level3',
    title: 'Navigate the Maze',
    description: 'Learn conditionals by avoiding lava and walls',
    difficulty: 3,
    category: 'conditionals',
    starterCode: `# Navigate through the maze to reach the goal
# Avoid lava (hot!) and walls (solid!)

def navigate_maze(world):
    x, y = world.start
    moves = []
    
    # TODO: Write code to reach the goal
    # Use world.at(x, y) to check what's at a position
    # Returns: {"type": "empty"|"wall"|"goal"|"lava"}
    # Move by changing x and y coordinates
    
    return moves

# Test your navigation
if world:
    print("🗺️ Starting navigation...")
    moves = navigate_maze(world)
    print(f"🤖 Robot moves: {moves}")
else:
    print("❌ No world available")`,
    instructions: 'Write code to navigate from the start position to the goal, avoiding walls and lava. Use if statements to check what type of tile you\'re moving to.',
    tests: [
      {
        name: 'Reaches goal',
        input: null,
        expected: true,
        description: 'Your robot should reach the goal tile'
      },
      {
        name: 'Avoids lava',
        input: null,
        expected: true,
        description: 'Your robot should not step on lava tiles'
      }
    ],
    hints: [
      'Check if world.at(x+1, y)["type"] == "empty" before moving right',
      'Use if/elif statements to check different directions and tile types'
    ],
    world: {
      width: 5,
      height: 5,
      start: [0, 0],
      goal: [4, 4],
      tiles: [
        { type: 'empty', x: 0, y: 0 },
        { type: 'empty', x: 1, y: 0 },
        { type: 'lava', x: 2, y: 0 },
        { type: 'empty', x: 3, y: 0 },
        { type: 'empty', x: 4, y: 0 },
        { type: 'empty', x: 0, y: 1 },
        { type: 'wall', x: 1, y: 1 },
        { type: 'lava', x: 2, y: 1 },
        { type: 'wall', x: 3, y: 1 },
        { type: 'empty', x: 4, y: 1 },
        { type: 'empty', x: 0, y: 2 },
        { type: 'empty', x: 1, y: 2 },
        { type: 'empty', x: 2, y: 2 },
        { type: 'empty', x: 3, y: 2 },
        { type: 'empty', x: 4, y: 2 },
        { type: 'empty', x: 0, y: 3 },
        { type: 'wall', x: 1, y: 3 },
        { type: 'lava', x: 2, y: 3 },
        { type: 'empty', x: 3, y: 3 },
        { type: 'empty', x: 4, y: 3 },
        { type: 'empty', x: 0, y: 4 },
        { type: 'empty', x: 1, y: 4 },
        { type: 'empty', x: 2, y: 4 },
        { type: 'empty', x: 3, y: 4 },
        { type: 'goal', x: 4, y: 4 }
      ]
    }
  },
  
  {
    id: 'level4',
    title: 'Robot Helper',
    description: 'Learn functions by creating a robot that moves to goal',
    difficulty: 4,
    category: 'functions',
    starterCode: `# Create a function that moves a robot to the goal
# The robot should return a list of moves like ["UP", "DOWN", "LEFT", "RIGHT"]

def move_to_goal(world):
    x, y = world.start
    moves = []
    
    # TODO: Write your pathfinding logic here
    # Keep track of current position (x, y)
    # Add moves to the moves list
    # Check world.at(x, y) to see what's at each position
    
    return moves

# Test your function
if world:
    print("🤖 Testing robot movement...")
    moves = move_to_goal(world)
    print(f"🎯 Robot path: {moves}")
else:
    print("❌ No world available")`,
    instructions: 'Complete the move_to_goal function. It should return a list of moves that will get the robot from start to goal, avoiding obstacles.',
    tests: [
      {
        name: 'Function returns moves list',
        input: null,
        expected: true,
        description: 'Your function should return a list of moves'
      },
      {
        name: 'Reaches goal successfully',
        input: null,
        expected: true,
        description: 'The moves should lead from start to goal'
      }
    ],
    hints: [
      'Use a loop to keep moving until you reach the goal',
      'Add moves like "UP", "DOWN", "LEFT", "RIGHT" to your moves list'
    ],
    parMoves: 8,
    world: {
      width: 4,
      height: 4,
      start: [0, 0],
      goal: [3, 3],
      tiles: [
        { type: 'empty', x: 0, y: 0 },
        { type: 'empty', x: 1, y: 0 },
        { type: 'wall', x: 2, y: 0 },
        { type: 'empty', x: 3, y: 0 },
        { type: 'empty', x: 0, y: 1 },
        { type: 'empty', x: 1, y: 1 },
        { type: 'lava', x: 2, y: 1 },
        { type: 'empty', x: 3, y: 1 },
        { type: 'empty', x: 0, y: 2 },
        { type: 'lava', x: 1, y: 2 },
        { type: 'empty', x: 2, y: 2 },
        { type: 'empty', x: 3, y: 2 },
        { type: 'empty', x: 0, y: 3 },
        { type: 'empty', x: 1, y: 3 },
        { type: 'empty', x: 2, y: 3 },
        { type: 'goal', x: 3, y: 3 }
      ]
    }
  }
];
