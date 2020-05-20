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
  data() {
    return {
      fullEnergySm: 168,
      fullEnergyLg: 410,
    }
  },
  computed: {
    energyLevel() {
      let fullEnergyScale = 0
      const screenWidth = window.innerWidth

      if (screenWidth <= 800) {
        fullEnergyScale = this.fullEnergySm
      } else {
        fullEnergyScale = this.fullEnergyLg
      }

      return `width: ${(fullEnergyScale * this.percentage) / 100}px`
    },
    energyTextAdjust() {
      const screenWidth = window.innerWidth
      let data = []

      if (screenWidth <= 800) {
        data = [11.7, 0.7, 0.5]
      } else {
        data = [11.5, 0.7, 0.4]
      }

      let result = data[0]
      if (this.percentage >= 0 && this.percentage < 10) {
        result += data[1]
      } else if (this.percentage < 100) {
        result += data[2]
      }

      return `left: ${result}em`
    },
  },
}
</script>

<style lang="sass" scope>
  // Sm-screen
  $full-energy-sm: 163px
  $batt-left: 500px

  // Lg-screen
  $energy-height: 9em
  $energy-width: 29.3em
  $energy-top: 14em
  $batt-left-lg: 67em


  @media (max-width: $breakpoint-lg-max)
    .app-battery
      position: absolute
      width: 35em
      margin-top: -0.1em
      left: 65em

    .energy
      position: absolute
      top: $energy-top
      left: $batt-left-lg
      height: $energy-height
      background-color: $theme-orange
      border-radius: 5px

    .energy-background
      position: absolute
      top: $energy-top
      left: $batt-left-lg
      height: $energy-height
      width: $energy-width
      background-color: $theme-orange
      border-radius: 5px
      opacity: 0.3

    .energy-text
      position: absolute
      top: 2.1em
      left: 10em
      font-family: 'Prompt'
      font-size: 90px
      font-weight: bold
      color: $theme-white

    .text-battery
      position: absolute
      top: 10em
      left: 27em
      font-size: 35px
      color: $theme-orange
      font-family: 'Prompt'
      font-weight: bold
      letter-spacing: 2px
      padding-left: 2.3em


  @media (max-width: $breakpoint-sm-max)
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
