import { createApp } from 'vue';

import('./index.vue').then(module => {
  let app = createApp(module.default);
  app.mount('#investify_version');
});