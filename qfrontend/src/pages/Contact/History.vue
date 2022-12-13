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
          <div class="col-24">
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
                        <q-btn size="md" flat round
                               icon="far fa-clock"
                               @click.prevent="clickHistory(props.row.id)"/>
                        <q-btn size="md" flat round
                               icon="far fa-eye"
                               @click.prevent="clickCreate(props.row.id)"/>
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
          </div>
        </div>
<!--        <div class="row q-col-gutter-x-md" style="margin-top: 48px">-->
<!--          <div class="col-12">-->
<!--            <q-btn unelevated outline class="full-width" @click.prevent="closeDialog">DESCARGAR FORMATO</q-btn>-->
<!--          </div>-->
<!--          <div class="col-12">-->
<!--            <q-btn unelevated color="blue" class="full-width" :loading="loadingSubmit">CARGAR</q-btn>-->
<!--          </div>-->
<!--        </div>-->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    name: 'ContactHistory',
    props: ['showDialog', 'recordId'],
    data() {
      return {
        loading: false,
        loadingSubmit: false,
        resource: 'api/user',
        title: '',
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
          {name: 'date', align: 'left', label: 'FECHA', field: 'date', sortable: false},
          {name: 'type', align: 'left', label: 'MEDIO', field: 'type', sortable: false},
          {name: 'commentary', align: 'left', label: 'COMENTARIO', field: 'commentary', sortable: false},
        ],
        rows: [
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Email',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Whatsapp',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
          {
            id: 1,
            date: '20/06/2020',
            type: 'Llamada',
            commentary: 'dsadasd asdasd asdasdsa',
          },
        ],
      }
    },
    computed: {
      pagesNumber() {
        return Math.ceil(this.rows.length / this.pagination.rowsPerPage)
      }
    },
    created() {
    },
    methods: {
      handleOpen() {
        this.title = 'SEGUIMIENTO';
      },
      closeDialog() {
        this.$emit('update:showDialog', false);
      }
    }
  }
</script>
