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
          <div>
            <q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon>
          </div>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-24 col-md-12">
            <x-input label="Nombre del estado"
                     v-model="form.name"
                     :error="errors.name"></x-input>
          </div>
          <div class="col-24 col-md-12">

            <q-select outlined
                      dense
                      options-dense
                      v-model="form.color_id"
                      :options="colors"
                      option-value="id"
                      option-label="name"
                      emit-value
                      map-options
                      stack-label
                      label="Color">
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps"
                        v-on="scope.itemEvents">
                  <q-item-section avatar>
                    <q-badge rounded :style="{'background-color': scope.opt.color}"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label v-html="scope.opt.name" />
<!--                    <q-item-label caption>{{ scope.opt.name }}</q-item-label>-->
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:selected-item="scope">
                <q-badge rounded :style="{'background-color': scope.opt.color}" class="q-mr-md"/> {{ scope.opt.name }}
<!--                  <q-avatar color="secondary" text-color="white" :icon="scope.opt.color" />-->
<!--                  {{ scope.opt.label }}-->
              </template>
            </q-select>

<!--            <x-select label="Color"-->
<!--                      v-model="form.color"-->
<!--                      :options="colors"-->
<!--                      :error="errors.color"></x-select>-->
          </div>
          <div class="col-24">
            <x-input label="Descripción"
                     v-model="form.description"
                     :error="errors.description"></x-input>
          </div>
        </div>
        <div class="col-24 text-right" style="margin-top: 18px">
          <q-btn outline color="blue" class="q-mr-md" @click.prevent="closeDialog">CANCELAR</q-btn>
          <q-btn unelevated color="blue" :loading="loadingSubmit" @click.prevent="onSubmit">
            <template v-if="recordId">GUARDAR CAMBIOS</template>
            <template v-else>CREAR</template>
          </q-btn>
        </div>
      </q-card-section>
      <x-loading :loading="loading"></x-loading>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'StateForm',
  props: ['showDialog', 'recordId'],
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      resource: 'api/state',
      title: '',
      errors: {},
      form: {},
      colors: [],
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
        name: '',
        description: '',
        color_id: null,
      }
    },
    initTables() {
      this.$axios.get(`/${this.resource}/tables`)
        .then(response => {
          this.colors = response.data.colors;
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
        this.title = 'Editar estado';
      } else {
        this.title = 'Nuevo estado';
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
