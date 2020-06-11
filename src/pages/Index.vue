<template>
  <q-page padding>
    <div class="row section-padding">
        <div class="col col-sm-4 col-md-4">
        </div>
        <div class="col col-sm-3 col-md-4"></div>
        <div class="col col-sm-5 col-md-4">
          <ChargeStatus
            :patternNo="info.patternNo"
          ></ChargeStatus>
        </div>
    </div>
    <br>
<!--	  TODO: FIX INFO RESOLUTIONS-->
    <div id="statistic" class="row section-padding">
      <div class="col">
        <router-link to="/statistic">
          <img class="stat-icon" src="statics/uis/ui-stat-04.png" alt="">
        </router-link>
      </div>
      <EnergyBattery
        :percentage="info.energyLevel"
      ></EnergyBattery>
    </div>

    <div class="row">
		<InfoComponent></InfoComponent>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnergyBattery from '../components/EnergyBattery'
import InfoComponent from '../components/InfoComponent'
import ChargeStatus from '../components/ChargeStatus'

export default {
  components: {
    ChargeStatus,
    EnergyBattery,
    InfoComponent,
  },
  computed: {
    ...mapGetters('info', ['info']),
  },
  methods: {
    ...mapActions('info', ['fireReadData']),
  },
  created() {
    this.fireReadData()
  },
}
</script>
