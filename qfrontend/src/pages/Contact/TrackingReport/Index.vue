<template>
  <div class="content-index">
    <div class="row q-col-gutter-md">
      <div class="col-24">
        <x-table-server :title="title"
                        :resource="resource"
                        :show-filter="true"
                        :show-button-new="false"
                        :show-button-export="user && user.role_id !== 'operator'"
                        :reload-records.sync="reloadRecords">
          <template v-slot:table-rows="{ props }">
            <q-tr :props="props">
              <template v-for="col in props.cols">
                <q-td :key="col['name']" :props="props">
                  <template v-if="col['name'] === 'action_name'">
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
        </x-table-server>
      </div>
    </div>
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import XTableServer from "components/XTableServer";
import {mapState} from "vuex";

export default {
  name: 'TrackingReportIndex',
  components: {XCardTable, XTableServer},
  data() {
    return {
      reloadRecords: false,
      resource: 'api/contact/tracking_report',
      title: '',
      recordId: null,
      record: null
    }
  },
  mounted() {
    this.title = 'Acciones por asesor';
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
  }
}
</script>
