<template>
  <a :class="`button--${type}`" @click="clickLink">
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    type: {
      type: String,
      default: 'grey',
      required: false
    },
    label: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    clickLink() {
      this.$emit('click')
    }
  }
}
</script>