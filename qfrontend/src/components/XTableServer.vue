<template>
  <q-card flat class="q-px-md">
    <q-card-section class="q-px-none q-pb-none" v-if="showHeader">
      <div class="flex justify-between items-center">
        <div class="text-h6">{{ records.length }} {{ title }}</div>
        <div class="flex items-center">
          <slot name="button-actions"></slot>
          <q-btn unelevated
                 color="blue"
                 @click.prevent="clickCreate()"
                 v-if="showButtonNew">Nuevo</q-btn>
          <q-btn unelevated
                 color="blue"
                 @click.prevent="clickExport"
                 class="q-ml-xs"
                 :loading="loadingExport"
                 v-if="showButtonExport">Exportar</q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section v-if="showFilter" class="q-px-none q-pt-md q-pb-none">
      <div class="row q-col-gutter-x-sm q-col-gutter-y-sm">
        <template v-for="f in filters">
          <div :class="f.class" v-if="f.type === 'select'">
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
          <div :class="f.class" v-if="f.type === 'input'">
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
  </q-card>
</template>

<script>

import functions from "src/mixins/functions";

export default {
  name: 'XTableServer',
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
      default: false
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
          this.$emit('update:reloadRecords', false);
        }
      },
      deep: true
    },
  },
  async mounted() {
    await this.getInitTable();
    await this.getRecords({pagination: this.pagination, filters: this.filters});
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
    },
    clickCreate(value) {
      this.$emit('click-create', value)
    },
  }
}
</script>
