<template>
  <q-card flat>
    <q-card-section class="x-card-panel--title">
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<style scoped>
  .text-h6 {
    font-size: 1rem;
  }
  .x-card-panel--title {
    padding: 8px 16px;
  }
</style>

<script>

export default {
  name: 'XCardPanel',
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
