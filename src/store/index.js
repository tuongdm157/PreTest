import Vue from 'vue'
import Vuex from 'vuex'
import timelineModule from './modules/timeline.module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    timelineModule
  }
});
