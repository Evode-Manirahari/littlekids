import { ConceptGlossary } from '../types';

export const conceptGlossary: ConceptGlossary[] = [
  {
    term: 'Variable',
    definition: 'A container that stores a value, like a box with a label',
    example: 'name = "Alice"  # name is a variable storing "Alice"',
    category: 'basics'
  },
  {
    term: 'String',
    definition: 'Text data enclosed in quotes',
    example: '"Hello, World!" is a string',
    category: 'data_types'
  },
  {
    term: 'Integer',
    definition: 'Whole numbers (positive, negative, or zero)',
    example: '5, -10, 0 are all integers',
    category: 'data_types'
  },
  {
    term: 'Float',
    definition: 'Numbers with decimal points',
    example: '3.14, 2.5, -0.5 are all floats',
    category: 'data_types'
  },
  {
    term: 'Boolean',
    definition: 'True or False values',
    example: 'is_student = True, is_adult = False',
    category: 'data_types'
  },
  {
    term: 'List',
    definition: 'An ordered collection of items',
    example: 'fruits = ["apple", "banana", "orange"]',
    category: 'data_structures'
  },
  {
    term: 'Dictionary',
    definition: 'A collection of key-value pairs',
    example: 'person = {"name": "Alice", "age": 12}',
    category: 'data_structures'
  },
  {
    term: 'Function',
    definition: 'A reusable block of code that performs a specific task',
    example: 'def greet(name): return f"Hello, {name}!"',
    category: 'functions'
  },
  {
    term: 'Parameter',
    definition: 'Input values that a function receives',
    example: 'In def add(a, b), a and b are parameters',
    category: 'functions'
  },
  {
    term: 'Return',
    definition: 'What a function gives back after running',
    example: 'return a + b gives back the sum of a and b',
    category: 'functions'
  },
  {
    term: 'Loop',
    definition: 'Code that repeats multiple times',
    example: 'for i in range(5): print(i) repeats 5 times',
    category: 'control_flow'
  },
  {
    term: 'Conditional',
    definition: 'Code that runs only if a condition is true',
    example: 'if age >= 18: print("Adult")',
    category: 'control_flow'
  },
  {
    term: 'Index',
    definition: 'Position of an item in a list (starts at 0)',
    example: 'In ["a", "b", "c"], "a" is at index 0',
    category: 'data_structures'
  },
  {
    term: 'Method',
    definition: 'A function that belongs to an object',
    example: 'text.upper() is a method of the string text',
    category: 'functions'
  },
  {
    term: 'Algorithm',
    definition: 'Step-by-step instructions to solve a problem',
    example: 'Recipe for making cookies is like an algorithm',
    category: 'problem_solving'
  },
  {
    term: 'Debug',
    definition: 'Find and fix errors in your code',
    example: 'When code doesn\'t work, you debug to find the problem',
    category: 'problem_solving'
  }
];
