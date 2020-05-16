<template>
  <q-page padding>
    <div class="row section-padding">
        <div class="col">
          <img class="app-logo" src="statics/uis/ui-logo-main.png" alt="">
        </div>
        <div class="col"></div>
        <div class="col">
          <img class="app-icon-status" src="statics/uis/ui-solar.png" alt="">
          <ArrowRight />
          <img class="app-icon-status" src="statics/uis/ui-pacbatt.png" alt="">
          <ArrowRight />
          <img class="app-icon-status" src="statics/uis/ui-electic.png" alt="">
        </div>
    </div>
    <br>
    <div id="statistic" class="row section-padding">
      <div class="col">
        <q-btn
          icon="img:statics/uis/ui-stat-04.png"
          size="55px"
          :ripple="{ color: 'orange' }"
        />
      </div>
      <EnergyBattery
        :percentage="this.energyLevel"
      ></EnergyBattery>
    </div>

    <div class="row">
      <div class="app-info-background">
        <div class="app-info">
          <div class="row">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-time.png"
                label="Remaining Time"
                value="10 h 29 m"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-voltage.png"
                label="Voltage"
                value="12.6 Volt"
              ></InfoComponent>
            </div>
          </div>
          <div class="row">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-temp.png"
                label="Temperature"
                value="35 °C"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-amp.png"
                label="Ampere"
                value="30,000 A"
              ></InfoComponent>
            </div>

          </div>
          <div class="row">
            <div class="col-4 col-margin">
              <InfoComponent
                icon="statics/uis/ui-kw.png"
                label="Kiloowatt"
                value="300 kW-hr"
              ></InfoComponent>
            </div>
            <div class="col-4">
              <InfoComponent
                icon="statics/uis/ui-bat.png"
                label="Capacity"
                value="30,000 mAh"
              ></InfoComponent>
            </div>

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ArrowRight from '../components/ArrowRight'
import EnergyBattery from '../components/EnergyBattery'
import InfoComponent from '../components/InfoComponent'

export default {
  components: {
    ArrowRight,
    EnergyBattery,
    InfoComponent,
  },
  data() {
    return {
      energyLevel: 50,
    }
  },
}
</script>
