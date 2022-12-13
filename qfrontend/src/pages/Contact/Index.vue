<template>
  <div class="content-index">
    <div class="row q-col-gutter-md">
      <div class="col-24">
        <x-table-contact :title="title"
                         :resource="resource"
                         :show-filter="true"
                         :reload-records.sync="reloadRecords"
                         :show-button-new="user && user.role_id !== 'operator'"
                         :show-button-export="user && user.role_id !== 'operator'"
                         :show-button-import="user && user.role_id !== 'operator'"
                         :show-button-to-assign="user && user.role_id !== 'operator'"
                         @success-to-assign="reloadRecords = true"
                         @click-create="clickCreate()">
          <template v-slot:table-rows="{ props }">
            <q-tr :props="props">
              <template v-for="col in props.cols">
                <q-td :key="col['name']" :props="props">
                  <template v-if="col['name'] === 'actions'">
                    <q-btn size="sm" flat round
                           icon="fas fa-eye"
                           @click.prevent="clickCreate(props.row.id)"/>
                  </template>
                  <template v-else-if="col['name'] === 'action_name'">
                    <q-icon :name="props.row.action_icon" size="md" class="q-mr-xs"></q-icon>
                    {{ props.row.action_name }}
                  </template>
                  <template v-else>
                    {{ props.row[col['name']] }}
                  </template>
                </q-td>
              </template>
            </q-tr>
          </template>
        </x-table-contact>
      </div>
    </div>
    <contact-form :show-dialog.sync="showDialog"
                  :record-id="recordId"
                  @success="reloadRecords = true"></contact-form>
    <x-dialog-delete :show-dialog.sync="showDialogDelete"
                     :resource="resource"
                     :record="record"
                     @success="reloadRecords = true"></x-dialog-delete>
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import ContactForm from "pages/Contact/Form";
import XDialogDelete from "components/XDialogDelete";
import XTableContact from "components/XTableContact";
import {mapState} from "vuex";

export default {
  name: 'ContactIndex',
  components: {XTableContact, ContactForm, XCardTable, XDialogDelete},
  data() {
    return {
      showDialog: false,
      showDialogDelete: false,
      reloadRecords: false,
      resource: 'api/contact',
      title: '',
      recordId: null,
      record: null
    }
  },
  mounted() {
    this.title = 'Contactos';
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    clickCreate(recordId = null) {
      this.recordId = recordId;
      this.showDialog = true;
    },
    clickDelete(record) {
      this.showDialogDelete = true;
      this.record = record;
    }
  }
}
</script>
