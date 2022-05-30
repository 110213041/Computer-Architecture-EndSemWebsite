import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
