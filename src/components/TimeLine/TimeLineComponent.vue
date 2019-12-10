<template>
  <div>
    <b-container fluid style="width: 1024px">
      <h1>Timeline post</h1>
      <hr />

      <div class="mt-5">
        <b-button class="not-focusable btn-saveDraft btn-fontSize">Save draft</b-button>
        <b-button variant="success" class="not-focusable btn-fontSize" style="float: right">Schedule</b-button>
        <hr />
      </div>

      <div>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="2">
            <span class="ml-2">Publish date</span>
          </b-col>
          <b-col cols="6">
            <b-form-radio class="radios_option" name="some-radios">Option A</b-form-radio>
            <div class="radios_option pt-2" style="display: flex">
              <b-form-radio class="pt-2"></b-form-radio>
              <b-input type="date"></b-input>
              <b-input class="ml-3"></b-input>
            </div>
          </b-col>
          <b-col cols="3" style="margin-top:36px;">
            <b-badge
              pill
              variant="dark"
              style="color: black;
                    background-color: white;
                    border: 1px solid black;"
            >GMT+7:00</b-badge>
          </b-col>
        </b-row>
        <hr />
      </div>

      <div>
        <b-row>
          <b-col cols="10">
            <b-card>
              <div slot="header">
                <b-button class="btn btn-light not-focusable mt-1">
                  <i class="fa fa-image"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable mt-1">
                  <i class="fa fa-caret-square-o-right"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable mt-1">
                  <i class="fa fa-smile-o"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable mt-1" @click="showPopupCoupon">
                  <i class="fa fa-folder"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable mt-1">
                  <i class="fa fa-link"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable">
                  <i class="fa fa-address-book-o"></i>
                </b-button>
              </div>

              <div class="container-flex" v-for="item in couponActive" :key="item.id">
                <div>
                  <img class="container-flex-img" :src="require(`@/assets/${item.thumbnail}.jpg`)"/>
                </div>
                <div class="container-flex-content">
                  <span class="container-flex-content-title">{{item.title}}</span>
                  <span class="sp_descript">{{`Validity period ${item.startDate} ~ ${item.endDate}`}}</span>
                </div>
                <div>
                  <b-button class="container-flex-close btn-fontSize" size="sm" style="border-radius: 0px 0px 0px 4.5px;" @click="onRemoveCoupon(item.id)">X</b-button>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <div class="mt-5 btn-center">
        <b-button
          class="not-focusable btn-fontSize"
          variant="success"
          size="lg"
          style="width: 160px;"
        >Schedule</b-button>
      </div>
      <PopupComponent :couponInActive="couponInActive" :couponActive="couponActive" />
    </b-container>
  </div>
</template>
<script>
import PopupComponent from "./PopupComponent.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PopupComponent
  },

  computed: {
    ...mapGetters({
      couponInActive: "timelineModule/couponInActive",
      couponActive: "timelineModule/couponActive"
    })
  },

  mounted() {
    this.getCoupon();
  },

  methods: {
    getCoupon() {
      this.$store.dispatch("timelineModule/getCoupon");
    },

    showPopupCoupon() {
      this.$bvModal.show("my-modal");
    },

    onRemoveCoupon(id){
      this.$store.dispatch("timelineModule/removeCoupon", id)
    }
  }
};
</script>

<style>
.radios_option .custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #28a745;
  background-color: #28a745;
}
.container-flex-img {
  width: 110px;
  margin-right: 20px;
}

.container-flex {
  display: flex;
  border: 1px solid #cccccc;
  position: relative;
}

.container-flex-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-flex-close {
  position: absolute;
  right: 0px;
}
</style>