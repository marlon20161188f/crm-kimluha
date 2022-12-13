<template>
  <div class="x-btn-state cursor-pointer" :style="{'background-color': color}" @click.prevent="$emit('click-emit')">
    <span style="font-size: 18px; margin-right: 8px;">{{ count }}</span> {{ text }}
    <q-icon name="far fa-star" size="xs" class="q-ml-md" v-if="isActive"></q-icon>
  </div>
</template>

<style scoped>
.x-btn-state {
  color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>

export default {
  name: 'XBtnState',
  props: {
    count: {
      type: Number,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  methods: {}
}
</script>
