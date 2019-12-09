<template>
  <div>
    <b-modal id="my-modal" title="Coupon" centered size="lg" style="height: 800px">
      <div class="text-left">
        <span class="descript">Pre-valid and valid coupons are listed</span>
      </div>
      <div v-for="coupon in couponActives" :key="coupon.id" class="coupon_preview">
        <b-row>
          <b-col cols="2">
            <img :src="require(`@/assets/${coupon.thumbnail}.jpg`)" lalt="thumbnail" width="80px" />
          </b-col>
          <b-col cols="7">
            <span class="title_color">{{coupon.title}}</span>
            <br />
            <span>test</span>
            <br />
            <span class="sp_descript">{{`Validity period ${coupon.startDate} ~ ${coupon.endDate}`}}</span>
          </b-col>
          <b-col cols="3" class="btn-center">
            <b-button variant="outline-success" @click="onSelectCoupon(coupon.id)">Select</b-button>
          </b-col>
        </b-row>
      </div>
      <div slot="modal-footer" class="w-100">
        <div class="mt-2 btn-center">
          <b-button class="not-focusable btn-fontSize">Close</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("timelineModule/getCoupon");
  },

  methods: {
    onSelectCoupon(data){
      console.log(data)
    }
  },

  computed: {
    ...mapGetters({ couponActives: "timelineModule/couponActive" })
  }
};
</script>

<style>
.coupon_preview {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
}
/* .sp_descript {
  font-size: smaller;
  font-weight: 500;
  color: #ccc;
}
.descript {
  color: #ccc;
}
.title_color {
  color: #007bff;
} */
</style>