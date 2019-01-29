# WebpackStarter
##Master Branch

A simple web app with an html template and 2 JS files to get the hang of working with Webpack, webpack-dev-server and the html-webpack-plugin

- 
  https://github.com/jantimon/html-webpack-plugin
- https://github.com/webpack/webpack-dev-server

The index.js file loads all the required components for the app and Webpack figures out what to do with them.

## Add_CSS Branch

Adding simple CSS module to the app 

- https://webpack.js.org/guides/asset-management


The index.js file even has to "require" any assets such as style sheets. Webpack figures out what to do with these as well.

Only problem I see so far is that the screen flashes with a white background before the custom styles take effect since they're loaded as part of the JS file which is loaded after the entire page is rendered.

## Fix FOUC (Flash of Unstyled Content)

- https://blog.harveydelaney.com/fixing-fouc-in-your-webpack-build/
- https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1

## Add_SASS Branch

Adding simple SASS/SCSS functionality to the build.

See:

- https://webpack.js.org/plugins/mini-css-extract-plugin/

for how to configure webpack.config file to compile SCSS and merge into CSS file.

## Why Import and not Require

It's all about reducing the size of the JS Bundle via *tree shaking*

- https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0

So use import and make sure to *module.export* appropriately in your source modules



