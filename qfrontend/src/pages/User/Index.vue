<template>
  <div class="content-index">
    <div class="row q-col-gutter-md">
      <div class="col-24">
        <x-table-server :title="title"
                        :resource="resource"
                        :show-filter="true"
                        :reload-records.sync="reloadRecords"
                        @click-create="clickCreate()">
          <template v-slot:table-rows="{ props }">
            <q-tr :props="props">
              <template v-for="col in props.cols">
                <q-td :key="col['name']" :props="props">
                  <template v-if="col['name'] === 'actions'">
                    <q-btn size="sm" flat round
                           :color="(props.row.is_active)?'green':'red'"
                           :icon="(props.row.is_active)?'fas fa-unlock':'fas fa-lock'"
                           @click.prevent="clickLock(props.row)"/>
                    <q-btn size="sm" flat round
                           icon="fas fa-eye"
                           @click.prevent="clickCreate(props.row.id)"/>
                    <q-btn size="sm" flat round
                           color="negative"
                           icon="fas fa-trash"
                           @click.prevent="clickDelete(props.row)"/>
                  </template>
                  <template v-else>
                    {{ props.row[col['name']] }}
                  </template>
                </q-td>
              </template>
            </q-tr>
          </template>
        </x-table-server>
      </div>
    </div>
    <user-form :show-dialog.sync="showDialog"
               :record-id="recordId"
               @success="reloadRecords = true"></user-form>
    <user-lock :show-dialog.sync="showDialogLock"
               :record="record"
               @success="reloadRecords = true"></user-lock>
    <x-dialog-delete :show-dialog.sync="showDialogDelete"
                     :resource="resource"
                     :record="record"
                     @success="reloadRecords = true"></x-dialog-delete>
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import UserForm from "pages/User/Form";
import UserLock from "pages/User/Lock";
import XTableServer from "components/XTableServer";
import XDialogDelete from "components/XDialogDelete";

export default {
  name: 'UserIndex',
  components: {UserLock, UserForm, XCardTable, XTableServer, XDialogDelete},
  data() {
    return {
      showDialog: false,
      showDialogLock: false,
      showDialogDelete: false,
      reloadRecords: false,
      resource: 'api/user',
      title: '',
      recordId: null,
      record: null
    }
  },
  mounted() {
    this.title = 'Usuarios';
  },
  methods: {
    clickCreate(recordId = null) {
      this.recordId = recordId;
      this.showDialog = true;
    },
    clickLock(record) {
      this.record = record;
      this.showDialogLock = true;
    },
    clickDelete(record) {
      this.showDialogDelete = true;
      this.record = record;
    }
  }
}
</script>
