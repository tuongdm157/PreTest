<template>
  <div>
    <div class="container-flex" v-for="item in couponActive" :key="item.id">
      <div>
        <img class="container-flex-img" :src="require(`@/assets/${item.thumbnail}.jpg`)" />
      </div>
      <div class="container-flex-content">
        <span class="container-flex-content-title">{{item.title}}</span>
        <span class="sp_descript">{{`Validity period ${item.endDate}`}}</span>
      </div>
      <div>
        <b-button
          class="container-flex-close btn-fontSize"
          size="sm"
          style="border-radius: 0px 0px 0px 4.5px;"
          @click="onRemoveCoupon(item.id)"
        >X</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    couponActive: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onRemoveCoupon(id) {
      this.$emit("onRemoveCoupon", id);
    }
  }
};
</script>