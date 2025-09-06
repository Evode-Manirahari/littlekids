import { ErrorTranslation } from '../types';

export const errorTranslations: ErrorTranslation[] = [
  {
    errorType: 'SyntaxError',
    kidFriendlyMessage: 'Oops! There\'s a grammar mistake in your code!',
    suggestion: 'Check for missing colons (:), parentheses (), or quotes ("")',
    example: 'if age >= 18  # Missing colon! Should be: if age >= 18:'
  },
  {
    errorType: 'NameError',
    kidFriendlyMessage: 'Python doesn\'t know what this word means!',
    suggestion: 'Make sure you spelled the variable name correctly',
    example: 'print(nam)  # Should be: print(name)'
  },
  {
    errorType: 'TypeError',
    kidFriendlyMessage: 'You\'re trying to mix things that don\'t go together!',
    suggestion: 'Check if you\'re using the right type of data',
    example: 'print("Hello" + 5)  # Can\'t add text and numbers!'
  },
  {
    errorType: 'IndentationError',
    kidFriendlyMessage: 'Your code isn\'t lined up properly!',
    suggestion: 'Make sure your code is indented correctly (use spaces or tabs)',
    example: 'if True:\nprint("This needs to be indented!")'
  },
  {
    errorType: 'IndexError',
    kidFriendlyMessage: 'You\'re trying to reach into an empty box!',
    suggestion: 'Check if the list has items before trying to access them',
    example: 'fruits = []\nprint(fruits[0])  # Can\'t get first item of empty list!'
  },
  {
    errorType: 'KeyError',
    kidFriendlyMessage: 'You\'re looking for a key that doesn\'t exist!',
    suggestion: 'Check if the key exists in your dictionary',
    example: 'person = {"name": "Alice"}\nprint(person["age"])  # "age" key doesn\'t exist!'
  },
  {
    errorType: 'ValueError',
    kidFriendlyMessage: 'You gave the right type but wrong value!',
    suggestion: 'Check if the value makes sense for what you\'re trying to do',
    example: 'int("hello")  # Can\'t convert text to number!'
  },
  {
    errorType: 'AttributeError',
    kidFriendlyMessage: 'You\'re trying to use a tool that doesn\'t exist!',
    suggestion: 'Check if the method or property exists for that object',
    example: 'text = "hello"\ntext.uppercase()  # Should be: text.upper()'
  },
  {
    errorType: 'ZeroDivisionError',
    kidFriendlyMessage: 'You can\'t divide by zero!',
    suggestion: 'Make sure your divisor is not zero',
    example: 'print(10 / 0)  # Can\'t divide by zero!'
  },
  {
    errorType: 'FileNotFoundError',
    kidFriendlyMessage: 'Python can\'t find the file you\'re looking for!',
    suggestion: 'Check if the file exists and the path is correct',
    example: 'open("nonexistent.txt")  # File doesn\'t exist!'
  }
];
