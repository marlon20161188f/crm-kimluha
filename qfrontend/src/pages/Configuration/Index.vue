<template>
  <div class="content-index" v-if="load">
    <div class="row q-col-gutter-md">
      <div class="col-24">
        <x-card-table title="CONTACTOS">
          <template v-slot:header>
            <div class="flex justify-between items-center">
              <q-tabs
                v-model="tabActive"
                active-color="blue">
                <q-tab name="state" label="ESTADOS" v-if="user && user.role_id !== 'operator'"/>
                <q-tab name="information" label="MIS DATOS"/>
                <q-tab name="password" label="CAMBIAR CONTRASEÑA"/>
              </q-tabs>
              <q-btn unelevated color="blue" @click.prevent="clickCreateState()"
                     v-if="tabActive === 'state' && user && user.role_id !== 'operator'">CREAR
                ESTADO
              </q-btn>
            </div>
          </template>
          <template v-slot:table>
            <q-tab-panels v-model="tabActive" animated keep-alive>
              <q-tab-panel name="state" class="q-pa-none">
                <x-table-server :resource="resourceState"
                                :show-header="false"
                                :show-filter="false"
                                :reload-records.sync="reloadRecords">
                  <template v-slot:table-rows="{ props }">
                    <q-tr :props="props">
                      <template v-for="col in props.cols">
                        <q-td :key="col['name']" :props="props">
                          <template v-if="col['name'] === 'actions'">
                            <q-btn size="sm" flat round
                                   icon="fas fa-eye"
                                   @click.prevent="clickCreateState(props.row.id)"/>
                          </template>
                          <template v-else-if="col['name'] === 'color'">
                            <q-badge rounded :style="{'background-color': props.row.color}"/>
                          </template>
                          <template v-else>
                            {{ props.row[col['name']] }}
                          </template>
                        </q-td>
                      </template>
                    </q-tr>
                  </template>
                </x-table-server>
              </q-tab-panel>
              <q-tab-panel name="information">
                <div class="row q-col-gutter-md">
                  <div class="col-24 col-md-8">
                    <x-input label="DNI"
                             v-model="profile.number"
                             :error="errors.number"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-input label="Nombre"
                             v-model="profile.name"
                             :error="errors.name"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-input label="Apellido"
                             v-model="profile.lastname"
                             :error="errors.lastname"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-input label="Email"
                             v-model="profile.email"
                             :error="errors.email"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-select label="Perfil"
                              v-model="profile.role_id"
                              :readonly="true"
                              :options="roles"
                              :error="errors.role_id"></x-select>
                  </div>
                </div>
                <div class="row q-col-gutter-md" style="margin-top: 18px;">
                  <div class="col-24 text-right">
                    <q-btn unelevated color="blue" :loading="loadingSubmit" @click.prevent="updateProfile">GUARDAR
                      CAMBIOS
                    </q-btn>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="password">
                <div class="row q-col-gutter-md">
                  <div class="col-24 col-md-8">
                    <x-input label="Contraseña actual"
                             v-model="form.password"
                             :error="errors.password"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-input label="Nueva contraseña"
                             v-model="form.password_new"
                             :error="errors.password_new"></x-input>
                  </div>
                  <div class="col-24 col-md-8">
                    <x-input label="Repetir contraseña"
                             v-model="form.password_new_2"
                             :error="errors.password_new_2"></x-input>
                  </div>
                </div>
                <div class="row q-col-gutter-md" style="margin-top: 18px;">
                  <div class="col-24 text-right">
                    <q-btn unelevated color="blue" :loading="loadingSubmit"
                           @click.prevent="updatePassword">GUARDAR CAMBIOS
                    </q-btn>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </x-card-table>
      </div>
    </div>
    <state-form :show-dialog.sync="showDialogState"
                :record-id="recordId"
                @success="reloadRecords = true"></state-form>
  </div>
</template>
<script>

import XCardTable from "components/XCardTable";
import XTableServer from "components/XTableServer";
import StateForm from "pages/Configuration/StateForm";
import {mapState} from "vuex";

export default {
  name: 'ConfigurationIndex',
  components: {StateForm, XCardTable, XTableServer},
  data() {
    return {
      load: false,
      loading: false,
      loadingSubmit: false,
      showDialogState: false,
      showDialogLock: false,
      resourceState: 'api/state',
      tabActive: 'state',
      reloadRecords: false,
      errors: {},
      form: {},
      roles: [],
      recordId: null,
      profile: {}
    }
  },
  mounted() {
    this.load = true;
    if (this.user && this.user.role_id !== 'operator') {
      this.tabActive = 'state';
    } else {
      this.tabActive = 'information';
    }
    this.getProfileTable();
    this.getProfile();
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    initForm() {
      this.profile = {}
    },
    initProfile() {
      this.profile = {};
    },
    clickCreateState(recordId) {
      this.recordId = recordId;
      this.showDialogState = true;
    },
    clickLock(recordId) {
      this.showDialogLock = true;
    },
    async getProfileTable() {
      this.loading = true;
      await this.$axios.get(`/api/auth/profile/tables`)
        .then(response => {
          this.roles = response.data.roles;
        });
      this.loading = false;
    },
    async getProfile() {
      this.loading = true;
      await this.$axios.get(`/api/auth/profile`)
        .then(response => {
          this.profile = response.data.data;
        });
      this.loading = false;
    },
    async updateProfile() {
      this.loading = true;
      this.loadingSubmit = true;
      this.errors = {};
      await this.$axios.post(`/api/auth/profile`, this.profile)
        .then(response => {
          if (response.data.success) {
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
          } else {
            this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
          }
        })
        .catch(error => {
          this.errors = error;
        });
      this.loadingSubmit = false;
      this.loading = false;
    },
    async updatePassword() {
      this.loading = true;
      this.loadingSubmit = true;
      this.errors = {};
      await this.$axios.post(`/api/auth/update_password`, this.form)
        .then(response => {
          if (response.data.success) {
            this.initProfile();
            this.$q.notify({message: response.data.message, icon: 'fas fa-check', color: 'positive'});
          } else {
            this.$q.notify({message: response.data.message, icon: 'fas fa-times', color: 'red'});
          }
        })
        .catch(error => {
          this.errors = error;
        });
      this.loadingSubmit = false;
      this.loading = false;
    },
  }
}
</script>
