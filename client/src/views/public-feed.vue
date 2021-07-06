<template>
  <main class="public-feed">
    <h1>Public Feed</h1>
    <FeedControls />
    <FeedList />
  </main>
</template>

<script>
import FeedList from '../components/feed-list';
import FeedControls from '../components/feed-controls';

export default {
  name: 'PublicFeed',
  components: {
    FeedControls,
    FeedList
  },
  mounted() {
    this.$store.dispatch('feed/search');
  }
}
</script>

<style lang="scss" scoped>
main.public-feed {
  background-color: #fff;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  max-width: 1000px;
  overflow-y: scroll;
  padding: 20px;
  width: 80%;

  h1 {
    text-align: center;
  }
}
</style>
