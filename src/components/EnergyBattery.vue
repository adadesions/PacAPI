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
      return `width: ${(163 * this.percentage) / 100}px`
    },
    energyTextAdjust() {
      let result = 530
      if (this.percentage < 10) {
        result += 20
      } else if (this.percentage < 100) {
        result += 15
      }

      return `left: ${result}px`
    },
  },
}
</script>

<style lang="sass" scope>
  $batt-left: 500px

  .app-battery
    position: absolute
    width: 200px
    margin-top: 1em
    left: $batt-left - 12px

  .energy
    position: absolute
    top: 108px
    left: $batt-left
    height: 50px
    background-color: $theme-orange
    border-radius: 5px

  .energy-background
    position: absolute
    top: 108px
    left: $batt-left
    height: 50px
    width: 163px
    background-color: $theme-orange
    border-radius: 5px
    opacity: 0.3

  .energy-text
    position: absolute
    top: 100px
    font-family: 'Prompt'
    font-size: 45px
    font-weight: bold
    color: $theme-white

  .text-battery
    position: absolute
    top: 170px
    left: $batt-left - 10px
    font-size: 15px
    color: $theme-orange
    font-family: 'Prompt'
    font-weight: bold
    letter-spacing: 2px
    padding-left: 2.3em
</style>
