import { ApiService } from '../../services/api.service'
export default {
    namespaced: true,

    state: {
        coupon: [],
        page: null,
        pageSize: null,
        total: null
    },

    getters: {
        couponInActive(state) {
            return state.coupon.filter(data => data.status === 'INACTIVE');
        },

        couponActive(state) {
            return state.coupon.filter(data => data.status === 'ACTIVE');
        }
    },

    mutations: {
        GET_COUPON(state, payload) {
            state.coupon = [...payload.resultData.list];
            state.page = payload.resultData.page;
            state.pageSize = payload.resultData.pageSize;
            state.total = payload.resultData.total;
        },

        UPDATE_COUPON(state, payload) {
            state.coupon = state.coupon.map(item => {
                if (item.id === payload) {
                    item.status = 'ACTIVE'
                }
                return item
            })
        },

        REMOVE_COUPON(state, payload) {
            state.coupon = state.coupon.map(item => {
                if (item.id === payload) {
                    item.status = 'INACTIVE'
                }
                return item
            })
        }
    },

    actions: {
        getCoupon(context) {
            ApiService.get('/coupon').then(res => {
                if (res.data && res.data.resultCode === 1) {
                    context.commit("GET_COUPON", res.data)
                }
                else {
                    throw new Error(res.data.resultData.errorMessage)
                }
            })
                .catch(err => { throw new Error(err) });
        },

        updateCoupon(context, id) {
            context.commit('UPDATE_COUPON', id);
        },

        removeCoupon(context, id) {
            context.commit('REMOVE_COUPON', id);
        }
    }
}