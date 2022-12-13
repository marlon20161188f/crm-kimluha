<template>
  <div>
    <q-markup-table dense flat>
      <thead>
        <tr>
          <th class="text-left">Fecha</th>
          <th class="text-left">Medio</th>
          <th class="text-left">Comentario</th>
          <th class="text-right"><q-btn unelevated color="blue" @click.prevent="clickCreate()">Nuevo</q-btn></th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="row in records">
        <td>{{ row.date_of_tracking }}</td>
        <td><q-icon :name="row.action_icon" size="md" class="q-mr-xs"></q-icon>{{ row.action_name }}</td>
        <td>{{ row.commentary }}</td>
        <td class="text-right">
          <q-btn size="sm" flat round
                 color="negative"
                 icon="fas fa-trash"
                 @click.prevent="clickDelete(row)"/>
        </td>
      </tr>
      </tbody>
    </q-markup-table>
    <tracking-form :show-dialog.sync="showDialog"
                   :contact-id="contactId"
                   :record-id="recordId"
                   @success="getRecords"></tracking-form>
    <x-dialog-delete :show-dialog.sync="showDialogDelete"
                     :resource="resource"
                     :record="record"
                     @success="getRecords"></x-dialog-delete>
  </div>
</template>
<script>

import TrackingForm from "pages/Contact/Tracking/Form";
import XDialogDelete from "components/XDialogDelete";

export default {
  name: 'TrackingIndex',
  components: {TrackingForm, XDialogDelete},
  props: ['contactId'],
  data() {
    return {
      showDialog: false,
      showDialogDelete: false,
      resource: 'api/contact/tracking',
      title: '',
      recordId: null,
      records: [],
      record: null
    }
  },
  mounted() {
    this.title = 'Contactos';
    this.getRecords();
  },
  methods: {
    getRecords() {
      this.$axios.get(`/${this.resource}/records/${this.contactId}`)
        .then(response => {
          this.records = response.data.data;
        });
    },
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
