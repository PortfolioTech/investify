<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const htmlContent = ref('');

    onMounted(async () => {
      const response = await fetch('https://investify.simple-url.com:8085/');
      htmlContent.value = await response.text();
    });

    return { htmlContent };
  },
};
</script>
