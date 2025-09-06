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
  }
];
