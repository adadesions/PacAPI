<template>
  <q-page padding>
    <div class="row section-padding">
        <div class="col">
        </div>
        <div class="col"></div>
        <div class="col">
          <ChargeStatus
            :patternNo="info.patternNo"
          ></ChargeStatus>
        </div>
    </div>
    <br>
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
      <div class="app-info-background">
        <div class="app-info">
          <div class="row row-margin">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-time.png"
                label="Remaining Time"
                :value="info.remainTime"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-voltage.png"
                label="Voltage"
                :value="info.voltage"
              ></InfoComponent>
            </div>
          </div>
          <div class="row row-margin">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-temp.png"
                label="Temperature"
                :value="info.temp"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-amp.png"
                label="Ampere"
                :value="info.ampere"
              ></InfoComponent>
            </div>
          </div>

          <div class="row">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-kw.png"
                label="Kiloowatt"
                :value="info.kWatt"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-bat.png"
                label="Capacity"
                :value="info.capacity"
              ></InfoComponent>
            </div>
          </div>
        </div>
      </div>
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
