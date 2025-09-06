import { CodeSnippet } from '../types';

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'print_basic',
    title: 'Basic Print',
    description: 'Print a simple message',
    code: 'print("Hello, World!")',
    category: 'print',
    difficulty: 'beginner'
  },
  {
    id: 'print_variable',
    title: 'Print with Variable',
    description: 'Print a variable value',
    code: 'name = "Alice"\nprint(f"Hello, {name}!")',
    category: 'print',
    difficulty: 'beginner'
  },
  {
    id: 'for_loop',
    title: 'For Loop',
    description: 'Loop through a range of numbers',
    code: 'for i in range(5):\n    print(f"Number: {i}")',
    category: 'loops',
    difficulty: 'beginner'
  },
  {
    id: 'while_loop',
    title: 'While Loop',
    description: 'Loop while a condition is true',
    code: 'count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1',
    category: 'loops',
    difficulty: 'beginner'
  },
  {
    id: 'if_statement',
    title: 'If Statement',
    description: 'Make decisions with if',
    code: 'age = 15\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")',
    category: 'conditionals',
    difficulty: 'beginner'
  },
  {
    id: 'if_elif_else',
    title: 'If-Elif-Else',
    description: 'Multiple conditions',
    code: 'score = 85\nif score >= 90:\n    print("A grade")\nelif score >= 80:\n    print("B grade")\nelse:\n    print("C grade")',
    category: 'conditionals',
    difficulty: 'intermediate'
  },
  {
    id: 'function_basic',
    title: 'Basic Function',
    description: 'Create a simple function',
    code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))',
    category: 'functions',
    difficulty: 'beginner'
  },
  {
    id: 'function_with_params',
    title: 'Function with Parameters',
    description: 'Function that takes multiple parameters',
    code: 'def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(5, 3)\nprint(f"5 + 3 = {result}")',
    category: 'functions',
    difficulty: 'beginner'
  },
  {
    id: 'list_basic',
    title: 'Basic List',
    description: 'Create and use a list',
    code: 'fruits = ["apple", "banana", "orange"]\nprint(fruits[0])  # First item\nprint(len(fruits))  # List length',
    category: 'lists',
    difficulty: 'beginner'
  },
  {
    id: 'list_loop',
    title: 'Loop Through List',
    description: 'Loop through all items in a list',
    code: 'colors = ["red", "green", "blue"]\nfor color in colors:\n    print(f"Color: {color}")',
    category: 'lists',
    difficulty: 'beginner'
  },
  {
    id: 'string_basic',
    title: 'Basic String',
    description: 'Work with strings',
    code: 'text = "Hello, World!"\nprint(text.upper())  # Uppercase\nprint(text.lower())  # Lowercase\nprint(len(text))     # Length',
    category: 'strings',
    difficulty: 'beginner'
  },
  {
    id: 'string_format',
    title: 'String Formatting',
    description: 'Format strings with variables',
    code: 'name = "Bob"\nage = 12\nprint(f"{name} is {age} years old")\nprint("{} is {} years old".format(name, age))',
    category: 'strings',
    difficulty: 'intermediate'
  }
];
