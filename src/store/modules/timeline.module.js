import { ApiService } from '../../services/api.service'
export default {
    namespaced: true,

    state: {
        coupon: [],
        page: null,
        pageSize: null,
        total: null,
        initButton: [
            { id: 1, name: "Photo", className: "fa fa-image", isActive: true, action: "Upload Photo" },
            { id: 2, name: "Video", className: "fa fa-caret-square-o-right", isActive: false, action: "Upload video" },
            { id: 3, name: "Sticky", className: "fa fa-smile-o", isActive: false, action: "Select sticker" },
            { id: 4, name: "Coupon", className: "fa fa-columns", isActive: false, action: "Select coupon" },
            { id: 5, name: "Link", className: "fa fa-link", isActive: false, action: "Enter link URL" },
            { id: 6, name: "Survey", className: "fa fa-address-book-o", isActive: false, action: "Select a survey" }
        ],
    },

    getters: {
        couponInActive(state) {
            return state.coupon.filter(data => data.status === 'INACTIVE');
        },

        couponActive(state) {
            return state.coupon.filter(data => data.status === 'ACTIVE');
        },

        initButtons(state) {
            return state.initButton;
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
        },

        REMOVE_ACTIVE_CLASS(state, id) {
            state.initButton = state.initButton.map(item => {
                item.isActive = (item.id === id) ? true : false
                return item
            });
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
        },

        removeActiveClass(context, id) {
            context.commit('REMOVE_ACTIVE_CLASS', id)
        }
    }
}