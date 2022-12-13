<template>
  <q-card flat class="q-px-md">
    <q-card-section class="q-px-none q-pb-none" v-if="showHeader">
      <div class="flex justify-between items-center">
        <div class="text-h6">{{ title }}</div>
        <div class="flex items-center">
          <slot name="button-actions"></slot>
          <q-btn unelevated
                 color="blue"
                 @click.prevent="clickCreate()"
                 v-if="showButtonNew">Nuevo
          </q-btn>
          <q-btn unelevated
                 color="orange"
                 @click.prevent="clickToAssign"
                 class="q-ml-xs"
                 :loading="loadingToAssign"
                 v-if="showButtonToAssign">Asignar
          </q-btn>
          <q-btn unelevated
                 color="blue"
                 @click.prevent="clickImport"
                 class="q-ml-xs"
                 :loading="loadingImport"
                 v-if="showButtonImport">
            <q-icon left size="xs" name="fas fa-upload" />
            <div>Importar</div>
          </q-btn>
          <q-btn unelevated
                 color="blue"
                 @click.prevent="clickExport"
                 class="q-ml-xs"
                 :loading="loadingExport"
                 v-if="showButtonExport">
            <q-icon left size="xs" name="fas fa-download" />
            <div>Exportar</div>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section v-if="showFilter" class="q-px-none q-pt-md q-pb-none">
      <div class="row q-col-gutter-x-sm q-col-gutter-y-sm">
        <template v-for="f in filters">
          <div :class="f.class" v-if="f.field === 'operator_id'">
            <q-select v-model="f.value"
                      :label="f.label"
                      :options="f.options"
                      option-value="id"
                      option-label="name"
                      emit-value
                      map-options
                      outlined
                      dense
                      options-dense
                      class="select-truncate"
                      @input="changeFilter"></q-select>
          </div>
          <div class="col-16" v-if="f.field === 'operator_id'">
          </div>
          <div :class="f.class" v-if="f.field === 'phase_id'">
            <div class="row">
              <div class="col" v-for="row in f.options" :key="row.id">
                <div class="cursor-pointer" @click="changePhase(row.value)">
                  <x-btn-icon :title="row.title"
                              :icon="row.icon"
                              :is-active="(f.value === row.value)"
                              :color="(f.value === row.value)?row.color:'#ccc'"></x-btn-icon>
                </div>
                <!--                <x-btn-state :is-active="(f.value === row.id)"-->
                <!--                             :count="row.count"-->
                <!--                             :text="row.name" :color="row.color" @click-emit="clickState(row.id)"></x-btn-state>-->
              </div>
            </div>
          </div>
          <div :class="f.class" v-if="f.field === 'input'">
            <q-input :label="f.label"
                     outlined
                     dense
                     v-model="f.value"
                     @input="changeFilter">
              <template v-slot:append>
                <q-icon name="fas fa-search" size="xs"/>
              </template>
            </q-input>
          </div>
          <div :class="f.class" v-if="f.field === 'state_id' && showPhase">
            <div class="row list-states">
              <div class="col" v-for="row in f.options" :key="row.id">
                <x-btn-state :is-active="(f.value === row.id)"
                             :count="row.count"
                             :text="row.name" :color="row.color" @click-emit="clickState(row.id)"></x-btn-state>
              </div>
            </div>
          </div>
        </template>
      </div>
    </q-card-section>
    <q-card-section class="q-px-none q-pt-lg q-pb-none">
      <q-table
        :data="records"
        :columns="columns"
        :loading="loading"
        :pagination.sync="pagination"
        flat
        row-key="id"
        @request="getRecords"
        binary-state-sort
        class="table-index">
        <template v-slot:body="props">
          <slot name="table-rows" :props="props"></slot>
        </template>
      </q-table>
    </q-card-section>
    <x-dialog-import :show-dialog.sync="showDialogImport"
                     :resource="resource"
                     :show-download-format="true"
                     @success="changeFilter"></x-dialog-import>
  </q-card>
</template>

<script>

import XBtnState from "components/XBtnState";
import XBtnIcon from "components/XBtnIcon";
import {mapState} from "vuex";
import functions from "src/mixins/functions";
import XDialogImport from "components/XDialogImport";

export default {
  name: 'XTableContact',
  components: {XDialogImport, XBtnState, XBtnIcon},
  mixins: [functions],
  props: {
    title: {
      type: String,
      default: '',
    },
    resourceInit: {
      default: null,
    },
    resource: {
      type: String,
      required: true,
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFilter: {
      type: Boolean,
      default: false
    },
    showButtonNew: {
      type: Boolean,
      default: true
    },
    showButtonExport: {
      type: Boolean,
      default: true
    },
    showButtonImport: {
      type: Boolean,
      default: true
    },
    showButtonToAssign: {
      type: Boolean,
      default: true
    },
    reloadRecords: {
      type: Boolean,
      default: false
    },
    filenameExport: {
      type: String,
      default: 'export.xlsx'
    },
  },
  data() {
    return {
      filter: '',
      loading: false,
      loadingExport: false,
      loadingImport: false,
      loadingToAssign: false,
      showDialogImport: false,
      columns: [],
      filters: [],
      records: [],
      pagination: {
        sortBy: null,
        descending: null,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
    }
  },
  watch: {
    reloadRecords: {
      handler(val) {
        if (val) {
          this.getRecords({pagination: this.pagination, filters: this.filters});
          this.updateFilterState();
          this.$emit('update:reloadRecords', false);
        }
      },
      deep: true
    },
  },
  computed: {
    ...mapState('auth', ['user']),
    showPhase() {
      let index = _.findIndex(this.filters, {'field': 'phase_id'});
      return this.filters[index].value === '02';
      //return (this.form_type === 'quotation' || this.form_type === 'purchase_order')
    },
    // validatePhase() {
    //   let index = _.findIndex(this.filters, {'field': 'phase_id'});
    //   return this.filters[index].value;
    // }
  },
  async mounted() {
    await this.getInitTable();
    await this.getRecords({pagination: this.pagination, filters: this.filters});
    await this.updateFilterState();
  },
  methods: {
    async getInitTable() {
      this.loading = true;
      let resourceInit = (!this.resourceInit) ? this.resource : this.resourceInit;
      await this.$axios.get(`/${resourceInit}/init_data_table`)
        .then(response => {
          this.columns = response.data.columns;
          this.filters = response.data.filters;
        });
      this.loading = false;
    },
    async getRecords(props) {
      const {page, rowsPerPage, sortBy, descending} = props.pagination;
      const filters = props.filters;
      const fetchCount = rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage;

      this.loading = true;
      this.records = [];
      await this.$axios.post(`/${this.resource}/records`, {
        'isPagination': true,
        'page': page,
        'limit': fetchCount,
        'sortBy': sortBy,
        'descending': descending,
        'filters': this.filters
      })
        .then(response => {
          this.records = response.data.data;
          this.pagination.page = response.data.meta.current_page
          this.pagination.rowsPerPage = response.data.meta.per_page
          this.pagination.rowsNumber = response.data.meta.total
          this.pagination.sortBy = response.data.meta.sort_by
          this.pagination.descending = response.data.meta.descending
        });
      this.loading = false;
    },
    async changeFilter() {
      await this.getRecords({pagination: this.pagination, filters: this.filters});
      await this.updateFilterState();
    },
    clickCreate(value) {
      this.$emit('click-create', value)
    },
    async clickState(id) {
      let index = _.findIndex(this.filters, {'field': 'state_id'});
      this.filters[index].value = id;
      await this.getRecords({pagination: this.pagination, filters: this.filters});
      await this.updateFilterState();
    },
    async updateFilterState() {
      await this.$axios.post(`/${this.resource}/update_filter_state`, {
        'filters': this.filters
      })
        .then(response => {
          let index = _.findIndex(this.filters, {'field': 'state_id'});
          this.filters[index].options = response.data;
        });
    },
    async changePhase(id) {
      let index = _.findIndex(this.filters, {'field': 'phase_id'});
      this.filters[index].value = id;
      await this.getRecords({pagination: this.pagination, filters: this.filters});
      await this.updateFilterState();
    },
    clickToAssign() {
      this.$q.dialog({
        dark: true,
        title: 'Confirmar',
        message: '¿Desea asignar los contactos a los asesores?',
        persistent: true,
        cancel: {
          label: 'Cancelar',
          flat: true
        },
        ok: {
          label: 'Asignar',
          flat: true
        }
      }).onOk(() => {
        this.toAssign();
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    async toAssign() {
      this.loadingToAssign = true;
      await this.$axios.get(`/${this.resource}/to_assign`)
        .then(response => {
          if (response.data.success) {
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
            this.$emit('successToAssign');
          } else {
            this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
          }
        })
        .then(() => {
          this.loadingToAssign = false;
        });
    }
  }
}
</script>
