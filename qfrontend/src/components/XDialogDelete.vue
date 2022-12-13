<template>
  <q-dialog v-model="showDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
            @before-show="handleOpen">
    <q-card style="width: 480px; max-width: 90vw;">
      <q-card-section>
        <div class="flex justify-end items-center">
          <div><q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon></div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-x-md">
          <div class="col-24 text-center text-h5">{{ description }}</div>
        </div>
        <div class="row q-col-gutter-x-md" style="margin-top: 48px">
          <div class="col-12">
            <q-btn unelevated outline class="full-width" @click.prevent="closeDialog">CANCELAR</q-btn>
          </div>
          <div class="col-12">
            <q-btn unelevated color="red" class="full-width" @click.prevent="onSubmit">ELIMINAR</q-btn>
          </div>
        </div>
      </q-card-section>
      <x-loading :loading="loading"></x-loading>
    </q-card>
  </q-dialog>
</template>

<script>

export default {
  name: 'XDialogDelete',
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    resource: {
      type: String,
      required: true,
    },
    record: {
      default: null
    },
    text: {
      default: null
    }
  },
  data() {
    return {
      loading: false,
      description: '',
      description_additional: '',
      resourceDelete: null
    }
  },
  methods: {
    handleOpen() {
      this.loading = false;
      this.description_additional = '';
      if (_.isNull(this.record)) {
        this.resourceDelete = `/${this.resource}`;
      } else {
        this.resourceDelete = `/${this.resource}/${this.record.id}`;
        this.description_additional = (this.record.name) ? this.record.name : '';
      }
      if (!_.isNull(this.text)) {
        this.description_additional = this.text;
      }
      this.description = '¿Seguro que desea eliminar el registro? ' + this.description_additional;
    },
    async onSubmit() {
      this.loading = true;
      await this.$axios.delete(this.resourceDelete)
        .then(response => {
          if (response.data.success) {
            this.closeDialog();
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
            this.$emit('success');
          } else {
            this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
          }
        })
        .catch(() => {
          this.loading = false;
        })
    },
    closeDialog() {
      this.$emit('update:showDialog', false);
    }
  }
}
</script>
