<template>
  <div class="content-index" v-if="load">
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-shrink flex items-center">
        <div style="font-size: 24px; font-weight: 500">{{ count_contacts }} CONTACTOS</div>
      </div>
      <div class="col-shrink">
        <q-btn unelevated color="blue" @click.prevent="clickCreate()">CREAR CONTACTO</q-btn>
      </div>
      <div class="col-shrink">
        <q-btn unelevated outline @click.prevent="clickUpload">CARGAR</q-btn>
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-24">
        <x-card-table title="CONTACTOS">
          <template v-slot:header>
            <div class="row q-col-gutter-x-md q-mb-md">
              <div class="col-6">
                <x-select label="Operador"
                          v-model="form.operator_id"
                          :options="operators"
                          :error="errors.operator_id"></x-select>
              </div>
              <div class="col-6">
                <x-input></x-input>
              </div>
              <div class="col-12 text-right">
                <q-btn unelevated color="grey" @click.prevent="clickDownload">
                  <q-icon name="fas fa-arrow-down" class="q-mr-sm" size="16px"></q-icon>
                  EXCEL</q-btn>
              </div>
            </div>
            <div class="row q-col-gutter-x-xs">
              <div class="col" v-for="row in states" :key="row.id"><x-btn-state number="2" :text="row.name" :color="row.color"></x-btn-state></div>
            </div>
          </template>
          <template v-slot:table>
            <q-table
              flat
              :data="rows"
              :columns="columns"
              row-key="id"
              :pagination.sync="pagination"
              hide-pagination>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <template v-for="col in props.cols">
                    <q-td :key="col['name']" :props="props">
                      <template v-if="col['name'] === 'actions'">
<!--                        <q-btn size="md" flat round-->
<!--                               icon="far fa-clock"-->
<!--                               @click.prevent="clickHistory(props.row.id)"/>-->
                        <q-btn size="md" flat round
                               icon="far fa-eye"
                               @click.prevent="clickCreate(props.row.id)"/>
                      </template>
                      <template v-else-if="col['name'] === 'action'">
                        <q-icon :name="props.row.action_icon" size="md" class="q-mr-xs"></q-icon>
                        {{ props.row.action }}
                      </template>
                      <template v-else>
                        {{ props.row[col['name']] }}
                      </template>
                    </q-td>
                  </template>
                </q-tr>
              </template>
            </q-table>
            <div class="row justify-center q-mt-md">
              <q-pagination
                v-model="pagination.page"
                color="grey-8"
                :max="pagesNumber"
              />
            </div>
          </template>
        </x-card-table>
      </div>
    </div>
    <contact-form :show-dialog.sync="showDialog" :record-id="recordId"></contact-form>
    <contact-upload :show-dialog.sync="showDialogUpload"></contact-upload>
<!--    <contact-history :show-dialog.sync="showDialogHistory"></contact-history>-->
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import ContactUpload from "pages/Contact/Upload";
import XBtnState from "components/XBtnState";
import ContactForm from "pages/Contact/Form";
import ContactHistory from "pages/Contact/History";

export default {
  name: 'UserIndex',
  components: {ContactHistory, ContactForm, ContactUpload, XCardTable, XBtnState},
  data() {
    return {
      load: false,
      showDialog: false,
      showDialogUpload: false,
      showDialogHistory: false,
      resource: 'api/contact',
      errors: {},
      form: {},
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 5
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {name: 'number', align: 'left', label: 'DNI', field: 'number', sortable: false},
        {name: 'name', align: 'left', label: 'NOMBRES', field: 'name', sortable: false},
        {name: 'lastname', align: 'left', label: 'APELLIDOS', field: 'lastname', sortable: false},
        {name: 'cellphone', align: 'left', label: 'CELULAR', field: 'cellphone', sortable: false},
        {name: 'email', align: 'left', label: 'EMAIL', field: 'email', sortable: false},
        {name: 'action', align: 'left', label: 'ACCION', field: 'action', sortable: false},
        {name: 'date', align: 'left', label: 'FECHA', field: 'date', sortable: false},
        {name: 'hour', align: 'left', label: 'HORA', field: 'hour', sortable: false},
        {name: 'actions', align: 'right', label: 'ACCIONES', field: 'actions', sortable: false}
      ],
      rows: [
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'group',
          action: 'Reunión presencial',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'videocam',
          action: 'Reunión virtual',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'phone',
          action: 'Llamar',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'phone',
          action: 'Llamar',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'mail',
          action: 'Enviar email',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'whatsapp',
          action: 'Whatsapp',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'whatsapp',
          action: 'Whatsapp',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'whatsapp',
          action: 'Whatsapp',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'phone',
          action: 'Llamar',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'phone',
          action: 'Llamar',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'mail',
          action: 'Enviar email',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
        {
          id: 1,
          number: '47677901',
          name: 'Pedro',
          lastname: 'Vargas Sanchez',
          cellphone: '987654321',
          email: 'luiscacerez@gmail.com',
          action_icon: 'mail',
          action: 'Enviar email',
          date: '2021/06/14',
          hour: '11:37 a.m.',
          actions: ''
        },
      ],
      recordId: null,
      states: [],
      count_contacts: 0,
      operators: []
    }
  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage)
    }
  },
  mounted() {
    this.load = true;
    this.initTables();
  },
  methods: {
    initTables() {
      this.$axios.get(`/${this.resource}/index_tables`)
        .then(response => {
          this.states = response.data.states;
          this.count_contacts = response.data.count_contacts;
          this.operators = response.data.operators;
        });
    },
    clickCreate(recordId = null) {
      this.recordId = recordId;
      this.showDialog = true;
    },
    clickHistory(recordId) {
      this.recordId = recordId;
      this.showDialogHistory = true;
    },
    clickUpload() {
      this.showDialogUpload = true;
    },
    clickDownload() {
    }
  }
}
</script>
