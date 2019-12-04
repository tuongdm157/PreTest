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
            <b-form-radio class="abc" name="some-radios">Option A</b-form-radio>
            <div class="abc pt-2" style="display: flex">
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
                <b-button class="btn btn-light not-focusable mt-1" @click="getCoupon">
                  <i class="fa fa-folder"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable mt-1">
                  <i class="fa fa-link"></i>
                </b-button>
                <b-button class="btn btn-light not-focusable">
                  <i class="fa fa-address-book-o"></i>
                </b-button>
              </div>
              <b-card>
                <b-card-text>
                  Some quick example text to build on the
                  <em>card title</em> and make up the bulk of the card's
                  content.
                </b-card-text>
              </b-card>
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
      <PopupComponent />
    </b-container>
  </div>
</template>
<script>
import PopupComponent from "./PopupComponent.vue";
export default {
  components: {
    PopupComponent
  },

  methods: {
    getCoupon(){
      this.$bvModal.show('my-modal');
    }
  }
};
</script>

<style>
.abc .custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #28a745;
  background-color: #28a745;
}
.not-focusable:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.btn-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn.btn-saveDraft {
  color: black;
  background-color: #ccc;
  border: none;
}
.btn.btn-fontSize {
  font-weight: 600;
}
</style>