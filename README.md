# vue-with-eds

This project is a Vue.js-based slide builder application, to be used in an Edge Delivery Services block implementation.

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

## Contact

For more information about Edge Delivery Services or Vue.js integration, contact:
**Digital Domain Technologies Ltd** - <info@digitaldomaintechnologies.com>
