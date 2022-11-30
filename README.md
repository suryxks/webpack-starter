# Webpack-starter-kit
===================

A starter kit that you can use to create a project  with React, Caching, Code Splitting.

The tool kit provides the following features:

-   Compilation of ES6 into ES5
-   loaders
-   css asset
-   inline asset
-   webpack plugin
-   Code Splitting
-   Caching
-   Webpack dev server
-   Lazy Loading
-   Bundle Analyzer

[](https://github.com/suryxks/webpack-starter#installation)Installation
---------------------------------------------------------------------------------

1.  `git clone https://github.com/suryxks/webpack-starter.git`
2.  `cd Webpack-starter-kit`
3.  Run `npm install`

You can also use the following command to get this template - `degit https://github.com/suryxks/webpack-starter`

[](https://github.com/suryxks/webpack-startert#how-does-the-toolkit-implement-caching)How does the toolkit implement caching?
--------------------------------------------------------------------------------------------------------------------------------------

The toolkit provides caching functionalities which are implemented in the following two ways:

1.  Using `[contenthash]` to cache bundle files
2.  Extracting & caching non-changing third party libraries into vendor bundles

### [](https://github.com/suryxks/webpack-starter#caching-using-contenthash)Caching using `[contenthash]`

-   Webpack provides a way to use [filename substitutions](https://webpack.js.org/guides/caching/#output-filenames) to insert hashes of the file content using `[contenthash]` in the filename to cache files that don't change after a build of your app. This is leveraged in the toolkit to cache bundles by default and this behavior can be changed by updating the [`webpack.common.js`](https://github.com/suryxks/webpack-starter/blob/main/webpack.common.js) file.

### [](https://github.com/suryxks/webpack-starter#extracting--caching-third-party-libraries)Extracting & caching third party libraries

-   By default, the toolkit splits and extracts third party `npm` libraries into `vendor` chunks as these are less likely to change than the source code of your app. This is done using the `cacheGroups` option of the [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) in [`webpack.common.js`](https://github.com/suryxks/webpack-starter/blob/main/webpack.common.js)

[](https://github.comsuryxks/webpack-starter#running-on-development-using-dev-server)Running on development using dev server
---------------------------------------------------------------------------------------------------------------------------------------

-   Run `npm start` to start Webpack dev server.
-   To build and generate files in the development mode, run the following command after local setup: `npm run build-dev`.
-   This generates the build files within `./dist` folder but they will not be minified.

[](https://github.com/suryxks/webpack-starter#for-production)For production
-------------------------------------------------------------------------------------

-   Run `npm run build` to build all the project assets in the `dist` folder.
-   This generates the build files within `./dist` folder and they will be minified.
