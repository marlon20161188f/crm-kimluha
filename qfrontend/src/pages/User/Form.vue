<template>
  <q-dialog :value="showDialog"
            :no-esc-dismiss="false"
            :no-backdrop-dismiss="true"
            transition-show="scale"
            transition-hide="scale"
            @before-show="handleOpen"
            @hide="closeDialog">
    <q-card class="x-dialog" style="width: 720px;">
      <q-card-section>
        <div class="flex justify-between items-center">
          <div class="x-dialog--title">{{ title }}</div>
          <div><q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon></div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-24 col-md-8">
            <x-input label="DNI"
                     v-model="form.number"
                     :error="errors.number"></x-input>
          </div>
          <div class="col-24 col-md-8">
            <x-input label="Nombre"
                     v-model="form.name"
                     :error="errors.name"></x-input>
          </div>
          <div class="col-24 col-md-8">
            <x-input label="Apellido"
                     v-model="form.lastname"
                     :error="errors.lastname"></x-input>
          </div>
          <div class="col-24 col-md-16">
            <x-input label="Email"
                     v-model="form.email"
                     :error="errors.email"></x-input>
          </div>
          <div class="col-24 col-md-8">
            <x-select label="Perfil"
                      v-model="form.role_id"
                      :options="roles"
                      :error="errors.role_id"></x-select>
          </div>
        </div>
        <div class="row q-col-gutter-md" style="margin-top: 18px;">
          <div class="col-24 text-right">
            <q-btn outline color="blue" class="q-mr-md" @click.prevent="closeDialog">CANCELAR</q-btn>
            <q-btn unelevated color="blue" :loading="loadingSubmit" @click.prevent="onSubmit">
              <template v-if="recordId">GUARDAR CAMBIOS</template>
              <template v-else>CREAR</template>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <x-loading :loading="loading"></x-loading>
    </q-card>
  </q-dialog>
</template>

<script>

  export default {
    name: 'UserForm',
    props: ['showDialog', 'recordId'],
    data() {
      return {
        loading: false,
        loadingSubmit: false,
        resource: 'api/user',
        title: '',
        errors: {},
        form: {},
        roles: [],
      }
    },
    created() {
      this.initForm();
      this.initTables();
    },
    methods: {
      initForm() {
        this.title = '';
        this.errors = {};
        this.form = {
          id: null,
          number: '',
          name: '',
          lastname: '',
          role_id: null,
          is_active: true,
        }
      },
      initTables() {
        this.$axios.get(`/${this.resource}/tables`)
          .then(response => {
            this.roles = response.data.roles;
          });
      },
      async handleOpen() {
        this.loading = true;
        this.initForm();
        if (this.recordId) {
          await this.$axios.get(`/${this.resource}/record/${this.recordId}`)
            .then(response => {
              this.form = response.data.data;
            });
          this.title = 'Editar usuario';
        } else {
          this.title = 'Nuevo usuario';
          this.form.role_id = _.head(this.roles).id;
        }
        this.loading = false;
      },
      async onSubmit() {
        this.loading = true;
        this.loadingSubmit = true;
        this.errors = {};
        await this.$axios.post(`/${this.resource}`, this.form)
          .then(response => {
            if (response.data.success) {
              this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
              this.$emit('success', response.data.id);
              this.closeDialog();
            } else {
              this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
            }
          })
          .catch(error => {
            this.errors = error;
          });
        this.loadingSubmit = false;
        this.loading = false;
      },
      closeDialog() {
        this.$emit('update:showDialog', false);
      }
    }
  }
</script>
