<template>
  <div>
    <GlobalHeader @navigate="navigate" />
    <div class="container">
      <div>
        <h1 class="title">
          Work...
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from "~/containers/GlobalHeader";
export default {
  components: {
    GlobalHeader,
  },
  methods: {
    navigate({ name }) {
      console.log(`Nvigate: ${name}`);
      this.$router.push(name)
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

</style>
