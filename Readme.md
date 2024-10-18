
# Home Page Development for Executable Selection Task

This project involves building a home page for the tech lead selection task using HTML, CSS, and JavaScript.

## Prerequisites

Before you begin, ensure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox, Safari)
- A text editor (e.g., Visual Studio Code, Sublime Text)

## Figma Design

The design for the home page can be found at the following link:

[View Figma Design](https://www.figma.com/design/qhicyGDn5kxlY1tWaGF0aM/Website-design-csi-task?node-id=0-1&t=9aupaqmQEJwBnKTo-1)

## Project Structure

The project structure is as follows:

```
.
├── index.html
├── style.css
└── scripts
    └── script.js
```

## Development Instructions

1. **Clone the repository or navigate to your project directory:**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Open the project in your web browser:**

   You can open the `index.html` file directly in your web browser to view the home page.

3. **Modify the HTML/CSS/JS files as needed:**

   - Edit `index.html` for HTML structure.
   - Update `style.css` for styling.
   - Use `script.js` for JavaScript functionality.

## TypeScript Compilation Instructions

If your project includes TypeScript, follow these steps to compile your TypeScript files:

### Compiling TypeScript Code

To compile your TypeScript files, follow these steps:

1. **Compile a specific TypeScript file:**

   You can compile a specific TypeScript file (e.g., `script.ts`) and output the compiled JavaScript files to the `dist` directory:

   ```bash
   npx tsc script.ts --outDir dist --lib es2017,dom
   ```

2. **Compile all TypeScript files in the project:**

   If you want to compile all TypeScript files in the project, simply run:

   ```bash
   npx tsc
   ```

This will compile all `.ts` files based on your `tsconfig.json` configuration (if available) and generate the corresponding `.js` files.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

