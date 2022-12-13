<template>
  <q-dialog v-model="showDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
            @before-show="handleOpen">
    <q-card style="width: 480px; max-width: 90vw;">
      <q-card-section>
        <div class="flex justify-between items-center">
          <div class="text-h6">{{ title }}</div>
          <div>
            <q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-24">
            <q-file outlined
                    dense
                    label="Seleccionar archivo"
                    v-model="form.file"
                    :no-error-icon="true"
                    :error="errors.file">
              <template v-slot:prepend>
                <q-icon name="fas fa-paperclip"/>
              </template>
            </q-file>
          </div>
          <div class="col-24" v-if="showDownloadFormat"><a href="#" @click.prevent="clickDownloadFormat">Descargar
            formato</a></div>
        </div>
      </q-card-section>
      <q-card-section align="right" class="x-dialog-card-actions">
        <q-btn flat label="Cerrar" class="q-mr-sm" color="grey" @click.prevent="closeDialog"/>
        <q-btn flat label="Importar" text-color="primary" class="" @click.prevent="onSubmit" :loading="loadingSubmit"/>
      </q-card-section>
      <x-loading :loading="loading"></x-loading>
    </q-card>
  </q-dialog>
</template>

<script>

export default {
  name: 'XDialogImport',
  props: ['showDialog', 'resource', 'showDownloadFormat'],
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      title: '',
      errors: {},
      form: {},
    }
  },
  created() {
    this.initForm();
  },
  methods: {
    initForm() {
      this.title = '';
      this.errors = {};
      this.form = {
        file: null,
      }
    },
    async handleOpen() {
      this.initForm();
      this.title = 'Importar Excel';
    },
    async onSubmit() {
      this.loading = true;
      this.loadingSubmit = true;
      this.errors = {};

      let formData = new FormData();
      formData.append('file', this.form.file);

      await this.$axios.post(`/${this.resource}/import`,
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.closeDialog();
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
            this.$emit('success');
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
    clickDownloadFormat() {
      location.href = this.$axios.defaults.baseURL + 'formats/contacts.xlsx';
    },
    closeDialog() {
      this.$emit('update:showDialog', false);
    }
  }
}
</script>
