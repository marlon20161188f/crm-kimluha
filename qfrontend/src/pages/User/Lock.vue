<template>
  <q-dialog :value="showDialog"
            :no-esc-dismiss="false"
            :no-backdrop-dismiss="true"
            transition-show="scale"
            transition-hide="scale"
            @before-show="handleOpen"
            @hide="closeDialog">
    <q-card class="x-dialog" style="width: 480px;">
      <q-card-section>
        <div class="flex justify-end items-center">
          <div><q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon></div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-x-md">
          <div class="col-24 text-center text-h5">Estas seguro de <b>{{ lock_message }}</b> al usuario<br/>{{ lock_email }}</div>
        </div>
        <div class="row q-col-gutter-x-md" style="margin-top: 48px">
          <div class="col-12">
            <q-btn unelevated outline class="full-width" @click.prevent="closeDialog">CANCELAR</q-btn>
          </div>
          <div class="col-12">
            <q-btn unelevated color="blue" class="full-width" @click.prevent="onSubmit">CONFIRMAR</q-btn>
          </div>
        </div>
      </q-card-section>
      <x-loading :loading="loading"></x-loading>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    name: 'UserLock',
    props: ['showDialog', 'record'],
    data() {
      return {
        loading: false,
        loadingSubmit: false,
        resource: 'api/user',
        title: '',
        errors: {},
        form: {},
        lock_message: '',
        lock_email: ''
      }
    },
    created() {
    },
    methods: {
      handleOpen() {
        this.lock_message = (this.record.is_active)?'bloquear':'desbloquear';
        this.lock_email = this.record.email;
      },
      async onSubmit() {
        this.loading = true;
        await this.$axios.get(`/${this.resource}/lock/${this.record.id}`)
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
        this.loading = false;
      },
      closeDialog() {
        this.$emit('update:showDialog', false);
      }
    }
  }
</script>
