import axios from 'axios'
import {LocalStorage} from "quasar";

export default {
  namespaced: true,
  state: {
    logged: false,
    // domain: 'https://intipos.pe',
    // subdomain: LocalStorage.getItem("subdomain"),
    user: LocalStorage.getItem("user"),
    // company: LocalStorage.getItem("company"),
    // establishments: LocalStorage.getItem("establishments"),
    // establishment: LocalStorage.getItem("establishment"),
    // establishment_configuration: LocalStorage.getItem("establishment_configuration"),
    // warehouses: LocalStorage.getItem("warehouses"),
    // warehouse: LocalStorage.getItem("warehouse"),
    token: LocalStorage.getItem("token"),
    menu: LocalStorage.getItem("menu"),
    locations:  LocalStorage.getItem("locations"),
  },
  mutations: {
    // setSubdomain(state, data) {
    //   if(!_.isNull(data)) {
    //     //if(process.env.PROD) {
    //     data = `https://${data}`;
    //     // }
    //     // if(process.env.DEV) {
    //     //   data = `http://${data}:8084`;
    //     // }
    //   }
    //   state.subdomain = data;
    //   LocalStorage.set("subdomain", state.subdomain);
    // },
    SET_TOKEN(state, token) {
      state.token = token;
      LocalStorage.set("token", token);
    },
    SET_LOGGED(state, logged) {
      state.logged = logged
    },
    setUser(state, data) {
      state.user = data;
      LocalStorage.set("user", data);
    },
    // setCompany(state, data) {
    //   state.company = data;
    //   LocalStorage.set("company", data);
    // },
    setMenu(state, data) {
      state.menu = data;
      LocalStorage.set("menu", data);
    },
    setLocation(state, data) {
      state.locations = data;
      LocalStorage.set("locations", data);
    },
  },
  actions: {
    async token_login ({ dispatch, commit }, credentials) {
      try {
        const { data } = await axios.post('/api/auth/login', credentials);
        commit('SET_TOKEN', data);
        await dispatch('me');
      } catch (e) {
        commit('SET_LOGGED', false);
        commit('SET_TOKEN', null)
      }
    },
    async token_logout ({ commit }) {
      await axios.post('/api/auth/logout');
      commit('SET_TOKEN', null);
      commit('SET_LOGGED', false);
      commit('setUser', null);
      commit('setLocation', null);
      // commit('setCompany', null);
     // commit('setMenu', null);
      // commit('setSubdomain', null);
    },
    async me ({ commit }) {
      try {
        await axios.get('/api/auth/data')
          .then(res => {
            commit('SET_LOGGED', true);
            commit('setUser', res.data.user);
            // commit('setCompany', res.data.company);
            //commit('setMenu', res.data.menu);
          })
      } catch (e) {
        commit('SET_LOGGED', false);
        commit('setUser', null);
        // commit('setCompany', null);
        // commit('setEstablishments', []);
        // commit('setEstablishment', null);
        commit('setMenu', null);
        // commit('setSubdomain', null);
      }
    },
  }
}
