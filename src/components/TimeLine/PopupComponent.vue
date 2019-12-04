<template>
  <div>
    <b-modal id="my-modal" title="Coupon" centered size="lg" style="height: 800px">
      <div class="text-left">
        <span class="des">Pre-valid and valid coupons are listed</span>
      </div>
      <hr />
      <div>
        <b-row>
          <b-col cols="2">
            <img src="@/assets/thumbnail.png" alt width="80px" />
          </b-col>
          <b-col cols="7">
            <span class="title-color">Valid</span>
            <br />
            <span>test</span>
            <br />
            <span class="sp-des">Validity period 02/12/2019 00:00 ~ 08/07/2018 23:59</span>
          </b-col>
          <b-col cols="3" class="btn-center">
            <b-button variant="outline-success">Select</b-button>
          </b-col>
        </b-row>
      </div>
      <hr />
      <div slot="modal-footer" class="w-100">
        <div class="mt-2 btn-center">
          <b-button class="not-focusable btn-fontSize">Close</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {};
</script>

<style>
.sp-des {
  font-size: smaller;
  font-weight: 500;
  color: #ccc;
}
.des {
  color: #ccc;
}
.title-color {
  color: #007bff;
}
</style>