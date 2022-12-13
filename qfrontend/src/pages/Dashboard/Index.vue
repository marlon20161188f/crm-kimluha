<template>
  <div class="content-index" v-if="load">
    <div class="row q-col-gutter-md">
      <div class="col-24 col-sm-12 col-md-6" v-if="user && user.role_id !== 'operator'">
        <x-card-panel title="CONTACTOS">
          <x-card-icon :total="count_contacts"
                       icon="far fa-user"
                       color="#47A3FF"></x-card-icon>
        </x-card-panel>
      </div>
      <!--      <div class="col-24 col-sm-12 col-md-6">-->
      <!--        <x-card-panel title="NO ASIGNADOS">-->
      <!--          <x-card-icon :total="contacts_01"-->
      <!--                       icon="fas fa-user-plus"-->
      <!--                       color="#00A251"></x-card-icon>-->
      <!--        </x-card-panel>-->
      <!--      </div>-->
      <div class="col-24 col-sm-12 col-md-6">
        <x-card-panel title="ASIGNADOS">
          <x-card-icon :total="contacts_02"
                       icon="fas fa-user-plus"
                       color="#00A251"></x-card-icon>
        </x-card-panel>
      </div>
      <div class="col-24 col-sm-12 col-md-6">
        <x-card-panel title="RECHAZADOS">
          <x-card-icon :total="contacts_03"
                       icon="fas fa-user-times"
                       color="#FF3030"></x-card-icon>
        </x-card-panel>
      </div>
      <div class="col-24 col-sm-12 col-md-6">
        <x-card-panel title="CERRADOS">
          <x-card-icon :total="contacts_04"
                       icon="fas fa-hands-helping"
                       color="#274BFF"></x-card-icon>
        </x-card-panel>
      </div>
      <div class="col-24 col-md-12">
        <q-card flat>
          <q-card-section class="flex justify-between items-center" style="padding: 8px 16px;">
            <div class="text-h6" style="font-size: 1rem">OPERADOR</div>
            <div style="width: 160px" v-if="user && user.role_id !== 'operator'">
              <q-select v-model="operator_id"
                        :options="operators"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        outlined
                        dense
                        options-dense
                        class="select-truncate"
                        @input="getData"></q-select>
            </div>
          </q-card-section>
          <q-separator inset/>
          <q-card-section>
            <div class="row">
              <div class="col-18">
                <apex-charts type="donut" height="350" :options="chartOptions" :series="series"></apex-charts>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-24 q-mb-md">
                    <x-card-info title="ASIGNADOS"
                                 :total="contacts_02"
                                 icon="fas fa-user-times"
                                 color="#00A251"></x-card-info>
                  </div>
                  <div class="col-24 q-mb-md">
                    <x-card-info title="RECHAZADOS"
                                 :total="contacts_03"
                                 icon="fas fa-user-times"
                                 color="#FF3030"></x-card-info>
                  </div>
                  <div class="col-24">
                    <x-card-info title="CERRADOS"
                                 :total="contacts_04"
                                 icon="fas fa-user-times"
                                 color="#274BFF"></x-card-info>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-24 col-md-12">
        <x-card-panel title="INFORMACIÓN">
          <q-list>
            <q-item class="q-pl-none">
              <q-item-section>
                <q-item-label>
                  <q-badge color="positive" rounded class="q-mr-sm"/>
                  ASIGNADOS
                </q-item-label>
                <q-item-label caption lines="2">Contactos en gestión comercial por parte de un asesor.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-pl-none">
              <q-item-section>
                <q-item-label>
                  <q-badge color="negative" rounded class="q-mr-sm"/>
                  RECHAZADOS
                </q-item-label>
                <q-item-label caption lines="2">Contactos que rechazaron la oferta comercial.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-pl-none">
              <q-item-section>
                <q-item-label>
                  <q-badge color="info" rounded class="q-mr-sm"/>
                  CERRADOS
                </q-item-label>
                <q-item-label caption lines="2">Contactos con los que se cerró una venta.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </x-card-panel>
      </div>
    </div>
  </div>
</template>
<script>

import {mapState} from "vuex";
import ApexCharts from 'vue-apexcharts';
import XCardIcon from 'components/XCardIcon';
import XCardInfo from 'components/XCardInfo';
import XCardPanel from "components/XCardPanel";

export default {
  props: ['showDialog', 'record'],
  components: {XCardIcon, XCardInfo, XCardPanel, ApexCharts},
  data() {
    return {
      load: false,
      data: {},
      count_contacts: 0,
      // contacts_01: 0,
      contacts_02: 0,
      contacts_03: 0,
      contacts_04: 0,
      series: [0, 0, 0, 0],
      chartOptions: {
        dataLabels: {
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex]
          },
          style: {
            fontSize: '16px',
            fontWeight: 'normal',
          }
        },
        colors: ['#00A251', '#FF3030', '#274BFF'],
        labels: ['Asignados', 'Rechazados', 'Cerrados'],
        legend: {
          show: false,
        },
      },
      operators: [],
      operator_id: null
    }
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    async getData() {
      this.load = false;
      await this.$axios.post('api/dashboard/data', {'operator_id': this.operator_id})
        .then(response => {
          this.count_contacts = response.data.count_contacts;
          // this.contacts_01 = response.data.contacts_01;
          this.contacts_02 = response.data.contacts_02;
          this.contacts_03 = response.data.contacts_03;
          this.contacts_04 = response.data.contacts_04;
          this.series = response.data.series;
          this.operators = response.data.operators;
          // this.series[0].data = response.data.sale_data;
          // this.chartOptions.xaxis.categories = response.data.sale_categories;
        })
      this.load = true;
    }
  }
}
</script>
