<template>
  <div class="feed-controls">
    <div class="search">
      Search tags:
      <input v-model="search">
      <button @click="handleSearch">
        Search
      </button>
    </div>

    <div class="toggle">
      <button @click="handleLayoutChange('grid')">
        <i class="icon fas fa-th" />
      </button>

      <button @click="handleLayoutChange('list')">
        <i class="icon fas fa-list" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedControls',
  data: () => ({
    layout: 'list',
    search: ''
  }),
  methods: {
    handleLayoutChange(layout) {
      this.$store.dispatch('feed/updateLayout', layout);
    },
    handleSearch() {
      this.$store.dispatch('feed/search', this.search);
    }
  }
}
</script>

<style lang="scss" scoped>
.feed-controls {
  display: flex;

  .search {
    flex-grow: 1;
  }
}
</style>
