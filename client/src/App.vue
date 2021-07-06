<template>
  <public-feed />
</template>

<script>
import '@fortawesome/fontawesome-free/js/all.js';
import PublicFeed from './views/public-feed.vue';

export default {
  name: 'App',
  components: {
    PublicFeed
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
}

#app {
  background-color: #ddd;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
