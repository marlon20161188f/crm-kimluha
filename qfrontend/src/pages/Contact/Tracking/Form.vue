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
          <div>
            <q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon>
          </div>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-24 col-md-12">
            <q-field outlined dense stack-label label="Fecha">
              <template v-slot:control>
                <vue-date-picker v-model="form.date_of_tracking"
                                 format="DD/MM/YYYY"
                                 no-header></vue-date-picker>
              </template>
            </q-field>
          </div>
          <div class="col-24 col-md-12">
            <x-select label="Medio"
                      v-model="form.action_id"
                      :options="actions"
                      option-label="alternative_name"
                      :error="errors.action_id"></x-select>
          </div>
          <div class="col-24">
            <x-input label="Comentario"
                     autogrow
                     v-model="form.commentary"
                     :error="errors.commentary"></x-input>
          </div>
        </div>
        <div class="row q-col-gutter-md" style="margin-top: 18px;">
          <div class="col-24 text-right">
            <q-btn outline color="blue" class="q-mr-md" @click.prevent="closeDialog">CANCELAR</q-btn>
            <q-btn unelevated color="blue" :loading="loadingSubmit" @click.prevent="onSubmit">
              <template v-if="recordId">GUARDAR</template>
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

import {VueDatePicker} from '@mathieustan/vue-datepicker';

export default {
  name: 'TrackingForm',
  components: {VueDatePicker},
  props: ['showDialog', 'contactId', 'recordId'],
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      resource: 'api/contact/tracking',
      title: '',
      errors: {},
      form: {},
      actions: [],
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
        contact_id: this.contactId,
        date_of_tracking: moment().format('YYYY-MM-DD'),
        action_id: null,
        commentary: null
      }
    },
    initTables() {
      this.$axios.get(`/${this.resource}/tables`)
        .then(response => {
          this.actions = response.data.actions;
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
        this.title = 'Editar seguimiento';
      } else {
        this.title = 'Nuevo seguimiento';
        this.form.action_id = _.find(this.actions, {'is_default': true}).id;
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
