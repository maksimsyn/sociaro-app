export const state = () => ({
  isHeaderWhite: false,
});

export const mutations = {
  setWhiteHeader(state, payload) {
    state.isHeaderWhite = payload;
  },
};
