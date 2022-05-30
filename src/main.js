import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "highlight.js/styles/github-dark-dimmed.css";

createApp(App).use(router).mount("#app");
