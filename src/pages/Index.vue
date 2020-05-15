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
      > AdaDeSions </EnergyBattery>
    </div>

    <div class="row">
      <div class="app-info"></div>
    </div>
  </q-page>
</template>

<script>
import ArrowRight from '../components/ArrowRight';
import EnergyBattery from '../components/EnergyBattery';

export default {
  components: {
    ArrowRight,
    EnergyBattery,
  },
  data() {
    return {
      energyLevel: 50,
    };
  },
};
</script>

<style lang="sass">
  .test
    background-color: $theme-orange
</style>
