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
          <div class="x-dialog--title">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator>
              <q-tab name="tracking" label="Seguimiento"  v-if="form.id"/>
              <q-tab name="contact" label="Contacto" />
            </q-tabs>
          </div>
          <div>
            <q-icon name="far fa-times-circle" size="md" class="cursor-pointer" @click.prevent="closeDialog"></q-icon>
          </div>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tracking" class="q-pt-none q-px-none q-pb-lg">
            <tracking-index :contact-id="recordId" v-if="loadForm"></tracking-index>
            <div class="row q-col-gutter-md q-mt-xs" v-if="form.id">
              <div class="col-24 col-md-8">
                <x-select label="Etapa"
                          v-model="form.phase_id"
                          :options="phases"
                          :error="errors.phase_id"
                          :readonly="form.phase_id === '01'"
                          @input="changePhase"></x-select>
              </div>
              <template v-if="form.phase_id === '02'">
                <div class="col-24 col-md-8">
                  <x-select label="Estado"
                            v-model="form.state_id"
                            :options="states"
                            :error="errors.state_id"></x-select>
                </div>
                <div class="col-24 col-md-8">
                  <x-select label="Próxima acción"
                            v-model="form.action_id"
                            :options="actions"
                            :error="errors.action_id"></x-select>
                </div>
                <div class="col-24 col-md-8">
                  <q-field outlined dense stack-label label="Fecha disponible">
                    <template v-slot:control>
                      <vue-date-picker v-model="form.date_of_action"
                                       format="DD/MM/YYYY"
                                       no-header></vue-date-picker>
                    </template>
                  </q-field>
                </div>
                <div class="col-24 col-md-8">
                  <q-input stack-label outlined dense v-model="form.time_of_action" mask="time" :rules="['time']"
                           label="Hora">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                          <q-time v-model="form.time_of_action">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat/>
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </template>
              <div class="col-24 col-md-12" v-if="form.phase_id === '03'">
                <x-select label="Motivo de rechazo"
                          v-model="form.rejection_id"
                          :options="rejections"
                          :error="errors.rejection_id"></x-select>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="contact" class="q-pt-none q-px-none q-pb-lg">
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
              <div class="col-24 col-md-8">
                <q-field outlined dense stack-label label="F.Nacimiento">
                  <template v-slot:control>
                    <vue-date-picker v-model="form.date_of_birth"
                                     min-date="1960-01-01"
                                     format="DD/MM/YYYY"
                                     no-header></vue-date-picker>
                  </template>
                </q-field>
              </div>
              <div class="col-24 col-md-16">
                <x-input label="Email 1"
                         v-model="form.email_1"
                         :error="errors.email_1"></x-input>
              </div>
              <div class="col-24 col-md-8">
                <x-input label="Celular 1"
                         v-model="form.cellphone_1"
                         :error="errors.cellphone_1"></x-input>
              </div>
              <div class="col-24 col-md-8">
                <x-input label="Celular 2"
                         v-model="form.cellphone_2"
                         :error="errors.cellphone_2"></x-input>
              </div>
              <div class="col-24 col-md-8">
                <x-input label="Teléfono"
                         v-model="form.phone"
                         :error="errors.phone"></x-input>
              </div>
              <div class="col-24">
                <x-input label="Dirección"
                         v-model="form.address"
                         :error="errors.address"></x-input>
              </div>
              <div class="col-24">
                <x-select-location v-model="form.location_id"></x-select-location>
              </div>
              <div class="col-24 col-md-8">
                <q-field outlined dense stack-label label="Inicio de plan">
                  <template v-slot:control>
                    <vue-date-picker v-model="form.date_plan_start"
                                     format="DD/MM/YYYY"
                                     no-header></vue-date-picker>
                  </template>
                </q-field>
              </div>
              <div class="col-24 col-md-8">
                <q-field outlined dense stack-label label="Fin de plan">
                  <template v-slot:control>
                    <vue-date-picker v-model="form.date_plan_end"
                                     format="DD/MM/YYYY"
                                     no-header></vue-date-picker>
                  </template>
                </q-field>
              </div>
              <div class="col-24 col-md-12" v-if="user && user.role_id !== 'operator'">
                <x-select label="Asesor"
                          v-model="form.operator_id"
                          :options="operators"
                          :error="errors.operator_id"></x-select>
              </div>
              <div class="col-24 col-md-6">
                <x-select label="Operador móvil"
                          v-model="form.mobile_operator_id"
                          :options="mobile_operators"
                          :error="errors.mobile_operator_id"></x-select>
              </div>
              <div class="col-24 col-md-6">
                <x-select label="Tipo de plan"
                          v-model="form.plan_type_id"
                          :options="plan_types"
                          :error="errors.plan_type_id"></x-select>
              </div>
              <div class="col-24 col-md-6">
                <x-select label="Tipo de venta"
                          v-model="form.plan_sale_id"
                          :options="plan_sales"
                          :error="errors.plan_sale_id"></x-select>
              </div>
              <div class="col-24 col-md-6">
                <x-input label="Costo del plan"
                         v-model="form.plan_price"
                         :error="errors.plan_price"></x-input>
              </div>
              <div class="col-24 col-md-6">
                <x-select label="Chip"
                          v-model="form.chip_type_id"
                          :options="chip_types"
                          :error="errors.chip_type_id"></x-select>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <div class="row q-col-gutter-md">
          <div class="col-24 text-right">
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
import TrackingIndex from './Tracking/Index';
import {mapState} from "vuex";
import XSelectLocation from "components/XSelectLocation";

export default {
  name: 'ContactForm',
  components: {XSelectLocation, VueDatePicker, TrackingIndex},
  props: ['showDialog', 'recordId'],
  data() {
    return {
      loading: false,
      loadingSubmit: false,
      loadForm: false,
      resource: 'api/contact',
      title: '',
      errors: {},
      form: {},
      // all_operators: [],
      operators: [],
      mobile_operators: [],
      states: [],
      all_phases: [],
      phases: [],
      rejections: [],
      plan_types: [],
      plan_sales: [],
      chip_types: [],
      tab: 'tracking'
    }
  },
  created() {
    this.initForm();
    this.initTables();
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    initForm() {
      this.title = '';
      this.errors = {};
      this.form = {
        id: null,
        number: null,
        name: null,
        lastname: null,
        date_of_birth: null,
        email_1: null,
        cellphone_1: null,
        cellphone_2: null,
        phone: null,
        address: null,
        location_id: null,
        operator_id: null,
        chip_type_id: null,
        mobile_operator_id: null,
        plan_type_id: null,
        plan_sale_id: null,
        plan_price: 0,
        date_plan_start: null,
        date_plan_end: null,
        phase_id: '01',
        rejection_id: null,
        state_id: null,
        action_id: null,
        date_of_action: null,
        time_of_action: null,
      }
    },
    initTables() {
      this.$axios.get(`/${this.resource}/tables`)
        .then(response => {
          this.operators = response.data.operators;
          this.mobile_operators = response.data.mobile_operators;
          this.plan_types = response.data.plan_types;
          this.plan_sales = response.data.plan_sales;
          this.chip_types = response.data.chip_types;
          this.states = response.data.states;
          this.actions = response.data.actions;
          this.all_phases = response.data.phases;
          this.rejections = response.data.rejections;
        });
    },
    async handleOpen() {
      this.loadForm = false;
      this.loading = true;
      this.initForm();
      this.phases = this.all_phases;
      if (this.recordId) {
        await this.$axios.get(`/${this.resource}/record/${this.recordId}`)
          .then(response => {
            this.form = response.data.data;
          });
        if(this.form.operator_id) {
          this.phases = _.filter(this.all_phases, row => {
            return row.id !== '01';
          });
        }
        this.title = 'Seguimiento';
      } else {
        // if(this.states.length > 0) {
        //   this.form.state_id = _.head(this.states).id;
        // }
        this.title = 'Nuevo contacto';
      }
      this.tab = (this.form.id)?'tracking':'contact';
      this.loadForm = true;
      this.loading = false;
    },
    async onSubmit() {
      if (this.form.id) {
        if (this.form.phase_id === '02') {
          // this.form.rejection_id = null;
          // if (_.isNull(this.form.state_id)) {
          //   this.$q.notify({message: 'Debe seleccionar un estado', icon: 'fas fa-times', color: 'red'});
          //   return false;
          // }
          // if (_.isNull(this.form.action_id)) {
          //   this.$q.notify({message: 'Debe seleccionar una próxima acción', icon: 'fas fa-times', color: 'red'});
          //   return false;
          // }
          // if (_.isNull(this.form.date_of_action)) {
          //   this.$q.notify({message: 'Debe seleccionar una fecha disponible', icon: 'fas fa-times', color: 'red'});
          //   return false;
          // }
        }
        if (this.form.phase_id === '03') {
          this.form.state_id = null;
          this.form.action_id = null;
          this.form.date_of_action = null;
          this.form.time_of_action = null;
          if (_.isNull(this.form.rejection_id)) {
            this.$q.notify({message: 'Debe seleccionar un motivo de rechazo', icon: 'fas fa-times', color: 'red'});
            return false;
          }
        }
      }

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
    changePhase() {
      // console.log('changePhase');
      // this.form.state_id = null;
      // this.form.action_id = null;
      // this.form.rejection_id = null;
      // this.form.date_of_action = null;
      // this.form.time_of_action = null;
    },
    closeDialog() {
      this.$emit('update:showDialog', false);
    }
  }
}
</script>
