# 🎮 CodeQuest Jr. - Learn Python with Games!

A browser-based Python learning game for kids ages 8-14. Write code, solve puzzles, and earn stars while learning programming fundamentals!

![CodeQuest Jr. Demo](https://via.placeholder.com/800x400/667eea/ffffff?text=CodeQuest+Jr.+Demo)

## 🌟 Why CodeQuest Jr. Works for Kids

- **Micro-challenges**: Each level focuses on one programming concept
- **Instant feedback**: See results immediately with our live autograder
- **Visual learning**: Grid worlds and dice animations make abstract concepts concrete
- **Gamified progress**: Stars, badges, and unlockable levels keep kids engaged
- **Safe environment**: All code runs in a sandboxed browser environment

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to start playing!

## 🎯 Learning Path

### Level 1: Say Hello! (Print & Variables)
Learn to use `print()` statements and create variables to store information.

```python
name = "Ava"  # Create a variable
print("Hello, " + name + "!")  # Use print() to display text
```

### Level 2: Roll Until Six (Loops)
Master `while` loops by rolling dice until you get a 6.

```python
def rolls_until_six(roller):
    count = 0
    while True:
        roll = roller()  # Roll the die
        count += 1
        if roll == 6:    # Stop when we get 6
            return count
```

### Level 3: Navigate the Maze (Conditionals)
Use `if` statements to avoid lava and walls while reaching the goal.

### Level 4: Robot Helper (Functions)
Create functions that return lists of moves to guide a robot through obstacles.

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Code Editor**: Monaco Editor (same as VS Code)
- **Python Execution**: Pyodide (Python in the browser)
- **Styling**: CSS-in-JS with kid-friendly animations
- **Storage**: LocalStorage for progress persistence

## 🏗️ Architecture

```
src/
├── components/          # React components
│   ├── CodeEditor.tsx   # Monaco editor wrapper
│   ├── Console.tsx      # Output and test results
│   ├── GridView.tsx     # Visual world representation
│   └── ...
├── engine/              # Python execution engine
│   └── pyodideEngine.ts # Pyodide integration
├── data/                # Level definitions
│   └── levels.ts        # All game levels
└── types/               # TypeScript definitions
```

## 🎮 Game Features

### Live Autograder
Each level includes hidden Python tests that verify:
- ✅ Correctness (does the code work?)
- ⚡ Efficiency (optimal number of moves)
- 🎯 Completeness (handles all test cases)

### Staged Hints System
- **Hint 1**: Gentle nudge in the right direction
- **Hint 2**: More specific guidance
- **Hint 3**: Detailed solution approach

### Progress Tracking
- 🌟 Earn up to 3 stars per level
- 🔓 Unlock new levels by completing previous ones
- 📊 Track hints used and completion time

## 📊 Level Design

Each level follows this structure:

```typescript
interface Level {
  id: string;
  title: string;
  description: string;
  difficulty: number;
  category: 'print' | 'loops' | 'conditionals' | 'functions' | ...;
  starterCode: string;
  instructions: string;
  tests: TestCase[];
  hints: string[];
  world?: GridWorld;      // For movement puzzles
  diceConfig?: DiceConfig; // For probability games
}
```

## 🧪 Adding New Levels

1. **Create the level definition** in `src/data/levels.ts`:

```typescript
{
  id: 'level5',
  title: 'Collect Gems',
  description: 'Learn lists by gathering gems',
  category: 'lists',
  starterCode: `
gems = []  # Create an empty list
# TODO: Add gems to the list
`,
  tests: [
    {
      name: 'Collects all gems',
      input: ['💎', '💎', '💎'],
      expected: 3
    }
  ]
}
```

2. **Add test logic** to `pyodideEngine.ts`
3. **Test thoroughly** with different student solutions

## 🎨 Customization

### Adding New Categories
1. Update the `Level` interface in `types/index.ts`
2. Add test logic in `pyodideEngine.ts`
3. Create corresponding UI components

### Styling Changes
All styles use CSS-in-JS with kid-friendly colors and animations. Key files:
- `src/index.css` - Global styles and animations
- Component files - Component-specific styles

## 📈 Metrics & Analytics

Track these events for insights:
- `run_code` - When students execute code
- `passed_level` - Level completion with star count
- `used_hint` - Hint usage patterns
- `level_start` - Time spent on each level

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pyodide** - For bringing Python to the browser
- **Monaco Editor** - For the excellent code editing experience
- **React** - For the component-based architecture
- **Lucide React** - For the beautiful icons

---

**Built with ❤️ for the next generation of programmers!**

*Perfect for classrooms, coding camps, and curious kids everywhere.*