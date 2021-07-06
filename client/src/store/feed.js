import { searchApi } from '../api';

export default {
  namespaced: true,

  state: {
    data: [],
    layout: 'grid'
  },

  mutations: {
    UPDATE_LAYOUT(state, layout) {
      state.layout = layout;
    },
    UPDATE_FEED(state, data) {
      state.data = data;
    }
  },

  actions: {
    search({ commit }, query) {
      const payload = {
        params: {
          search: query || ''
        }
      };

      searchApi(payload)
        .then(response => {
          commit('UPDATE_FEED', response.data)
        });
    },
    updateLayout({ commit }, layout) {
      commit('UPDATE_LAYOUT', layout)
    }
  },

  getters: {}
};
