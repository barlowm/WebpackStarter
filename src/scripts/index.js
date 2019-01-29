// "require" all CSS modules needed here (Webpack figures out what to do with them)
// require("../assets/styles/w3.css");	// w3 at the top so we can override with any custom styles
// require("../assets/styles/defaults.scss");
// require("../assets/styles/main.css");

import "../assets/styles/w3.css";	// w3 at the top so we can override with any custom styles
import "../assets/styles/defaults.scss";
import "../assets/styles/main.css";


// const vue = require ("Vue");
// const AppComponent = require("../templates/AppComponent.vue");

// new Vue({
//    render: h => h(AppComponent)
//  }).$mount('#app')


// "require" all JS modules needed here
require("./another_module.js");
// imnport "./another_module.js";

// Here's any code we need
// console.log("Hello World");
