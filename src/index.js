// "require" all CSS modules needed here (Webpack figures out what to do with them)
import "./assets/styles/w3.css";	// w3 at the top so we can override with any custom styles
import "./assets/styles/defaults.scss";
import "./assets/styles/main.css";


// "require" all JS modules needed here that do not export any components
// Since the "exported_code.js" module exports it's code
// it needs to be "imported" into any modules that use it
// and not here.
require("./scripts/another_module.js");

import Vue from "vue";
import AppComponent from "./templates/app_component.vue"
new Vue({
  el: '#app',
  components: { app: AppComponent },
  render: h => h(AppComponent)
})
