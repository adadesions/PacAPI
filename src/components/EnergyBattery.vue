<template>
    <div class="col">
        <div class="energy-background"></div>
        <div class="energy" :style="energyLevel"></div>
        <div class="energy-text" :style="energyTextAdjust">{{ percentage }}%</div>
        <img class="app-battery" src="statics/uis/ui-battery.png" alt="">
        <p class="text-battery">Battery Status</p>
    </div>
</template>

<script>
export default {
  name: 'EnergyBattery',
  props: ['percentage'],
  computed: {
    energyLevel() {
      return `width: ${(245 * this.percentage) / 100}px`;
    },
    energyTextAdjust() {
      let result = 500;
      if (this.percentage < 10) {
        result = 540;
      } else if (this.percentage < 100) {
        result = 520;
      }

      return `left: ${result}px`;
    },
  },
};
</script>

<style lang="sass">
  .energy
    position: absolute
    top: 113px
    left: 455px
    height: 75px
    background-color: $theme-orange
    border-radius: 5px

  .energy-background
    position: absolute
    top: 113px
    left: 455px
    height: 75px
    width: 245px
    background-color: $theme-orange
    border-radius: 5px
    opacity: 0.3

  .energy-100
    width: 245px

  .energy-80
    width: 196px

  .energy-50
    width: 122px

  .energy-30
    width: 73px

  .energy-text
    position: absolute
    left: 500px
    top: 95px
    font-family: 'Prompt'
    font-size: 72px
    font-weight: bold
    color: $theme-white

  .text-battery
    font-size: 20px
    color: $theme-orange
    font-family: 'Prompt'
    font-weight: bold
    letter-spacing: 2px
    padding-left: 4.2em
</style>
