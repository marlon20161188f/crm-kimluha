<template>
  <div class="content-index" v-if="load">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card>
          <q-card-section class="q-pa-lg">
            <div class="row q-col-gutter-md">
              <!--              <div class="col-24 col-md-6">-->
              <!--                <x-select label="Etapa"-->
              <!--                          v-model="form.role_id"-->
              <!--                          :options="roles"-->
              <!--                          :error="errors.role_id"></x-select>-->
              <!--              </div>-->
              <div class="col-24 col-md-12">
                <x-select label="Estado"
                          v-model="form.state_id"
                          :options="states"
                          :error="errors.state_id"></x-select>
              </div>
              <div class="col-24">
                <x-input label="Asunto email"
                         autogrow
                         v-model="form.subject"
                         :error="errors.subject"></x-input>
              </div>
              <div class="col-24">
                <x-input label="Mensaje email"
                         autogrow
                         v-model="form.message"
                         :error="errors.message"></x-input>
              </div>
              <div class="col-24">
                <q-file outlined
                        dense
                        v-model="form.file"
                        label="Archivo"
                        :error="errors.file">
                  <template v-slot:prepend>
                    <q-icon size="xs" name="fas fa-paperclip"/>
                  </template>
                  <template v-slot:after>
                    <!--                    <q-btn round flat icon="fas fa-upload" @click="onSubmit"/>-->
                    <!--                    <q-btn round flat icon="fal fa-trash" @click="clickDelete"/>-->
                  </template>
                </q-file>
              </div>
            </div>
            <div class="row q-col-gutter-md" style="margin-top: 18px;">
              <div class="col-24 text-right">
                <q-btn unelevated color="blue"
                       :disable="!form.state_id"
                       :loading="loadingSubmit"
                       @click.prevent="sendMail">ENVIAR
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'NotificationForm',
  data() {
    return {
      load: false,
      loading: false,
      loadingSubmit: false,
      resource: 'api/notification',
      title: '',
      errors: {},
      form: {},
      states: [],
    }
  },
  created() {
    this.initForm();
    this.initTables();
  },
  mounted() {
    this.load = true;
  },
  methods: {
    initForm() {
      this.errors = {};
      this.form = {
        id: null,
        state_id: null,
        subject: null,
        message: null,
        file: null,
      }
    },
    initTables() {
      this.$axios.get(`/${this.resource}/tables`)
        .then(response => {
          this.states = response.data.states;
        });
    },
    async sendMail() {
      if (_.isNull(this.form.state_id)) {
        this.$q.notify({message: 'Seleccione un estado', icon: 'fas fa-times', color: 'red'});
        return false;
      }
      if (_.isNull(this.form.subject) || this.form.subject === '') {
        this.$q.notify({message: 'El campo asunto es requerido', icon: 'fas fa-times', color: 'red'});
        return false;
      }
      if (_.isNull(this.form.message) || this.form.message === '') {
        this.$q.notify({message: 'El campo mensaje es requerido', icon: 'fas fa-times', color: 'red'});
        return false;
      }
      this.loadingSubmit = true;
      this.errors = {};
      let formData = new FormData();
      formData.append('id', this.form.id);
      formData.append('state_id', this.form.state_id);
      formData.append('subject', this.form.subject);
      formData.append('message', this.form.message);
      formData.append('file', this.form.file);
      await this.$axios.post(`/${this.resource}/send_mail`,
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
            this.initForm();
          } else {
            this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
          }
        })
        .catch(error => {
          this.errors = error;
        });
      this.loadingSubmit = false;
    },
  }
}
</script>
