<template>
  <div class="content-index">
<!--    <div class="row q-col-gutter-md q-mb-md">-->
<!--      <div class="col-shrink flex items-center">-->
<!--        <div style="font-size: 24px; font-weight: 500">100 CONTACTOS</div>-->
<!--      </div>-->
<!--&lt;!&ndash;      <div class="col-shrink">&ndash;&gt;-->
<!--&lt;!&ndash;        <q-btn unelevated color="blue" @click.prevent="clickCreate()">CREAR CONTACTO</q-btn>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="col-shrink">&ndash;&gt;-->
<!--&lt;!&ndash;        <q-btn unelevated outline @click.prevent="clickUpload">CARGAR</q-btn>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
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
                           icon="fas fa-eye"
                           @click.prevent="clickCreate(props.row.id)"/>
                  </template>
                  <template v-else>
                    {{ props.row[col['name']] }}
                  </template>
                </q-td>
              </template>
            </q-tr>
          </template>
        </x-table-server>

<!--        <x-card-table title="CONTACTOS">-->
<!--          <template v-slot:header>-->
<!--            <div class="row q-col-gutter-x-md q-mb-md">-->
<!--              <div class="col-6">-->
<!--                <x-select></x-select>-->
<!--              </div>-->
<!--              <div class="col-6">-->
<!--                <x-input></x-input>-->
<!--              </div>-->
<!--              <div class="col-12 text-right">-->
<!--                <q-btn unelevated color="grey" @click.prevent="clickDownload">-->
<!--                  <q-icon name="fas fa-arrow-down" class="q-mr-sm" size="16px"></q-icon>-->
<!--                  EXCEL</q-btn>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row q-col-gutter-x-xs">-->
<!--              <div class="col"><x-btn-state number="2" text="TEXTO" color="red"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="5" text="TEXTO" color="orange"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="5" text="TEXTO" color="green"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="10" text="TEXTO" color="blue"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="8" text="TEXTO" color="red"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="7" text="TEXTO" color="red"></x-btn-state></div>-->
<!--              <div class="col"><x-btn-state number="3" text="TEXTO" color="red"></x-btn-state></div>-->
<!--            </div>-->
<!--          </template>-->
<!--          <template v-slot:table>-->
<!--            <q-table-->
<!--              flat-->
<!--              :data="rows"-->
<!--              :columns="columns"-->
<!--              row-key="id"-->
<!--              :pagination.sync="pagination"-->
<!--              hide-pagination>-->
<!--              <template v-slot:body="props">-->
<!--                <q-tr :props="props">-->
<!--                  <template v-for="col in props.cols">-->
<!--                    <q-td :key="col['name']" :props="props">-->
<!--                      <template v-if="col['name'] === 'actions'">-->
<!--                        <q-btn size="md" flat round-->
<!--                               icon="far fa-clock"-->
<!--                               @click.prevent="clickHistory(props.row.id)"/>-->
<!--                        <q-btn size="md" flat round-->
<!--                               icon="far fa-eye"-->
<!--                               @click.prevent="clickCreate(props.row.id)"/>-->
<!--                      </template>-->
<!--                      <template v-else>-->
<!--                        {{ props.row[col['name']] }}-->
<!--                      </template>-->
<!--                    </q-td>-->
<!--                  </template>-->
<!--                </q-tr>-->
<!--              </template>-->
<!--            </q-table>-->
<!--            <div class="row justify-center q-mt-md">-->
<!--              <q-pagination-->
<!--                v-model="pagination.page"-->
<!--                color="grey-8"-->
<!--                :max="pagesNumber"-->
<!--              />-->
<!--            </div>-->
<!--          </template>-->
<!--        </x-card-table>-->
      </div>
    </div>
    <contact-form :show-dialog.sync="showDialog"
                  :record-id="recordId"
                  @success="reloadRecords = true"></contact-form>
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import XBtnState from "components/XBtnState";
import XTableServer from "components/XTableServer";
import ContactForm from "pages/Contact/Form";

export default {
  name: 'ContactIndex',
  components: {ContactForm, XCardTable, XBtnState, XTableServer},
  data() {
    return {
      load: false,
      showDialog: false,
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
  methods: {
    clickCreate(recordId = null) {
      this.recordId = recordId;
      this.showDialog = true;
    },
  }
}
</script>
