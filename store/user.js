export const state = () => ({
  user: {
    data: [],
  },
});

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
};

export const actions = {
  selectUser({ commit }) {
    this.axios.get("https://reqres.in/api/users?page=2").then((data) => {
      commit("setUser", data.data);
    });
  },
};
