import Vue from 'vue'
import Vuex from 'vuex'

import info from './store-info'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            info,
        },

        strict: process.env.DEV,
    })

    return Store
}
