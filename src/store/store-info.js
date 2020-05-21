import { firebaseDB } from 'boot/firebase'

const state = {
    info: {
        energyLevel: 100,
        patternNo: 5,
        remainTime: '4 h 30 m',
        temp: '27.9 °C',
        kWatt: '250 kW-hr',
        voltage: '12.5 Volt',
        ampere: '20,000 A',
        capacity: '35,000 mAh',
    },
}

const mutations = {
    updateInfo(curState, payload) {
        Object.assign(curState.info, payload)
    },
}

const actions = {
    fireSaveData(newInfo) {
        const info = firebaseDB.ref('pac0')
        info.set(newInfo)
        console.log('Saved to db')
    },

    fireReadData({ commit }) {
        const info = firebaseDB.ref('pac0')
        let newItem = {}

        // Child added
        info.limitToLast(1).on('value', (snapshot) => {
            const item = snapshot.val()
            const key = Object.keys(item)[0]
            newItem = item[key]
            commit('updateInfo', newItem)
        })
    },
}

const getters = {
    info: (curState) => {
        return curState.info
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
