<template>
  <ul
    class="feed-list"
    :class="$store.state.feed.layout"
  >
    <li
      v-for="(source, i) in $store.state.feed.data"
      :key="i"
    >
      <div class="frame">
        <img :src="source.media.m">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FeedList'
}
</script>

<style lang="scss" scoped>
ul.feed-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;

  &.list {
    flex-direction: column;
    align-items: center;
  }

  img {
    bottom: 0;
    left: 0;
    margin: auto;
    max-height: 95%;
    max-width: 95%;
    position: absolute;
    right: 0;
    top: 0;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 200px;
    width: 200px;
  }
  
  .frame {
    border: 1px solid #ddd;
    height: 95%;
    position: relative;
    width: 95%;
  }
}
</style>
