<template>
  <q-inner-loading :showing="loading">
    <q-spinner-dots size="50px" color="primary" />
  </q-inner-loading>
</template>

<script>
export default {
  name: 'XLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
  }
}
</script>
