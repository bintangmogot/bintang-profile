# Contributing to Bintang Profile

Thank you for considering contributing to this project! Here's how you can help.

## Reporting Bugs

If you find a bug, please open an issue with:

1. **Description** — What happened vs. what you expected.
2. **Steps to Reproduce** — How can we replicate the issue?
3. **Environment** — Browser, OS, screen size, Node.js version.
4. **Screenshots** — If it's a visual issue, screenshots are very helpful.

## Suggesting Features

Have an idea? Open an issue with the `enhancement` label and describe:

- What the feature would do
- Why it would be useful
- Any reference designs or examples

## Development Setup

```bash
# Clone your fork
git clone https://github.com/<your-username>/bintang-profile.git
cd bintang-profile

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Pull Request Process

1. **Fork** the repository and create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and ensure:
   - The dev server runs without errors (`npm run dev`)
   - The production build succeeds (`npm run build`)
   - Your code follows the existing code style

3. **Commit** with clear, descriptive messages:
   ```bash
   git commit -m "feat: add dark mode toggle to navbar"
   ```

4. **Push** to your fork and open a Pull Request against `main`.

## Code Style

- **Vue Components** — Use `<script setup>` Composition API syntax
- **CSS** — Use Tailwind CSS utility classes; custom CSS in `<style scoped>` when needed
- **Naming** — PascalCase for components, camelCase for variables/functions
- **Files** — One component per file, descriptive file names

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
