<template>
  <q-input :label="label"
           dense
           outlined
           :autogrow="autogrow"
           :counter="counter"
           :maxlength="maxLength"
           :value="value"
           :input-class="inputClass"
           :disable="disable"
           :readonly="readonly"
           :error="!!error"
           :no-error-icon="true"
           :dense="dense"
           class="x-input"
           @input="handleInput($event)">
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<style scoped>
  .x-input.q-field--with-bottom {
      padding-bottom: 0;
  }
</style>

<script>
export default {
  name: 'XInput',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    inputClass: {
      type: String,
      default: null,
    },
    disable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autogrow: {
      type: Boolean,
      default: false,
    },
    counter: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      default: null
    },
    error: {
      default: null,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    },
  }
}
</script>
