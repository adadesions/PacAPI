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

}

const actions = {

}

const getters = {
    info: (s) => {
        return s.info
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
