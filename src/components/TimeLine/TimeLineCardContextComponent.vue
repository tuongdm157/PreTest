<template>
  <div v-if="isShowBox">
    <b-card class="text-center container-flex-box">
      <div v-for="item in initButtons" :key="item.id" class="container-flex-box-card">
        <span
          v-if="item.isActive"
          class="container-flex-box-title"
          @click="onShowCoupon(item.id)"
        >{{item.action}}</span>
        <i
          v-if="item.isActive"
          class="fa-3x container-flex-box-icon-color"
          :class="item.className"
          aria-hidden="true"
        ></i>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    isShowBox: {
      type: Boolean,
      default: true
    },

    initButtons: {
      type: Array,
      default: () => []
    },
  },

  methods: {
      onShowCoupon(id){
          this.$emit('showPopup', id)
      }
  },
};
</script>