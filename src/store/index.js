import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadcrumb: [
            {
                path: '/',
                name: 'user'
            }
        ]
    },
    mutations: {
        delete(state, val) {
            const index = state.breadcrumb.findIndex((item) => item.name == val.name)
            state.breadcrumb.splice(index, 1)
        },
        add(state, val) {
            if (val.name !== 'home') {
                // state.currentMenu = val
                const index = state.breadcrumb.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.breadcrumb.push(val)
                }
            } else {
                //    state.currentMenu=null
            }
        }


    },
    actions: {

    },
    getters: {

    }

})