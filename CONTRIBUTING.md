# Contributing to vue-with-eds

Thank you for your interest in contributing to the vue-with-eds project! This document provides guidelines and information for contributors.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

### Prerequisites
- Node.js 18.x or 20.x
- npm (comes with Node.js)

### Installation
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/vue-with-eds.git
cd vue-with-eds

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure
```
vue-with-eds/
├── src/
│   ├── components/          # Vue components
│   ├── styles/             # Component-specific CSS
│   ├── App.vue             # Main application component
│   ├── main.js             # Application entry point
│   └── style.css           # Global styles
├── public/                 # Static assets
├── .github/                # GitHub configuration
└── dist/                   # Build output (generated)
```

## Making Changes

### Branch Naming
Use descriptive branch names:
- `feature/add-new-slide-type`
- `fix/slide-panel-responsive-issue`
- `docs/update-installation-guide`
- `refactor/simplify-component-structure`

### Commit Messages
Follow conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(components): add slide filtering functionality
fix(slidePanel): resolve responsive layout issues
docs(readme): update installation instructions
```

## Submitting Changes

1. **Create a Pull Request**
   - Use the provided PR template
   - Fill out all relevant sections
   - Link related issues

2. **PR Requirements**
   - [ ] Code follows project style guidelines
   - [ ] Changes are tested locally
   - [ ] Documentation is updated if needed
   - [ ] No new warnings or errors
   - [ ] Responsive design tested (if applicable)

3. **Review Process**
   - Maintainers will review your PR
   - Address any feedback promptly
   - Keep your branch up to date with main

## Code Style

### JavaScript
- Use ES6+ features and ES modules
- Follow consistent naming conventions:
  - `camelCase` for variables and functions
  - `PascalCase` for components and classes
  - `UPPER_SNAKE_CASE` for constants
- Use meaningful variable and function names
- Add comments for complex logic

### Vue.js
- Use Composition API for new components
- Follow Vue.js style guide
- Use single-file components (.vue)
- Keep components focused and reusable

### CSS
- Use pure CSS (no preprocessors)
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Ensure responsive design
- Optimize for performance

### File Organization
- One component per file
- Co-locate component styles
- Use descriptive file names
- Keep directory structure flat when possible

## Testing

### Manual Testing
- Test in multiple browsers (Chrome, Firefox, Safari)
- Test responsive design on different screen sizes
- Verify Edge Delivery Services integration
- Test with sample data

### Automated Testing
- Add tests for new features
- Ensure existing tests pass
- Run `npm test` before submitting

## Documentation

### Code Documentation
- Add JSDoc comments for functions and components
- Document complex algorithms or business logic
- Keep comments up to date with code changes

### User Documentation
- Update README.md for new features
- Add usage examples
- Update installation instructions if needed
- Document breaking changes

### API Documentation
- Document component props and events
- Provide usage examples
- Document integration points

## Edge Delivery Services Integration

When making changes that affect EDS integration:

1. **Data Structure**
   - Maintain compatibility with `/slides/query-index.json`
   - Document any required data format changes
   - Test with actual EDS data

2. **Build Output**
   - Ensure build output works with EDS
   - Test deployment process
   - Verify asset paths are correct

3. **Performance**
   - Optimize for EDS delivery
   - Minimize bundle size
   - Ensure fast loading times

## Getting Help

- Check existing issues and discussions
- Create a new issue for bugs or feature requests
- Use the appropriate issue template
- Provide detailed information and examples

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation

Thank you for contributing to vue-with-eds!
