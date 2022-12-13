<template>
  <div style="position: relative;">
    <q-select
      :value="value"
      outlined
      dense
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :label="label"
      :options="filter_locations"
      option-value="id"
      option-label="name"
      emit-value
      map-options
      options-dense
      @input="handleInput($event)"
      @filter="filterLocation">
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            Sin resultados
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'XSelectLocation',
  props: {
    label: {
      default: 'Ubigeo',
    },
    value: {
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      default: null,
    },
  },
  data() {
    return {
      filter_locations: [],
    }
  },
  created() {
    this.filter_locations = this.locations;
  },
  computed: {
    ...mapState('auth', ['locations']),
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
    filterLocation(val, update, abort) {
      update(() => {
        const needle = _.lowerCase(val);
        this.filter_locations = _.filter(this.locations, v => _.lowerCase(v.name).indexOf(needle) > -1);
      })
    },
  }
}
</script>
