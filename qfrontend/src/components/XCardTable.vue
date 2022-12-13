<template>
  <q-card flat>
    <q-card-section class="x-card-table--header">
      <slot name="header"></slot>
    </q-card-section>
    <q-card-section class="q-pt-none q-pl-none q-pr-none">
      <slot name="table"></slot>
    </q-card-section>
  </q-card>
</template>

<style scoped>
  .x-card-table--header {
    padding: 16px;
  }
</style>

<script>

export default {
  name: 'XCardTable',
  props: {
    title: {
      type: String,
      default: 'Sin título',
    },
  },
  methods: {

  }
}
</script>
