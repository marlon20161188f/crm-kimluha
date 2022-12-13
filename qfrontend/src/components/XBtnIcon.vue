<template>
  <div class="flex items-center">
    <q-avatar :icon="icon" :style="{'color': color, 'background-color': getHex(color), 'border': '2px solid '+color}"/>
    <div class="q-ml-md" v-if="title !== ''">
      <div class="q-ma-none" style="font-size: 14px; font-weight: 500" :style="{'color': isActive?'#000':'#ccc'}">{{ title }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'XBtnIcon',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'fal fa-users',
    },
    color: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    }
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
