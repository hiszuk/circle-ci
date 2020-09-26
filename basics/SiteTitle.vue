<template>
  <div class="site-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'SiteTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
