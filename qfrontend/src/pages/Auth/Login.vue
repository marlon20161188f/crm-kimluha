<template>
  <div class="form-content">
    <div class="form-items">
      <form @submit.prevent="submit">
        <div class="row q-col-gutter-md">
          <div class="col-24">
            <div class="login-title">Iniciar sesión</div>
          </div>
          <div class="col-24">
            <x-input label="correo electrónico"
                     v-model="form.email"
                     :error="errors.email"></x-input>
          </div>
          <div class="col-24">
            <x-input label="contraseña"
                     v-model="form.password"
                     :error="errors.password"></x-input>
          </div>
          <div class="col-24 text-center">
            <q-btn unelevated color="primary" size="lg" class="full-width login-submit" type="submit"
                   :loading="loadingSubmit">Acceder
            </q-btn>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";
import axios from "axios";
import {LocalStorage} from "quasar";

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      errors: {},
      form: {},
      subdomain: null
    }
  },
  created() {
    this.initForm();
  },
  computed: {
  },
  methods: {
    // ...mapActions('app', ['getAppInit']),
    ...mapMutations('auth', ['SET_TOKEN', 'SET_LOGGED']),
    ...mapActions({me: 'auth/me'}),
    initForm() {
      this.form = {
        email: '',
        password: '',
        device_name: 'laravel-quasar-intipos',
      }
    },
    async submit() {
      // if (this.subdomain === '' || _.isNull(this.subdomain)) {
      //   this.$q.notify({message: 'nombre de la tienda es requerido', icon: 'fal fa-times', color: 'red'});
      //   return false;
      // }
      //
      // this.loadingSubmit = true;
      // this.$axios.defaults.baseURL = this.domain;
      // await this.$axios.get(`/api/system/getClient/${this.subdomain}`)
      //   .then(res => {
      //     if (res.data.success) {
      //       this.setSubdomain(res.data.fqdn);
      //       this.$axios.defaults.baseURL = LocalStorage.getItem("subdomain");
      //     } else {
      //       this.$q.notify({message: res.data.message, icon: 'fal fa-times', color: 'red'});
      //       this.loadingSubmit = false;
      //       return false;
      //     }
      //   })
      //   .catch(error => {
      //     this.loadingSubmit = false;
      //     console.log(error);
      //   });


      this.loadingSubmit = true;

      // if (this.$q.platform.is.capacitor) {
      //   this.$axios.defaults.baseURL = this.domain;
      //   await this.$axios.get(`/api/system/getClient/${this.subdomain}`)
      //     .then(res => {
      //       if (res.data.success) {
      //         this.setSubdomain(res.data.fqdn);
      //         this.$axios.defaults.baseURL = LocalStorage.getItem("subdomain");
      //       } else {
      //         this.$q.notify({message: res.data.message, icon: 'fal fa-times', color: 'red'});
      //         this.loadingSubmit = false;
      //         return false;
      //       }
      //     })
      //     .catch(error => {
      //       this.loadingSubmit = false;
      //       console.log(error);
      //     });
      // }


      // this.setSubdomain(this.subdomain);
      // this.$axios.defaults.baseURL = LocalStorage.getItem("subdomain");

      await this.$axios.post('/api/auth/login', this.form)
        .then(res => {
          console.log(res);
          this.SET_TOKEN(res.data);
          this.me();
          // this.getAppInit();
          this.$router.replace({name: 'dashboard'});
        })
        .catch(error => {
          //this.$q.notify({message: error.message, icon: 'fal fa-times', color: 'red'});
          this.SET_LOGGED(false);
          this.SET_TOKEN(null);
        });
      this.loadingSubmit = false;
    }
  }
}
</script>
