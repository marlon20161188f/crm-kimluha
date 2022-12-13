<template>
  <div class="flex items-center">
    <q-avatar :icon="icon" :style="{'color': color, 'background-color': getHex(color), 'border': '2px solid '+color}"/>
    <div class="q-ml-md">
      <h5 class="q-ma-none">{{ total }}</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'XCardIcon',
  props: {
    total: {
      type: Number,
      default: '0',
    },
    title: {
      type: String,
      default: 'Sin título',
    },
    icon: {
      type: String,
      default: 'fal fa-users',
    },
    color: {
      type: String
    },
  },
  methods: {
    getHex(hex) {
      let c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');

      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', 0.15)';
    },
  }
}
</script>
