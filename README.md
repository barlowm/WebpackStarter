# WebpackStarter
## 01 Simple Template

This is the start of an ongoing repository for working with Webpack. It starts with a simple web app with an html template and 2 JS files to get the hang of working with Webpack, webpack-dev-server and the html-webpack-plugin.

Additional features are added onto the project and pushed as separate, labeled branches as time permits. Look at the branch listing in the Repository to identify which order features are added and what the last branch, which contains everything from all the previous branches, is.

Some references:

- <https://github.com/jantimon/html-webpack-plugin>
- <https://github.com/webpack/webpack-dev-server>

The index.js file loads all the required components for the app and Webpack figures out what to do with them.

## 02 Add CSS Branch

Adding simple CSS module to the app. 

The files have been reorganized to separate things out a bit into *assets/styles* and *assets/scripts* and 2 style sheets have been added.

The index.js file has to "require" any assets such as style sheets. Webpack figures out what to do with these as it's bundling the files and generating the runtime modules into the *dist* folder.

Some references:

- https://webpack.js.org/guides/asset-management

Only problem I see so far is that the screen flashes with a white background before the custom styles take effect since they're loaded as part of the JS file which is loaded after the entire page is rendered.

------

***Note:***

Additional features are added onto the project and pushed as separate, labeled branches as time permits. Look at the branch listing in the Repository to identify which order features are added and what the last branch, which contains everything from all the previous branches, is.

