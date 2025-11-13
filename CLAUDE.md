# CLAUDE.md - AI Assistant Guide

## Repository Overview

**exercisesMultiLanguages** is a multi-language programming exercise collection that implements identical algorithms across 4 programming languages: Java, Python, JavaScript, and TypeScript. The repository serves as a comparative programming resource for learning how different languages approach common algorithmic problems.

**Purpose:**
- Comparative programming study across multiple languages
- Algorithm implementation practice (Set-based, Array-based, Bitmask techniques)
- Paradigm comparison (Functional vs. Imperative programming)
- Educational resource for multi-language developers

## Repository Structure

```
/home/user/exercisesMultiLanguages/
├── .git/                               # Git version control
├── .gitignore                          # Comprehensive ignore patterns (120 lines)
├── README.md                           # Minimal project description
├── CLAUDE.md                           # This file - AI assistant guide
└── src/                                # Source code directory
    ├── UtilityToolkitJava.java         # Java implementation (190 lines)
    ├── UtilityToolkitPython.py         # Python implementation (114 lines)
    ├── UtilityToolkitJavascript.js     # JavaScript implementation (144 lines)
    └── UtilityToolkitTypescript.ts     # TypeScript implementation (141 lines)
```

**Key Statistics:**
- **Total source files:** 4
- **Total lines of code:** ~589 lines
- **Languages:** Java, Python, JavaScript, TypeScript
- **Organization:** Flat structure under `src/` directory

## Programming Languages & Conventions

### Language-Specific Naming Conventions

| Language   | Class/Module Names | Function Names | File Extension |
|------------|-------------------|----------------|----------------|
| Java       | PascalCase        | camelCase      | .java          |
| Python     | N/A (module)      | snake_case     | .py            |
| JavaScript | N/A (module)      | camelCase      | .js            |
| TypeScript | N/A (module)      | camelCase      | .ts            |

### File Naming Pattern
All utility files follow the pattern: `UtilityToolkit[Language].[ext]`
- `UtilityToolkitJava.java`
- `UtilityToolkitPython.py`
- `UtilityToolkitJavascript.js`
- `UtilityToolkitTypescript.ts`

## Code Organization Patterns

### Algorithm Categories
Each file implements exercises in two main categories:

1. **Isogram Detection** (6 variants per language)
   - Set-based approach (traditional)
   - Array-based approach (traditional)
   - Bitmask-based approach (traditional)
   - Set-based functional approach
   - Array-based functional approach
   - Bitmask-based functional approach

2. **Binary Conversion** (4 variants per language)
   - Powers-of-2 approach (traditional)
   - Bitwise shift approach (traditional)
   - Powers-of-2 functional approach
   - Bitwise shift functional approach

### Function Organization Within Files
```
1. Isogram Detection Functions (6 functions)
   - Traditional implementations (Set, Array, Bitmask)
   - Functional implementations (Set, Array, Bitmask)

2. Binary Conversion Functions (4 functions)
   - Traditional implementations (Powers-of-2, Bitwise)
   - Functional implementations (Powers-of-2, Bitwise)

3. Test/Demo Function (1 function)
   - runTests() / run_tests() - Executes all algorithms with test data
```

### Implementation Patterns

**Dual Paradigm Approach:**
- Each problem is solved using both **imperative** and **functional** programming styles
- Traditional methods use loops, conditionals, and mutable state
- Functional methods use higher-order functions, immutability, and declarative style

**Language-Specific Idioms:**
- **Java:** Uses streams, AtomicInteger, HashSet, OOP class structure
- **Python:** Uses list comprehensions, reduce, set operations, functional tools
- **JavaScript:** Uses arrow functions, array methods (reduce, map), modern ES6+ syntax
- **TypeScript:** Adds type annotations while maintaining JavaScript patterns

## Testing & Validation

### Testing Approach
**No external test framework** - Each file contains built-in test functions:
- Java: `runTests()` method
- Python: `run_tests()` function
- JavaScript: `runTests()` function
- TypeScript: `runTests()` function

### Standard Test Data
All implementations use identical test cases for consistency:

**Isogram Tests:**
```
"Machine" (expected: true)
"Programming" (expected: false)
"Isogram" (expected: true)
"Hello" (expected: false)
"Subdermatoglyphic" (expected: true)
```

**Binary Conversion Tests:**
```
0 → "0"
1 → "1"
12 → "1100"
19 → "10011"
33 → "100001"
```

### Running Tests

```bash
# Java
javac src/UtilityToolkitJava.java
java -cp src UtilityToolkitJava

# Python
python src/UtilityToolkitPython.py

# JavaScript
node src/UtilityToolkitJavascript.js

# TypeScript
ts-node src/UtilityToolkitTypescript.ts
# OR compile first: tsc src/UtilityToolkitTypescript.ts && node src/UtilityToolkitTypescript.js
```

## Development Workflows

### Adding New Exercises

When adding new exercises to the repository, follow these guidelines:

1. **Implement in all 4 languages** for consistency
2. **Use consistent function naming** across languages (adjusted for language conventions)
3. **Provide multiple approaches** (at minimum: traditional + functional)
4. **Add test cases** to the `runTests()` function in each file
5. **Use inline comments** to label algorithm types (e.g., `// 1. Isogram (HashSet)`)
6. **Maintain file organization**: Group related functions together

### Code Review Checklist

When reviewing or modifying code:
- [ ] All 4 language implementations are updated consistently
- [ ] Function names follow language-specific conventions
- [ ] Both traditional and functional approaches are provided
- [ ] Test cases are added to all `runTests()` functions
- [ ] Test data is identical across all languages
- [ ] Code is properly formatted according to language standards
- [ ] Inline comments describe the approach used

### Git Workflow

**Branch Naming:**
- Feature branches should follow: `claude/claude-md-[session-id]`
- Always push to the designated feature branch

**Commit Messages:**
- Use descriptive messages that explain what was added/changed
- Example: "Add palindrome detection exercises across all languages"
- Example: "Update isogram functions to handle Unicode characters"

## Build Systems & Tooling

### Supported Build Systems (based on .gitignore)

The repository is configured to support multiple build systems:

**Java:**
- Maven (`pom.xml`, `.mvn/`)
- Gradle (`.gradle/`)

**JavaScript/TypeScript:**
- npm (`node_modules/`, `package.json`)
- Compilation artifacts (`dist/`, `out-tsc/`)

**Other Languages (potential future additions):**
- C#: MSBuild (`.csproj`, `.sdf`, `.suo`)
- C++: Various build systems (`build/`, `bin/`)
- Rust: Cargo (`target/`)

### IDE Support

Configuration files are ignored for:
- IntelliJ IDEA (`.idea/`, `*.iml`)
- Visual Studio Code (`.vscode/`)
- Visual Studio (`.vs/`)

## Key Conventions for AI Assistants

### When Working with This Repository

1. **Maintain Cross-Language Consistency**
   - If you modify one language implementation, update all others
   - Ensure algorithm logic remains equivalent across languages
   - Keep test data synchronized

2. **Respect Naming Conventions**
   - Java: `camelCase` methods, `PascalCase` class
   - Python: `snake_case` functions
   - JavaScript/TypeScript: `camelCase` functions
   - Follow existing patterns in each file

3. **Preserve Dual Paradigm Approach**
   - Always provide both traditional and functional implementations
   - Traditional: Uses loops, conditionals, mutable state
   - Functional: Uses higher-order functions, immutability

4. **Testing Requirements**
   - Add test cases to `runTests()` in all files
   - Use identical test data across all languages
   - Verify all tests pass before committing

5. **Documentation Style**
   - Use inline comments to label algorithm types
   - Keep README.md minimal (this is an exercise collection)
   - Document complex algorithms with brief explanatory comments
   - Avoid over-documenting simple, self-explanatory code

6. **File Organization**
   - Keep all source files in `src/` directory
   - Group related functions together within files
   - Place test functions at the end of each file

7. **Code Quality Standards**
   - Follow language-specific best practices
   - Use appropriate data structures for each approach
   - Optimize for readability over micro-optimizations
   - Handle edge cases (empty strings, zero, negative numbers)

### Common Tasks

**Adding a new exercise:**
```bash
# 1. Implement in all 4 languages (src/UtilityToolkit*.*)
# 2. Add tests to each runTests() function
# 3. Test each implementation
# 4. Commit with descriptive message
# 5. Push to feature branch
```

**Refactoring an existing exercise:**
```bash
# 1. Identify the exercise to refactor
# 2. Update implementation in all 4 languages
# 3. Ensure tests still pass in all languages
# 4. Verify behavior is equivalent across languages
# 5. Commit and push
```

**Fixing a bug:**
```bash
# 1. Reproduce the bug in all affected languages
# 2. Fix the bug in all 4 implementations
# 3. Add test case to prevent regression
# 4. Verify fix works in all languages
# 5. Commit with clear bug description
```

## Language-Specific Implementation Details

### Java (UtilityToolkitJava.java)

**Key Features:**
- OOP class structure with static methods
- Java Streams API for functional implementations
- HashSet for efficient set operations
- AtomicInteger for functional accumulation
- Character.toLowerCase() for case normalization

**Example Pattern:**
```java
public class UtilityToolkitJava {
    // Traditional approach
    public static boolean isIsogramSet(String str) { ... }

    // Functional approach
    public static boolean isIsogramSetFunctional(String str) { ... }

    public static void runTests() { ... }
}
```

### Python (UtilityToolkitPython.py)

**Key Features:**
- Module-level functions (no class wrapper)
- List comprehensions and set comprehensions
- functools.reduce for functional implementations
- Pythonic idioms (len(set()), enumerate())
- Built-in bin() for reference comparison

**Example Pattern:**
```python
# Traditional approach
def is_isogram_set(s):
    ...

# Functional approach
def is_isogram_set_functional(s):
    ...

def run_tests():
    ...
```

### JavaScript (UtilityToolkitJavascript.js)

**Key Features:**
- Module-level functions
- Arrow functions for concise syntax
- Array methods (reduce, split, filter)
- Set for efficient lookups
- try-catch for error handling in tests
- Modern ES6+ syntax

**Example Pattern:**
```javascript
// Traditional approach
function isIsogramSet(str) { ... }

// Functional approach
const isIsogramSetFunctional = (str) => { ... }

function runTests() { ... }
```

### TypeScript (UtilityToolkitTypescript.ts)

**Key Features:**
- Type annotations for parameters and return values
- Strict typing with boolean, string, number types
- Same patterns as JavaScript with added type safety
- Arrow functions with explicit types
- Type inference where appropriate

**Example Pattern:**
```typescript
// Traditional approach
function isIsogramSet(str: string): boolean { ... }

// Functional approach
const isIsogramSetFunctional = (str: string): boolean => { ... }

function runTests(): void { ... }
```

## Future Considerations

### Potential Enhancements
- Add more programming languages (Rust, Go, C++, C#)
- Implement additional algorithm categories (sorting, searching, recursion)
- Add performance benchmarking across languages
- Create separate test suites using language-specific frameworks
- Add continuous integration (CI) for automated testing
- Add build configuration files (package.json, pom.xml, etc.)

### Scaling Guidelines
If adding more exercises:
- Consider splitting into multiple files by algorithm category
- Create subdirectories per language if file count grows significantly
- Add a proper test framework when exercises exceed 20-30 per file
- Document performance characteristics for complex algorithms

## Quick Reference

### File Locations
- Source files: `src/UtilityToolkit[Language].[ext]`
- Configuration: `.gitignore`
- Documentation: `README.md`, `CLAUDE.md`

### Running All Tests
```bash
# Quick test all implementations
javac src/UtilityToolkitJava.java && java -cp src UtilityToolkitJava
python src/UtilityToolkitPython.py
node src/UtilityToolkitJavascript.js
ts-node src/UtilityToolkitTypescript.ts
```

### Key Paths
- Repository root: `/home/user/exercisesMultiLanguages/`
- Source directory: `/home/user/exercisesMultiLanguages/src/`

---

**Last Updated:** 2025-11-13
**Repository Status:** Active development on feature branches
**Primary Branch:** `main` (for stable releases)
**Development Branch Pattern:** `claude/claude-md-*`
