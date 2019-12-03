<template>
  <div>
    <b-container fluid style="width: 1024px">
      <h1>Timeline post</h1>
      <hr />

      <div class="mt-5">
        <b-button>Save draft</b-button>
        <b-button variant="success" style="float: right">Save draft</b-button>
        <hr />
      </div>
      <!-- #28a745 -->
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
        <i class="fa fa-image"></i>
        <i class="fa fa-caret-square-o-right"></i>
        <i class="fa fa-smile-o"></i>
        <i class="fa fa-link"></i>
        <i class="fa fa-folder"></i>
        <i class="fa fa-address-book-o"></i>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {};
</script>

<style>
.abc .custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #28a745;
  background-color: #28a745;
}
</style>