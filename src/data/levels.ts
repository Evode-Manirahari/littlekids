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
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a variable to store a name\nStep 2: Use print() to display a greeting\nStep 3: Combine the variable with text using +',
    whyThisWorks: 'Variables are like labeled boxes that store information. The print() function displays text on the screen. When you combine text with variables using +, Python creates a new string.',
    conceptGlossary: ['Variable', 'String', 'Print function']
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
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a while loop that runs forever\nStep 2: Call roller() to get a random number\nStep 3: Check if the number is 6\nStep 4: If yes, return the count; if no, add 1 to count and continue',
    whyThisWorks: 'While loops keep running until a condition is met. The roller() function gives you random numbers, and you count how many times you need to call it to get a 6.',
    conceptGlossary: ['While loop', 'Random numbers', 'Counters', 'Return statement']
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
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Get the starting position from world.start\nStep 2: Check what type of tile is at each position\nStep 3: Use if statements to avoid walls and lava\nStep 4: Move towards the goal tile',
    whyThisWorks: 'Conditionals (if/elif/else) let you make decisions in your code. You check the tile type and decide whether it\'s safe to move there.',
    conceptGlossary: ['If statements', 'Conditionals', 'Grid navigation', 'Tile types'],
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
  },
  
  {
    id: 'level4',
    title: 'Build a Function',
    description: 'Learn to create reusable functions',
    difficulty: 2,
    category: 'functions',
    starterCode: `# Create a function that greets someone
# Functions help us reuse code!

def greet_person(name):
    # TODO: Write a function that returns a greeting message
    # Example: "Hello, Alice! Nice to meet you!"
    return "Hello, " + name + "!"

# Test your function
print(greet_person("Alice"))
print(greet_person("Bob"))
`,
    instructions: 'Create a function called greet_person that takes a name and returns a greeting message',
    tests: [
      {
        name: 'Function exists',
        input: null,
        expected: true,
        description: 'Your code should define a function called greet_person'
      },
      {
        name: 'Function returns greeting',
        input: null,
        expected: true,
        description: 'The function should return a greeting message'
      }
    ],
    hints: [
      'Use "def function_name(parameter):" to create a function',
      'Use "return" to give back a value from your function'
    ]
  },
  
  {
    id: 'level5',
    title: 'Count with Lists',
    description: 'Learn to work with lists and counting',
    difficulty: 3,
    category: 'lists',
    starterCode: `# Count how many numbers are in a list
# Lists are like containers that hold multiple items

def count_numbers(numbers):
    count = 0
    # TODO: Count how many numbers are in the list
    # Use a for loop to go through each number
    for number in numbers:
        count += 1
    return count

# Test your function
test_list = [1, 2, 3, 4, 5]
print(f"List: {test_list}")
print(f"Count: {count_numbers(test_list)}")
`,
    instructions: 'Create a function that counts how many numbers are in a list',
    tests: [
      {
        name: 'Counts numbers correctly',
        input: null,
        expected: true,
        description: 'The function should count all numbers in the list'
      },
      {
        name: 'Uses for loop',
        input: null,
        expected: true,
        description: 'Your code should use a for loop to go through the list'
      }
    ],
    hints: [
      'Use "for item in list:" to go through each item in a list',
      'Use "count += 1" to add 1 to your counter'
    ]
  },
  
  {
    id: 'level6',
    title: 'Sum the Numbers',
    description: 'Learn to add up numbers in a list',
    difficulty: 3,
    category: 'lists',
    starterCode: `# Add up all the numbers in a list
# This is like using a calculator on a bunch of numbers!

def sum_numbers(numbers):
    total = 0
    # TODO: Add up all the numbers in the list
    # Start with total = 0, then add each number
    for number in numbers:
        total += number
    return total

# Test your function
test_list = [10, 20, 30, 40]
print(f"Numbers: {test_list}")
print(f"Sum: {sum_numbers(test_list)}")
`,
    instructions: 'Create a function that adds up all the numbers in a list',
    tests: [
      {
        name: 'Sums numbers correctly',
        input: null,
        expected: true,
        description: 'The function should add up all numbers correctly'
      },
      {
        name: 'Uses for loop',
        input: null,
        expected: true,
        description: 'Your code should use a for loop'
      }
    ],
    hints: [
      'Start with total = 0',
      'Use "total += number" to add each number to the total'
    ]
  },
  
  {
    id: 'level7',
    title: 'Find the Biggest',
    description: 'Learn to find the largest number in a list',
    difficulty: 4,
    category: 'lists',
    starterCode: `# Find the biggest number in a list
# This is like finding the tallest person in a group!

def find_biggest(numbers):
    if not numbers:
        return None
    
    biggest = numbers[0]
    # TODO: Find the biggest number
    # Compare each number with the current biggest
    for number in numbers:
        if number > biggest:
            biggest = number
    return biggest

# Test your function
test_list = [5, 2, 8, 1, 9, 3]
print(f"Numbers: {test_list}")
print(f"Biggest: {find_biggest(test_list)}")
`,
    instructions: 'Create a function that finds the largest number in a list',
    tests: [
      {
        name: 'Finds biggest number',
        input: null,
        expected: true,
        description: 'The function should find the largest number'
      },
      {
        name: 'Uses comparison',
        input: null,
        expected: true,
        description: 'Your code should compare numbers to find the biggest'
      }
    ],
    hints: [
      'Start with biggest = numbers[0] (first number)',
      'Use "if number > biggest:" to check if current number is bigger'
    ]
  },
  
  {
    id: 'level8',
    title: 'Word Counter',
    description: 'Learn to work with strings and counting',
    difficulty: 3,
    category: 'strings',
    starterCode: `# Count how many words are in a sentence
# Words are separated by spaces

def count_words(sentence):
    if not sentence.strip():
        return 0
    
    # TODO: Count the words in the sentence
    # Split the sentence by spaces and count the parts
    words = sentence.split()
    return len(words)

# Test your function
test_sentence = "Hello world this is Python"
print(f"Sentence: '{test_sentence}'")
print(f"Word count: {count_words(test_sentence)}")
`,
    instructions: 'Create a function that counts how many words are in a sentence',
    tests: [
      {
        name: 'Counts words correctly',
        input: null,
        expected: true,
        description: 'The function should count words correctly'
      },
      {
        name: 'Uses split method',
        input: null,
        expected: true,
        description: 'Your code should use the split() method'
      }
    ],
    hints: [
      'Use "sentence.split()" to separate words by spaces',
      'Use "len()" to count how many items are in the list'
    ]
  },
  
  {
    id: 'level9',
    title: 'Password Checker',
    description: 'Learn conditional logic with password validation',
    difficulty: 4,
    category: 'conditionals',
    starterCode: `# Check if a password is strong enough
# A strong password has at least 8 characters

def is_strong_password(password):
    # TODO: Check if password is strong
    # Strong means: at least 8 characters long
    if len(password) >= 8:
        return True
    else:
        return False

# Test your function
test_passwords = ["123", "password123", "abc", "mypassword"]
for pwd in test_passwords:
    result = is_strong_password(pwd)
    print(f"Password '{pwd}': {'Strong' if result else 'Weak'}")
`,
    instructions: 'Create a function that checks if a password is strong (at least 8 characters)',
    tests: [
      {
        name: 'Checks password length',
        input: null,
        expected: true,
        description: 'The function should check if password is at least 8 characters'
      },
      {
        name: 'Uses if statement',
        input: null,
        expected: true,
        description: 'Your code should use if/else statements'
      }
    ],
    hints: [
      'Use "len(password)" to get the length of the password',
      'Use "if len(password) >= 8:" to check if it\'s long enough'
    ]
  },
  
  {
    id: 'level10',
    title: 'Temperature Converter',
    description: 'Learn to convert between Celsius and Fahrenheit',
    difficulty: 3,
    category: 'functions',
    starterCode: `# Convert temperature from Celsius to Fahrenheit
# Formula: F = (C * 9/5) + 32

def celsius_to_fahrenheit(celsius):
    # TODO: Convert Celsius to Fahrenheit
    # Use the formula: F = (C * 9/5) + 32
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Test your function
temperatures = [0, 25, 100]
for temp in temperatures:
    f = celsius_to_fahrenheit(temp)
    print(f"{temp}°C = {f}°F")
`,
    instructions: 'Create a function that converts Celsius to Fahrenheit using the formula F = (C * 9/5) + 32',
    tests: [
      {
        name: 'Converts temperature correctly',
        input: null,
        expected: true,
        description: 'The function should convert Celsius to Fahrenheit correctly'
      },
      {
        name: 'Uses correct formula',
        input: null,
        expected: true,
        description: 'Your code should use the temperature conversion formula'
      }
    ],
    hints: [
      'Use the formula: fahrenheit = (celsius * 9/5) + 32',
      'Make sure to use parentheses for the math!'
    ]
  },
  
  {
    id: 'level11',
    title: 'Number Guessing Game',
    description: 'Learn to create an interactive guessing game',
    difficulty: 4,
    category: 'loops',
    starterCode: `# Create a simple number guessing game
# The computer picks a number, you try to guess it!

import random

def guessing_game():
    secret_number = random.randint(1, 10)
    guesses = 0
    max_guesses = 3
    
    print("I'm thinking of a number between 1 and 10!")
    print(f"You have {max_guesses} guesses.")
    
    # TODO: Create a loop for the guessing game
    # Ask for input, check if it's correct, count guesses
    while guesses < max_guesses:
        guess = int(input("Your guess: "))
        guesses += 1
        
        if guess == secret_number:
            print(f"🎉 You got it! The number was {secret_number}!")
            return True
        elif guess < secret_number:
            print("Too low! Try again.")
        else:
            print("Too high! Try again.")
    
    print(f"Game over! The number was {secret_number}")
    return False

# Play the game
guessing_game()
`,
    instructions: 'Create a number guessing game where the player tries to guess a random number',
    tests: [
      {
        name: 'Game runs without errors',
        input: null,
        expected: true,
        description: 'The game should run without crashing'
      },
      {
        name: 'Uses while loop',
        input: null,
        expected: true,
        description: 'Your code should use a while loop for the game'
      }
    ],
    hints: [
      'Use "while guesses < max_guesses:" to limit the number of tries',
      'Use "input()" to get the player\'s guess'
    ]
  },
  
  {
    id: 'level12',
    title: 'Shopping List Manager',
    description: 'Learn to manage lists with add, remove, and display',
    difficulty: 4,
    category: 'lists',
    starterCode: `# Create a shopping list manager
# Add items, remove items, and see your list

def manage_shopping_list():
    shopping_list = []
    
    print("🛒 Shopping List Manager")
    print("Commands: add, remove, show, quit")
    
    # TODO: Create a loop to manage the shopping list
    # Handle commands: add, remove, show, quit
    while True:
        command = input("What would you like to do? ").lower()
        
        if command == "quit":
            print("Goodbye! Happy shopping! 🛍️")
            break
        elif command == "add":
            item = input("What item to add? ")
            shopping_list.append(item)
            print(f"Added '{item}' to your list!")
        elif command == "remove":
            if shopping_list:
                item = input("What item to remove? ")
                if item in shopping_list:
                    shopping_list.remove(item)
                    print(f"Removed '{item}' from your list!")
                else:
                    print(f"'{item}' not found in your list!")
            else:
                print("Your list is empty!")
        elif command == "show":
            if shopping_list:
                print("Your shopping list:")
                for i, item in enumerate(shopping_list, 1):
                    print(f"{i}. {item}")
            else:
                print("Your list is empty!")
        else:
            print("Unknown command! Try: add, remove, show, quit")

# Start the manager
manage_shopping_list()
`,
    instructions: 'Create a shopping list manager that can add, remove, and display items',
    tests: [
      {
        name: 'Program runs without errors',
        input: null,
        expected: true,
        description: 'The shopping list manager should run without crashing'
      },
      {
        name: 'Uses while loop',
        input: null,
        expected: true,
        description: 'Your code should use a while loop for the main program'
      }
    ],
    hints: [
      'Use "while True:" for the main loop',
      'Use "if/elif" to handle different commands'
    ]
  },
  
  {
    id: 'level13',
    title: 'Rock Paper Scissors',
    description: 'Learn to create a classic game with random choices',
    difficulty: 4,
    category: 'functions',
    starterCode: `# Create a Rock Paper Scissors game
# Play against the computer!

import random

def play_rock_paper_scissors():
    choices = ["rock", "paper", "scissors"]
    
    print("🪨📄✂️ Rock Paper Scissors!")
    print("Choose: rock, paper, or scissors")
    
    # TODO: Create the game logic
    # Get player choice, get computer choice, determine winner
    player_choice = input("Your choice: ").lower()
    computer_choice = random.choice(choices)
    
    print(f"Computer chose: {computer_choice}")
    print(f"You chose: {player_choice}")
    
    if player_choice == computer_choice:
        print("It's a tie! 🤝")
    elif (player_choice == "rock" and computer_choice == "scissors") or \
         (player_choice == "paper" and computer_choice == "rock") or \
         (player_choice == "scissors" and computer_choice == "paper"):
        print("You win! 🎉")
    else:
        print("Computer wins! 🤖")

# Play the game
play_rock_paper_scissors()
`,
    instructions: 'Create a Rock Paper Scissors game where you play against the computer',
    tests: [
      {
        name: 'Game runs without errors',
        input: null,
        expected: true,
        description: 'The game should run without crashing'
      },
      {
        name: 'Uses random choice',
        input: null,
        expected: true,
        description: 'Your code should use random.choice() for computer moves'
      }
    ],
    hints: [
      'Use "random.choice(choices)" to get computer\'s choice',
      'Use multiple conditions with "or" to check winning combinations'
    ]
  },
  
  {
    id: 'level14',
    title: 'Word Reverser',
    description: 'Learn to reverse strings and work with text',
    difficulty: 3,
    category: 'strings',
    starterCode: `# Reverse a word or sentence
# Turn "hello" into "olleh"

def reverse_text(text):
    # TODO: Reverse the text
    # Use string slicing: text[::-1]
    return text[::-1]

# Test your function
test_words = ["hello", "python", "code", "programming"]
for word in test_words:
    reversed_word = reverse_text(word)
    print(f"'{word}' reversed is '{reversed_word}'")
`,
    instructions: 'Create a function that reverses any text using string slicing',
    tests: [
      {
        name: 'Reverses text correctly',
        input: null,
        expected: true,
        description: 'The function should reverse text correctly'
      },
      {
        name: 'Uses string slicing',
        input: null,
        expected: true,
        description: 'Your code should use string slicing [::-1]'
      }
    ],
    hints: [
      'Use "text[::-1]" to reverse the string',
      'String slicing [::-1] means: start at end, go to beginning, step -1'
    ]
  },
  
  {
    id: 'level15',
    title: 'Simple Calculator',
    description: 'Learn to create a basic calculator with operations',
    difficulty: 4,
    category: 'functions',
    starterCode: `# Create a simple calculator
# Add, subtract, multiply, and divide numbers

def calculator():
    print("🧮 Simple Calculator")
    print("Operations: +, -, *, /")
    
    # TODO: Create the calculator logic
    # Get two numbers and an operation, then calculate the result
    try:
        num1 = float(input("Enter first number: "))
        operation = input("Enter operation (+, -, *, /): ")
        num2 = float(input("Enter second number: "))
        
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 != 0:
                result = num1 / num2
            else:
                print("Error: Cannot divide by zero!")
                return
        else:
            print("Error: Invalid operation!")
            return
        
        print(f"Result: {num1} {operation} {num2} = {result}")
        
    except ValueError:
        print("Error: Please enter valid numbers!")

# Run the calculator
calculator()
`,
    instructions: 'Create a calculator that can perform basic math operations',
    tests: [
      {
        name: 'Calculator runs without errors',
        input: null,
        expected: true,
        description: 'The calculator should run without crashing'
      },
      {
        name: 'Handles different operations',
        input: null,
        expected: true,
        description: 'Your code should handle +, -, *, / operations'
      }
    ],
    hints: [
      'Use "if/elif" to check which operation to perform',
      'Use "try/except" to handle invalid input'
    ]
  },
  
  {
    id: 'level16',
    title: 'Final Project: Mini Adventure Game',
    description: 'Create your own mini adventure game using everything you learned!',
    difficulty: 5,
    category: 'project',
    starterCode: `# 🎮 Mini Adventure Game
# Use everything you learned to create your own game!

def adventure_game():
    print("🌟 Welcome to the Python Adventure! 🌟")
    print("You are a brave explorer looking for treasure!")
    
    health = 100
    treasure_found = 0
    location = "forest"
    
    print(f"Health: {health}")
    print(f"Treasure: {treasure_found}")
    print(f"Location: {location}")
    
    # TODO: Create your own adventure game!
    # Add choices, health system, treasure collection
    # Use if/else, loops, functions, and lists!
    
    print("\\nWhat would you like to do?")
    print("1. Explore the forest")
    print("2. Look for treasure")
    print("3. Rest and heal")
    print("4. Check your stats")
    
    choice = input("Enter your choice (1-4): ")
    
    if choice == "1":
        print("🌲 You explore the forest and find a mysterious path!")
        health -= 10
        print(f"Health: {health}")
    elif choice == "2":
        print("💎 You search for treasure and find a gold coin!")
        treasure_found += 1
        print(f"Treasure: {treasure_found}")
    elif choice == "3":
        print("😴 You rest and recover some health!")
        health += 20
        if health > 100:
            health = 100
        print(f"Health: {health}")
    elif choice == "4":
        print(f"📊 Stats - Health: {health}, Treasure: {treasure_found}")
    else:
        print("Invalid choice! Try again.")
    
    print("\\n🎉 Great job! You've created your first adventure game!")
    print("Try adding more features like:")
    print("- More locations to explore")
    print("- A combat system")
    print("- Inventory management")
    print("- Multiple endings")

# Start your adventure!
adventure_game()
`,
    instructions: 'Create your own mini adventure game using all the Python concepts you learned!',
    tests: [
      {
        name: 'Game runs without errors',
        input: null,
        expected: true,
        description: 'Your adventure game should run without crashing'
      },
      {
        name: 'Uses multiple concepts',
        input: null,
        expected: true,
        description: 'Your code should use variables, functions, and conditionals'
      }
    ],
    hints: [
      'This is your final project! Be creative!',
      'Try adding more features like inventory, combat, or multiple locations'
    ]
  },

  // ADVANCED LEVELS (17-25)
  {
    id: 'level17',
    title: 'Turtle Graphics Art',
    description: 'Create beautiful art using Python turtle graphics',
    difficulty: 4,
    category: 'project',
    starterCode: `# Create beautiful art with Python turtle graphics!
# Turtle graphics let you draw with a virtual pen

import turtle

def draw_flower():
    # TODO: Create a beautiful flower using turtle graphics
    # Use turtle.forward(), turtle.right(), turtle.left()
    # Try different colors with turtle.color()
    
    # Example: Draw a simple square
    for i in range(4):
        turtle.forward(100)
        turtle.right(90)
    
    turtle.done()

# Start drawing
draw_flower()
`,
    instructions: 'Create beautiful art using turtle graphics. Draw shapes, patterns, or even a flower!',
    tests: [
      {
        name: 'Uses turtle graphics',
        input: null,
        expected: true,
        description: 'Your code should use turtle graphics functions'
      },
      {
        name: 'Creates visual output',
        input: null,
        expected: true,
        description: 'The code should create a visual drawing'
      }
    ],
    hints: [
      'Use turtle.forward(distance) to move forward',
      'Use turtle.right(angle) or turtle.left(angle) to turn',
      'Use turtle.color("red") to change colors'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Import the turtle module\nStep 2: Use turtle.forward() to draw lines\nStep 3: Use turtle.right() or turtle.left() to turn\nStep 4: Use turtle.color() to add colors\nStep 5: Create loops to draw patterns',
    whyThisWorks: 'Turtle graphics is a fun way to learn programming by drawing. You control a virtual turtle that moves around and draws lines, creating beautiful art!',
    conceptGlossary: ['Turtle graphics', 'Drawing', 'Loops', 'Colors', 'Angles']
  },

  {
    id: 'level18',
    title: 'Data Analysis Adventure',
    description: 'Analyze data like a real data scientist',
    difficulty: 5,
    category: 'project',
    starterCode: `# Analyze student test scores like a data scientist!
# Work with real data and find interesting patterns

def analyze_scores(scores):
    # TODO: Analyze the test scores
    # Find: average, highest, lowest, and how many passed (>=70)
    
    total = sum(scores)
    count = len(scores)
    average = total / count if count > 0 else 0
    
    highest = max(scores) if scores else 0
    lowest = min(scores) if scores else 0
    
    passed = sum(1 for score in scores if score >= 70)
    
    print(f"📊 Test Score Analysis:")
    print(f"Average: {average:.1f}")
    print(f"Highest: {highest}")
    print(f"Lowest: {lowest}")
    print(f"Students who passed: {passed}/{count}")
    
    return {
        'average': average,
        'highest': highest,
        'lowest': lowest,
        'passed': passed
    }

# Test with sample data
test_scores = [85, 92, 78, 96, 88, 73, 91, 67, 89, 94]
result = analyze_scores(test_scores)
`,
    instructions: 'Create a data analysis function that finds the average, highest, lowest scores, and counts how many students passed (70+).',
    tests: [
      {
        name: 'Calculates average correctly',
        input: null,
        expected: true,
        description: 'The function should calculate the average score'
      },
      {
        name: 'Finds highest and lowest',
        input: null,
        expected: true,
        description: 'The function should find the highest and lowest scores'
      },
      {
        name: 'Counts passing students',
        input: null,
        expected: true,
        description: 'The function should count students who scored 70 or higher'
      }
    ],
    hints: [
      'Use sum() to add all scores and len() to count them',
      'Use max() and min() to find highest and lowest',
      'Use a list comprehension to count passing scores'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Calculate the total and count of scores\nStep 2: Find the average by dividing total by count\nStep 3: Use max() and min() for highest and lowest\nStep 4: Count scores >= 70 using a list comprehension\nStep 5: Display the results in a nice format',
    whyThisWorks: 'Data analysis helps us understand information better. By calculating averages, finding extremes, and counting categories, we can make informed decisions!',
    conceptGlossary: ['Data analysis', 'Statistics', 'List comprehension', 'Functions', 'Data science']
  },

  {
    id: 'level19',
    title: 'Web Scraping Explorer',
    description: 'Learn to extract information from websites',
    difficulty: 5,
    category: 'project',
    starterCode: `# Learn web scraping basics!
# Extract information from web pages (simulated)

def extract_weather_info(weather_data):
    # TODO: Extract temperature and condition from weather data
    # The data comes as a string like "Temperature: 72°F, Condition: Sunny"
    
    # Split the data and extract information
    parts = weather_data.split(', ')
    temperature = None
    condition = None
    
    for part in parts:
        if 'Temperature:' in part:
            temperature = part.split(': ')[1]
        elif 'Condition:' in part:
            condition = part.split(': ')[1]
    
    print(f"🌤️ Weather Report:")
    print(f"Temperature: {temperature}")
    print(f"Condition: {condition}")
    
    return {
        'temperature': temperature,
        'condition': condition
    }

# Test with sample weather data
weather = "Temperature: 72°F, Condition: Sunny"
result = extract_weather_info(weather)
`,
    instructions: 'Create a function that extracts temperature and weather condition from a weather data string.',
    tests: [
      {
        name: 'Extracts temperature',
        input: null,
        expected: true,
        description: 'The function should extract the temperature value'
      },
      {
        name: 'Extracts condition',
        input: null,
        expected: true,
        description: 'The function should extract the weather condition'
      },
      {
        name: 'Handles different formats',
        input: null,
        expected: true,
        description: 'The function should work with different data formats'
      }
    ],
    hints: [
      'Use split() to separate the data by commas',
      'Use if statements to check for "Temperature:" and "Condition:"',
      'Use split(": ") to separate the label from the value'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Split the weather data by commas\nStep 2: Loop through each part\nStep 3: Check if each part contains "Temperature:" or "Condition:"\nStep 4: Extract the value after the colon\nStep 5: Return the extracted information',
    whyThisWorks: 'Web scraping helps us automatically extract useful information from websites. This is how many apps get real-time data like weather, news, or prices!',
    conceptGlossary: ['Web scraping', 'Data extraction', 'String manipulation', 'Parsing', 'Automation']
  },

  {
    id: 'level20',
    title: 'Machine Learning Basics',
    description: 'Build your first simple AI model',
    difficulty: 5,
    category: 'project',
    starterCode: `# Create a simple machine learning model!
# Predict if a student will pass based on study hours

def predict_pass(study_hours, assignment_score):
    # TODO: Create a simple prediction model
    # If study_hours >= 5 AND assignment_score >= 80, predict "PASS"
    # Otherwise, predict "NEED MORE WORK"
    
    if study_hours >= 5 and assignment_score >= 80:
        prediction = "PASS"
        confidence = "High"
    elif study_hours >= 3 and assignment_score >= 70:
        prediction = "PASS"
        confidence = "Medium"
    else:
        prediction = "NEED MORE WORK"
        confidence = "High"
    
    print(f"🤖 AI Prediction:")
    print(f"Study Hours: {study_hours}")
    print(f"Assignment Score: {assignment_score}")
    print(f"Prediction: {prediction}")
    print(f"Confidence: {confidence}")
    
    return prediction

# Test the model
predict_pass(6, 85)  # Should predict PASS
predict_pass(2, 60)  # Should predict NEED MORE WORK
`,
    instructions: 'Create a simple machine learning model that predicts if a student will pass based on study hours and assignment scores.',
    tests: [
      {
        name: 'Predicts correctly for high scores',
        input: null,
        expected: true,
        description: 'The model should predict PASS for good study habits and scores'
      },
      {
        name: 'Predicts correctly for low scores',
        input: null,
        expected: true,
        description: 'The model should predict NEED MORE WORK for poor study habits'
      },
      {
        name: 'Uses logical conditions',
        input: null,
        expected: true,
        description: 'The model should use if/elif/else statements properly'
      }
    ],
    hints: [
      'Use if/elif/else to create decision rules',
      'Check both study_hours AND assignment_score conditions',
      'Create different confidence levels based on the conditions'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Define the prediction rules using if/elif/else\nStep 2: Check if both study hours and assignment score meet the criteria\nStep 3: Assign confidence levels based on how well the criteria are met\nStep 4: Display the prediction with reasoning\nStep 5: Test the model with different inputs',
    whyThisWorks: 'Machine learning is about creating rules that can make predictions. Even simple rules can be very useful for making decisions based on data!',
    conceptGlossary: ['Machine learning', 'Prediction', 'Decision rules', 'AI', 'Data patterns']
  },

  {
    id: 'level21',
    title: 'Game Development',
    description: 'Create your own mini-game using Python',
    difficulty: 5,
    category: 'project',
    starterCode: `# Create a simple number guessing game!
# This is like a mini version of popular games

import random

def number_guessing_game():
    print("🎮 Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100...")
    
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    # TODO: Create the main game loop
    # Ask for guesses, give hints, count attempts
    while attempts < max_attempts:
        try:
            guess = int(input(f"Attempt {attempts + 1}/{max_attempts}: Your guess: "))
            attempts += 1
            
            if guess == secret_number:
                print(f"🎉 Congratulations! You guessed it in {attempts} attempts!")
                return True
            elif guess < secret_number:
                print("📈 Too low! Try a higher number.")
            else:
                print("📉 Too high! Try a lower number.")
                
        except ValueError:
            print("❌ Please enter a valid number!")
            attempts -= 1  # Don't count invalid attempts
    
    print(f"😞 Game over! The number was {secret_number}")
    return False

# Start the game
number_guessing_game()
`,
    instructions: 'Create a complete number guessing game with hints, attempt counting, and win/lose conditions.',
    tests: [
      {
        name: 'Game runs without errors',
        input: null,
        expected: true,
        description: 'The game should run without crashing'
      },
      {
        name: 'Uses random numbers',
        input: null,
        expected: true,
        description: 'The game should use random.randint() for the secret number'
      },
      {
        name: 'Has proper game loop',
        input: null,
        expected: true,
        description: 'The game should use a while loop for the main game logic'
      }
    ],
    hints: [
      'Use random.randint(1, 100) to generate the secret number',
      'Use a while loop to keep asking for guesses',
      'Use if/elif/else to give hints about the guess'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Generate a random secret number\nStep 2: Create a while loop for the game\nStep 3: Get user input and validate it\nStep 4: Compare the guess with the secret number\nStep 5: Give hints and check for win/lose conditions',
    whyThisWorks: 'Game development combines many programming concepts! You use random numbers, loops, conditionals, and user input to create an interactive experience.',
    conceptGlossary: ['Game development', 'Random numbers', 'User input', 'Game loops', 'Interactive programming']
  },

  {
    id: 'level22',
    title: 'File Management System',
    description: 'Learn to work with files and data storage',
    difficulty: 4,
    category: 'project',
    starterCode: `# Create a simple file management system!
# Learn to read, write, and organize files

def create_student_report(student_name, subjects, grades):
    # TODO: Create a formatted student report
    # Format: "Student: [name]\\nSubject: [subject] - Grade: [grade]\\n..."
    
    report = f"Student: {student_name}\\n"
    report += "=" * 30 + "\\n"
    
    for subject, grade in zip(subjects, grades):
        report += f"Subject: {subject} - Grade: {grade}\\n"
    
    # Calculate average
    if grades:
        average = sum(grades) / len(grades)
        report += f"\\nAverage Grade: {average:.1f}"
    
    return report

def save_report_to_file(report, filename):
    # TODO: Save the report to a file
    # Use open() with 'w' mode to write the file
    
    with open(filename, 'w') as file:
        file.write(report)
    print(f"📁 Report saved to {filename}")

# Test the system
student_name = "Alice Johnson"
subjects = ["Math", "Science", "English", "History"]
grades = [95, 87, 92, 88]

report = create_student_report(student_name, subjects, grades)
print(report)
print()

save_report_to_file(report, "student_report.txt")
`,
    instructions: 'Create a student report system that formats data and saves it to a file.',
    tests: [
      {
        name: 'Creates formatted report',
        input: null,
        expected: true,
        description: 'The function should create a properly formatted report'
      },
      {
        name: 'Calculates average grade',
        input: null,
        expected: true,
        description: 'The function should calculate and display the average grade'
      },
      {
        name: 'Saves to file',
        input: null,
        expected: true,
        description: 'The function should save the report to a file'
      }
    ],
    hints: [
      'Use f-strings to format the report nicely',
      'Use zip() to combine subjects and grades',
      'Use open() with "w" mode to write files'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a formatted report string with student name\nStep 2: Use a loop to add each subject and grade\nStep 3: Calculate the average grade\nStep 4: Use open() with "w" mode to write the file\nStep 5: Use with statement for proper file handling',
    whyThisWorks: 'File management is essential for storing data permanently. This is how programs save user data, reports, and other important information!',
    conceptGlossary: ['File handling', 'Data storage', 'File I/O', 'String formatting', 'Data persistence']
  },

  {
    id: 'level23',
    title: 'API Integration',
    description: 'Connect to external services and APIs',
    difficulty: 5,
    category: 'project',
    starterCode: `# Learn to work with APIs (Application Programming Interfaces)!
# APIs let your program talk to other services

def get_weather_forecast(city):
    # TODO: Simulate getting weather data from an API
    # In real life, this would connect to a weather service
    
    # Simulated weather data (in real apps, this comes from an API)
    weather_data = {
        "New York": {"temp": 72, "condition": "Sunny", "humidity": 65},
        "London": {"temp": 58, "condition": "Cloudy", "humidity": 80},
        "Tokyo": {"temp": 75, "condition": "Rainy", "humidity": 90},
        "Sydney": {"temp": 82, "condition": "Sunny", "humidity": 55}
    }
    
    if city in weather_data:
        data = weather_data[city]
        print(f"🌤️ Weather in {city}:")
        print(f"Temperature: {data['temp']}°F")
        print(f"Condition: {data['condition']}")
        print(f"Humidity: {data['humidity']}%")
        return data
    else:
        print(f"❌ Weather data not available for {city}")
        return None

def get_multiple_cities(cities):
    # TODO: Get weather for multiple cities
    results = {}
    for city in cities:
        results[city] = get_weather_forecast(city)
    return results

# Test the API simulation
cities = ["New York", "London", "Tokyo"]
weather_results = get_multiple_cities(cities)
`,
    instructions: 'Create functions that simulate working with weather APIs to get data for multiple cities.',
    tests: [
      {
        name: 'Gets weather for single city',
        input: null,
        expected: true,
        description: 'The function should return weather data for a given city'
      },
      {
        name: 'Handles multiple cities',
        input: null,
        expected: true,
        description: 'The function should process multiple cities'
      },
      {
        name: 'Handles unknown cities',
        input: null,
        expected: true,
        description: 'The function should handle cities not in the database'
      }
    ],
    hints: [
      'Use a dictionary to store weather data for different cities',
      'Use a for loop to process multiple cities',
      'Use if/else to handle cities that exist or don\'t exist'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a dictionary with weather data for different cities\nStep 2: Check if the requested city exists in the data\nStep 3: Return the weather information in a nice format\nStep 4: Use a loop to process multiple cities\nStep 5: Store results in a dictionary for easy access',
    whyThisWorks: 'APIs let your program connect to external services to get real-time data. This is how weather apps, social media, and many other apps work!',
    conceptGlossary: ['API', 'External services', 'Data integration', 'Web services', 'Real-time data']
  },

  {
    id: 'level24',
    title: 'Database Operations',
    description: 'Learn to work with databases and data storage',
    difficulty: 5,
    category: 'project',
    starterCode: `# Learn database operations!
# Work with data like a real database system

class SimpleDatabase:
    def __init__(self):
        # TODO: Initialize the database with empty storage
        self.data = {}
    
    def insert(self, table, record):
        # TODO: Insert a new record into a table
        # If table doesn't exist, create it
        if table not in self.data:
            self.data[table] = []
        
        self.data[table].append(record)
        print(f"✅ Inserted record into {table}")
    
    def find(self, table, condition):
        # TODO: Find records that match a condition
        # Return all records where the condition is true
        if table not in self.data:
            return []
        
        results = []
        for record in self.data[table]:
            if condition(record):
                results.append(record)
        
        return results
    
    def get_all(self, table):
        # TODO: Get all records from a table
        return self.data.get(table, [])

# Test the database
db = SimpleDatabase()

# Insert some student records
db.insert("students", {"name": "Alice", "age": 12, "grade": "A"})
db.insert("students", {"name": "Bob", "age": 11, "grade": "B"})
db.insert("students", {"name": "Charlie", "age": 13, "grade": "A"})

# Find students with grade A
grade_a_students = db.find("students", lambda student: student["grade"] == "A")
print(f"Students with grade A: {grade_a_students}")

# Get all students
all_students = db.get_all("students")
print(f"All students: {all_students}")
`,
    instructions: 'Create a simple database class that can insert, find, and retrieve data using conditions.',
    tests: [
      {
        name: 'Inserts records correctly',
        input: null,
        expected: true,
        description: 'The database should insert records into tables'
      },
      {
        name: 'Finds records with conditions',
        input: null,
        expected: true,
        description: 'The database should find records matching conditions'
      },
      {
        name: 'Gets all records',
        input: null,
        expected: true,
        description: 'The database should retrieve all records from a table'
      }
    ],
    hints: [
      'Use a dictionary to store tables and their records',
      'Use lambda functions for conditions in the find method',
      'Use list methods like append() to add records'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a class with a dictionary to store data\nStep 2: Implement insert() to add records to tables\nStep 3: Implement find() to search records with conditions\nStep 4: Implement get_all() to retrieve all records\nStep 5: Use lambda functions for flexible searching',
    whyThisWorks: 'Databases are essential for storing and organizing large amounts of data. Even simple databases help you understand how data management works!',
    conceptGlossary: ['Database', 'Data storage', 'Classes', 'Lambda functions', 'Data management']
  },

  {
    id: 'level25',
    title: 'Final Master Project',
    description: 'Create your own complete Python application',
    difficulty: 6,
    category: 'project',
    starterCode: `# 🎯 FINAL MASTER PROJECT 🎯
# Create your own complete Python application!
# Combine everything you've learned to build something amazing

class StudentManager:
    def __init__(self):
        # TODO: Initialize your student management system
        self.students = []
        self.subjects = ["Math", "Science", "English", "History"]
    
    def add_student(self, name, age):
        # TODO: Add a new student to the system
        student = {
            "name": name,
            "age": age,
            "grades": {},
            "total_points": 0
        }
        self.students.append(student)
        print(f"✅ Added student: {name}")
    
    def add_grade(self, student_name, subject, grade):
        # TODO: Add a grade for a student in a specific subject
        for student in self.students:
            if student["name"] == student_name:
                student["grades"][subject] = grade
                student["total_points"] += grade
                print(f"✅ Added {grade} for {student_name} in {subject}")
                return True
        print(f"❌ Student {student_name} not found")
        return False
    
    def calculate_average(self, student_name):
        # TODO: Calculate the average grade for a student
        for student in self.students:
            if student["name"] == student_name:
                if student["grades"]:
                    average = sum(student["grades"].values()) / len(student["grades"])
                    return round(average, 2)
                else:
                    return 0
        return None
    
    def get_class_report(self):
        # TODO: Generate a complete class report
        print("\\n📊 CLASS REPORT")
        print("=" * 50)
        
        for student in self.students:
            avg = self.calculate_average(student["name"])
            print(f"\\nStudent: {student['name']} (Age: {student['age']})")
            print(f"Average Grade: {avg}")
            print("Grades:")
            for subject, grade in student["grades"].items():
                print(f"  {subject}: {grade}")
    
    def find_top_student(self):
        # TODO: Find the student with the highest average
        if not self.students:
            return None
        
        top_student = None
        top_average = 0
        
        for student in self.students:
            avg = self.calculate_average(student["name"])
            if avg > top_average:
                top_average = avg
                top_student = student["name"]
        
        return top_student, top_average

# Test your complete application
print("🎓 Welcome to the Student Management System!")
manager = StudentManager()

# Add some students
manager.add_student("Alice", 12)
manager.add_student("Bob", 11)
manager.add_student("Charlie", 13)

# Add some grades
manager.add_grade("Alice", "Math", 95)
manager.add_grade("Alice", "Science", 87)
manager.add_grade("Bob", "Math", 78)
manager.add_grade("Bob", "English", 92)
manager.add_grade("Charlie", "Science", 96)
manager.add_grade("Charlie", "History", 88)

# Generate reports
manager.get_class_report()

# Find top student
top_student, top_avg = manager.find_top_student()
print(f"\\n🏆 Top Student: {top_student} with {top_avg} average")

print("\\n🎉 Congratulations! You've built a complete Python application!")
`,
    instructions: 'Create a complete student management system that can add students, record grades, calculate averages, and generate reports.',
    tests: [
      {
        name: 'Adds students correctly',
        input: null,
        expected: true,
        description: 'The system should add students with names and ages'
      },
      {
        name: 'Records grades properly',
        input: null,
        expected: true,
        description: 'The system should record grades for different subjects'
      },
      {
        name: 'Calculates averages',
        input: null,
        expected: true,
        description: 'The system should calculate student averages correctly'
      },
      {
        name: 'Generates reports',
        input: null,
        expected: true,
        description: 'The system should generate comprehensive class reports'
      },
      {
        name: 'Finds top student',
        input: null,
        expected: true,
        description: 'The system should identify the student with the highest average'
      }
    ],
    hints: [
      'Use classes to organize your code',
      'Use dictionaries to store student data',
      'Use loops to process multiple students',
      'Use functions to break down complex tasks'
    ],
    videoTutorial: 'https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q',
    additionalTutorials: [
      'https://www.youtube.com/watch?v=bdUqQidffPE'
    ],
    codeWalkthrough: 'Step 1: Create a StudentManager class with data storage\nStep 2: Implement add_student() to add new students\nStep 3: Implement add_grade() to record grades\nStep 4: Implement calculate_average() for each student\nStep 5: Implement get_class_report() to display all data\nStep 6: Implement find_top_student() to identify the best performer',
    whyThisWorks: 'This project combines everything you\'ve learned: classes, dictionaries, loops, functions, conditionals, and data processing. It\'s a real-world application that demonstrates your Python mastery!',
    conceptGlossary: ['Classes', 'Object-oriented programming', 'Data management', 'Real-world applications', 'Complete systems']
  }
];
