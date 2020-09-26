<template>
  <div class="menu-item">
    <a class="menu-item-label" @click="clickMenuItem">
      {{ label }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    clickMenuItem() {
      this.$emit('clickMenuItem', {name: this.name})
    }
  },
}
</script>
