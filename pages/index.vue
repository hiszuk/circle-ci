<template>
  <div>
    <GlobalHeader @navigate="navigate" />
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">
          circle-ci
        </h1>
        <div class="links">
          <LinkButton
            label="Documentation"
            type="green"
            @click="navigate({ name: 'https://nuxtjs.org/' })"
          />
          <LinkButton
            label="GitHub"
            type="grey"
            @click="navigate({ name: 'https://github.com/nuxt/nuxt.js' })"
          />
          <LinkButton
            label="Dummy Button"
            type="blue"
            @click="navigate({ name: '/' })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from "~/containers/GlobalHeader";
import Logo from "~/basics/Logo";
import LinkButton from "~/basics/LinkButton";
export default {
  components: {
    GlobalHeader,
    Logo,
    LinkButton
  },
  methods: {
    isInternalLink(path) {
      return !/^http/.test(path)
    },
    navigate({ name }) {
      console.log(`Nvigate: ${name}`);
      if (this.isInternalLink(name)) {
        this.$router.push(name);
      } else {
        location.href = name;
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
