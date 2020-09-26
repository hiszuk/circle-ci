<template>
  <header class="global-header">
    <span class="global-header-title" @click="navigateRoot">
      <SiteTitle :title="siteTitle" />
    </span>
    <Menu
      class="global-header-menu"
      :items="menuItems"
      @clickMenuItem="onClickMenuItem"
    />
  </header>
</template>

<script>
import { mapState } from "vuex";
import SiteTitle from "~/basics/SiteTitle";
import Menu from "~/components/Menu";
export default {
  name: 'GlobalHeader',
  components: {
    SiteTitle,
    Menu,
  },
  computed: {
    ...mapState(["siteTitle", "menuItems"]),
  },
  methods: {
    onClickMenuItem({ name }) {
      this.$emit('navigate', { name })
    },
    navigateRoot() {
      this.$emit('navigate', { name: '/'})
    },
  },
}
</script>
