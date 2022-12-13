<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title class="flex">
          <img src="images/logo.png" class="logo"/>
        </q-toolbar-title>
        <q-btn flat round icon="far fa-user">
          <q-menu transition-show="jump-down" transition-hide="jump-up" auto-close>
            <q-list dense style="min-width: 100px">
<!--              <q-item class="q-my-xs">-->
<!--                <q-item-section top avatar class="q-pa-none items-center justify-center">-->
<!--                  <q-avatar>-->
<!--                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
<!--                  </q-avatar>-->
<!--                </q-item-section>-->
<!--              </q-item>-->
              <q-item v-if="user">
                <q-item-section class="text-weight-medium">{{ user.name }}</q-item-section>
              </q-item>
              <q-separator/>
<!--              <q-item clickable to="/profile">-->
<!--                <q-item-section>Mi pérfil</q-item-section>-->
<!--              </q-item>-->
<!--              <q-separator/>-->
              <q-item clickable @click.prevent="logout">
                <q-item-section>Salir</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="240"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-9">
      <q-list>
        <q-item-label
          header
          class="text-white" style="height: 74px">

        </q-item-label>
        <EssentialLink
          v-for="link in menu"
          :key="link.title"
          v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {mapMutations, mapState} from 'vuex';
import EssentialLink from 'components/EssentialLink.vue'

// const linksData = [
//   {
//     title: 'Inicio',
//     icon: 'fas fa-home',
//     link: '/dashboard'
//   },
//   {
//     title: 'Contactos',
//     icon: 'far fa-address-book',
//     link: '/contacts'
//   },
//   {
//     title: 'Usuarios',
//     icon: 'far fa-user',
//     link: '/users'
//   },
//   {
//     title: 'Notificaciones',
//     icon: 'far fa-bell',
//     link: '/notifications'
//   },
//   {
//     title: 'Configuración',
//     icon: 'fas fa-cog',
//     link: '/configurations'
//   },
// ];

export default {
  name: 'MainLayout',
  components: {EssentialLink},
  data() {
    return {
      leftDrawerOpen: false,
      // essentialLinks: linksData
      menu: []
    }
  },
  created() {
    this.getMenu();
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    ...mapMutations('auth', ['setLocation']),
    async logout() {
      await this.$store.dispatch('auth/token_logout', null, {root: true});
      await this.$router.replace({name: 'login'});
    },
    async getMenu() {
      await this.$axios.get('/api/auth/tables')
        .then(r =>  {
          this.menu = r.data.menu;
          this.setLocation(r.data.locations);
          // this.menu = r.data;
        });
      // await this.$axios.get('/api/auth/tables')
      //   .then(r =>  {
      //     console.log(r.data.locations);
          // this.setLocation(r.data.locations);
        // });
    },
  }
}
</script>
