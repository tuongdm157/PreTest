<template>
  <b-button
    class="not-focusable btn-fontSize"
    variant="success"
    :size="size"
    :disabled="isShowButton"
  >{{title}}</b-button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Publish"
    },
    size: {
      type: String,
      default: "null"
    },
    isShowButton: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style>
</style>