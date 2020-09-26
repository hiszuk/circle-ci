<template>
  <div class="menu">
    <MenuItem class="menu-item"
      v-for="item in items"
      :key = "item.label"
      v-bind = "item"
      @clickMenuItem = "onClickMenuItem"
    />
  </div>
</template>

<script>
import MenuItem from '~/components/MenuItem'
export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  props: {
    items: {
      type: Array,
      default: [],
      required: true
    }
  },
  methods: {
    onClickMenuItem({ name }) {
      this.$emit('clickMenuItem', { name })
    },
  },
}
</script>