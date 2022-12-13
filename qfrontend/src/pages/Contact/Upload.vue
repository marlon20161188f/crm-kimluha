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
        <div class="flex justify-between items-center">
          <div class="x-dialog--title">{{ title }}</div>
          <div><q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon></div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-x-md">
          <div class="col-24 text-center text-h5">
            dsadasdasdasdsadasd asdasdsa asdasdjaslijdalkjdas
            asdljkasdjlaksjd lasjd lkajsdlkj aslkjdas
          </div>
        </div>
        <div class="row q-col-gutter-x-md" style="margin-top: 48px">
          <div class="col-12">
            <q-btn unelevated outline class="full-width" @click.prevent="closeDialog">DESCARGAR FORMATO</q-btn>
          </div>
          <div class="col-12">
            <q-btn unelevated color="blue" class="full-width" :loading="loadingSubmit">CARGAR</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    name: 'ContactUpload',
    props: ['showDialog', 'recordId'],
    data() {
      return {
        loading: false,
        loadingSubmit: false,
        resource: 'api/user',
        title: '',
        errors: {},
        form: {},
      }
    },
    created() {
    },
    methods: {
      handleOpen() {
        this.title = 'CARGAR DOCUMENTO';
      },
      closeDialog() {
        this.$emit('update:showDialog', false);
      }
    }
  }
</script>
