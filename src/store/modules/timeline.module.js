import {ApiService} from '../../services/api.service'
export default {
    namespaced: true,

    state: {
        coupon: []
    },

    getters: {},

    mutations: {
        GET_COUPON(state, payload){
            state.coupon = [...payload.resultData.list];
        }
    },

    actions: {
        getCoupon(context){
            ApiService.get('/coupon').then(res=>{
                if(res.data){
                    console.log(res.data)
                    context.commit("GET_COUPON", res.data)
                }
            })
            .catch (err=> console.log(err));
        }
    }
}