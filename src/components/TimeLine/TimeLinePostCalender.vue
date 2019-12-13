<template>
  <div>
    <b-row>
      <b-col cols="1"></b-col>
      <b-col cols="2">
        <span class="ml-2">Publish date</span>
      </b-col>
      <b-col cols="6">
        <b-form-radio
          v-model="selected"
          @input="onChangeData()"
          class="radios_option"
          value="A"
        >Publish now</b-form-radio>
        <div class="radios_option pt-2">
          <b-form-radio v-model="selected" class="pt-2" value="B"></b-form-radio>
          <Datepicker placeholder="MM/DD/YYYY" format="MM/dd/yyyy" class="mr-2 datepicker"></Datepicker>
          <VueTimepicker format="HH:mm" hide-clear-button class="mr-2"></VueTimepicker>
          <div>
            <b-badge class="badgeLocal" pill variant="dark">GMT+7:00</b-badge>
          </div>
        </div>
      </b-col>
    </b-row>
    <hr />
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  components: {
    Datepicker,
    VueTimepicker
  },
  data() {
    return {
      selected: "A"
    };
  },

  methods: {
    onChangeData() {
      let name = this.selected === "A" ? "Publish" : "Schedule";
      this.$emit("onChangeData", name);
    }
  }
};
</script>