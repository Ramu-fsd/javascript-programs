# JavaScript Programs

A curated collection of practical JavaScript programs covering modern JavaScript, functional programming, asynchronous workflows, browser APIs, data structures, algorithms, and design patterns. This repository is part of my JavaScript learning and full-stack engineering portfolio.

## Project details

- **Author:** Ramu Boya
- **Language:** JavaScript (ES modules)
- **Focus:** Modern JavaScript, language internals, asynchronous programming, browser APIs, algorithms, and reusable design patterns
- **Difficulty:** Beginner to Advanced
- **Runtime:** Node.js 20+ and modern browsers

## Features

- Practical examples of array, string, and object manipulation.
- Advanced JavaScript concepts such as closures, currying, memoization, debouncing, and throttling.
- Promise utilities, retry handling, and sequential versus parallel execution.
- Browser examples for event delegation, LocalStorage CRUD, and infinite scrolling.
- Implementations of common data structures, algorithms, caching, and design patterns.

## Tech stack

- JavaScript (ES2022+)
- Node.js 20+
- ES modules
- Browser APIs (DOM, LocalStorage, Intersection Observer)
- Node.js built-in test runner

## Getting started

### Prerequisites

- Node.js 20 or later
- npm

Check your versions:

```bash
node -v
npm -v
```

### Clone the repository

```bash
git clone https://github.com/Ramu-fsd/javascript-programs.git
cd javascript-programs
```

### Run a program

Most programs are standalone ES modules and can be run directly:

```bash
node 01-array-string-programs/01-array-manipulation.js
node 03-advanced-javascript/01-closures.js
node 04-asynchronous-javascript/01-promise-implementation.js
```

Browser examples are located in `05-dom-browser-apis/`. Open their HTML files in a modern browser.

### Run tests

```bash
npm test
```

## Repository structure

```text
javascript-programs/
├── 01-array-string-programs/
├── 02-objects-functional-programming/
├── 03-advanced-javascript/
├── 04-asynchronous-javascript/
├── 05-dom-browser-apis/
├── 06-data-structures-algorithms/
├── 07-design-patterns/
├── tests/
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## Learning outcomes

- Write clean, modern JavaScript using appropriate language features.
- Understand closures, higher-order functions, the event loop, and Promise behavior.
- Build resilient asynchronous workflows and browser interactions.
- Implement common data structures, algorithms, and design patterns.
- Recognize practical trade-offs such as time complexity and sequential versus parallel execution.

## Notes

- Programs are intended for learning, practice, and portfolio demonstration.
- Node.js programs use ES module syntax and can be run independently.
- DOM and browser API examples require a browser environment; they are not intended to run directly in Node.js.
- Examples use in-memory or demo data unless explicitly stated otherwise.
- Do not commit `node_modules/`, build output, secrets, or real environment credentials.

## License

MIT License. See [LICENSE](./LICENSE).
