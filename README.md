# vue-with-eds

[![CI/CD Pipeline](https://github.com/ddttom/vue-with-eds/actions/workflows/ci.yml/badge.svg)](https://github.com/ddttom/vue-with-eds/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ddttom/vue-with-eds/actions/workflows/codeql.yml/badge.svg)](https://github.com/ddttom/vue-with-eds/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.0-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

> A Vue.js-based slide builder application designed for Adobe Edge Delivery Services block implementation.

📖 **[Documentation](CONTRIBUTING.md)** | 🐛 **[Report Bug](https://github.com/ddttom/vue-with-eds/issues/new?template=bug_report.md)** | 💡 **[Request Feature](https://github.com/ddttom/vue-with-eds/issues/new?template=feature_request.md)**

## Project Overview

The vue-with-eds project allows users to view and interact with a collection of slides. Each slide displays an image, title, description, and supporting text. Users can click on a slide to view more detailed information in a panel.

## Author

**Tom Cranstoun**

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Integration with Edge Delivery Services

This Vue.js application is designed to work with Adobe Edge Delivery Services as the data source. The application fetches slide data from `/slides/query-index.json` and displays it in an interactive format.

### Deployment to Edge Delivery Services

1. Build the production version: `npm run build`
2. Copy the contents of the `dist` folder to your Edge Delivery Services repository
3. Rename `index.html` to `slides.html`
4. Commit and push to deploy

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Slides**: Click on slides to view detailed content
- **Dynamic Loading**: Fetches slide content and images dynamically
- **Modal Panels**: Full-screen panels for detailed slide content
- **Edge Delivery Integration**: Seamless integration with Adobe Edge Delivery Services

## Architecture

The application uses Vue.js 3 with the Composition API and consists of three main components:

- **SlideBuilder**: Main container component
- **SlideItem**: Individual slide display component
- **SlidePanel**: Modal panel for detailed slide content

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Security

If you discover a security vulnerability, please see our [Security Policy](SECURITY.md) for reporting instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vue.js](https://vuejs.org/) and [Vite](https://vitejs.dev/)
- Designed for [Adobe Edge Delivery Services](https://www.aem.live/)
- Follows modern web development best practices

## Contact

For more information about Edge Delivery Services or Vue.js integration, contact:
**Digital Domain Technologies Ltd** - <info@digitaldomaintechnologies.com>

---

<div align="center">
  <strong>⭐ Star this repository if you find it helpful!</strong>
</div>
