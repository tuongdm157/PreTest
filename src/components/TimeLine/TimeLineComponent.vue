<template>
  <div>
    <b-container fluid style="width: 1024px">
      <h1>Timeline post</h1>
      <hr />
      <div class="mt-5">
        <b-button class="not-focusable btn-saveDraft btn-fontSize">Save draft</b-button>
        <div class="floatR">
          <base-button :title="titleButton" :isShowButton="isShowButton"></base-button>
        </div>
        <hr />
      </div>
      <TimeLinePostCalender @onChangeData="onChangeData"></TimeLinePostCalender>
      <div>
        <b-row>
          <b-col cols="10">
            <b-card>
              <div slot="header">
                <b-button
                  v-for="item in initButtons"
                  :key="item.id"
                  class="btn btn-light not-focusable mt-1"
                  :class="{active: item.isActive}"
                  @click="showPopup(item.id)"
                  v-b-tooltip.hover
                  :title="item.name"
                  aria-pressed="true"
                >
                  <i :class="item.className"></i>
                </b-button>
              </div>
              <TimeLineContainerComponent
                :isShowBox="isShowBox"
                :initButtons="initButtons"
                @showPopup="showPopup"
              />
              <TimeLineCardComponent :couponActive="couponActive" @onRemoveCoupon="onRemoveCoupon"></TimeLineCardComponent>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <div class="mt-5 btn-center">
        <base-button :title="titleButton" :size="'lg'" :isShowButton="isShowButton"></base-button>
      </div>
      <PopupComponent :couponInActive="couponInActive" :couponActive="couponActive" />
    </b-container>
  </div>
</template>
<script>
import PopupComponent from "./PopupComponent.vue";
import TimeLineContainerComponent from "./TimeLineContainerComponent.vue";
import TimeLineCardComponent from "./TimeLineCardComponent.vue";
import TimeLinePostCalender from "./TimeLinePostCalender.vue";
import BaseButton from "../base/ButtonCommon.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PopupComponent,
    TimeLineContainerComponent,
    TimeLineCardComponent,
    TimeLinePostCalender,
    BaseButton
  },

  data() {
    return {
      isShowBox: true,
      isShowButton: true,
      titleButton: "Publish"
    };
  },

  mounted() {},

  computed: {
    ...mapGetters({
      couponInActive: "timelineModule/couponInActive",
      couponActive: "timelineModule/couponActive",
      initButtons: "timelineModule/initButtons"
    })
  },

  watch: {
    couponActive() {
      if (this.couponActive.length > 0) {
        this.isShowBox = false;
        this.isShowButton = false;
      } else {
        this.isShowButton = true;
      }
    }
  },

  mounted() {
    this.getCoupon();
  },

  methods: {
    getCoupon() {
      this.$store.dispatch("timelineModule/getCoupon");
    },

    showPopup(id) {
      this.removeActiveClass(id);
      switch (id) {
        case 1:
          this.showPopupPhoto();
          break;
        case 2:
          this.showPopupVideo();
          break;
        case 3:
          this.showPopupSticky();
          break;
        case 4:
          this.showPopupCoupon();
          break;
        case 5:
          this.showPopupLink();
          break;
        case 6:
          this.showPopupServey();
          break;

        default:
          break;
      }
    },

    removeActiveClass(id) {
      this.$store.dispatch("timelineModule/removeActiveClass", id);
    },

    showPopupPhoto() {
      alert("Refer Coupon Function");
    },

    showPopupVideo() {
      alert("Refer Coupon Function");
    },

    showPopupSticky() {
      alert("Refer Coupon Function");
    },

    showPopupCoupon() {
      this.$bvModal.show("my-modal");
    },

    showPopupLink() {
      alert("Refer Coupon Function");
    },

    showPopupServey() {
      alert("Refer Coupon Function");
    },

    onRemoveCoupon(id) {
      this.$store.dispatch("timelineModule/removeCoupon", id);
      this.isShowBox = true;
    },

    onChangeData(name) {
      this.titleButton = name;
    }
  }
};
</script>