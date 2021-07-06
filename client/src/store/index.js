import { createStore } from 'vuex';
import feed from './feed';

export default createStore({
  modules: {
    feed: feed
  }
});
