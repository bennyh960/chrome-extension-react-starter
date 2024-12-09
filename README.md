# React TS Chrome Extension Boilerplate

## Getting Started

To get started with this boilerplate, simply run the following command in your terminal:

```bash
npx @tozilu960/react-ts-chrome-extension <my-app-name>
```

Replace `my-app-name` with the name of your Chrome extension project.

This will create a new directory with the basic structure for a React TS Chrome extension, including a `tsconfig.json` file, a `package.json` file, and a `src` directory with some basic files to get you started.

## Project Structure

```bash
my-app/
|--- src/
|    |--- background/
|    |--- contentScript/
|    |--- components/
|    |--- containers/
|    |--- static/
|    |--- index.tsx
|    |--- options.tsx
|--- tsconfig.json
|--- package.json
|--- webpack.common.js
|--- webpack.dev.js
|--- webpack.prod.js
```

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Important Initial Steps

1. Update `package.json`, important fields include `author`, `version`, `name` and `description`
2. Update `manifest.json`, important fields include `version`, `name` and `description`
3. Update `webpack.common.js`, the title in the `getHtmlPlugins` function should be your extension name

## Production Build

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!

## Important Default Boilerplate Notes

- Folders get flattened, static references to images from HTML do not need to be relative (i.e. `icon.png` instead of `../static/icon.png`)
- Importing local ts/tsx/css files should be relative, since Webpack will build a dependancy graph using these paths
- Update the manifest file as per usual for chrome related permissions, references to files in here should also be flattened and not be relative

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Changelog

See the [CHANGELOG.md](CHANGELOG.md) file for more information.
