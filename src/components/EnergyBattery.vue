<template>
    <div class="col">
        <div class="app-battery">
          <img class="battery-frame" src="statics/uis/ui-battery.png" alt="">
          <div class="energy-background" ></div>
          <div class="energy" :style="energyLevel"></div>
          <div class="energy-text" :style="energyTextAdjust">{{ percentage }}%</div>
          <p class="text-battery">Battery Status</p>
        </div>
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
  // computed: {
  //   energyLevel() {
  //     let fullEnergyScale = 0
  //     const screenWidth = window.innerWidth

  //     if (screenWidth <= 800) {
  //       fullEnergyScale = this.fullEnergySm
  //     } else {
  //       fullEnergyScale = this.fullEnergyLg
  //     }

  //     return `width: ${(fullEnergyScale * this.percentage) / 100}px`
  //   },
  //   energyTextAdjust() {
  //     const screenWidth = window.innerWidth
  //     let data = []

  //     if (screenWidth <= 800) {
  //       data = [11.7, 0.7, 0.5]
  //     } else {
  //       data = [11.5, 0.7, 0.4]
  //     }

  //     let result = data[0]
  //     if (this.percentage >= 0 && this.percentage < 10) {
  //       result += data[1]
  //     } else if (this.percentage < 100) {
  //       result += data[2]
  //     }

  //     return `left: ${result}em`
  //   },
  // },
}
</script>

<style lang="sass" scope>
  // Sm-screen
  $full-energy-sm: 163px
  $batt-left: 500px

  // Lg-screen
  $energy-width: 41.5em
  $energy-height: 12.5em
  $energy-top: 14em
  $batt-left-lg: 67em


  @media (max-width: $breakpoint-lg-max)
    .app-battery
      position: relative
      z-index: 0
    .battery-frame
      position: absolute
      z-index: 1
    .energy-background
      position: absolute
      z-index: 2
      width: $energy-width
      height: $energy-height
      top: 2.5em
      left: 2.5em
      background-color: $theme-orange
      opacity: 0.5
    .energy
      position: absolute
      z-index: 3
      width: $energy-width
      height: $energy-height
      top: 2.5em
      left: 2.5em
      background-color: $theme-orange
    .energy-text
      position: absolute
      z-index: 4
      color: $theme-white
      font-size: 10em
      font-weight: bold
      top: 0.1em
      left: 1.5em
    .text-battery
      position: absolute
      z-index: 5
      color: $theme-red
      font-size: 3em
      font-weight: bold
      top: 6em
      left: 4.5em

  @media (max-width: $breakpoint-sm-max)
    .app-battery
      position: absolute
      width: 200px
      margin-top: 0.45em
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
      top: 175px
      left: $batt-left - 10px
      font-size: 15px
      color: $theme-orange
      font-family: 'Prompt'
      font-weight: bold
      letter-spacing: 2px
      padding-left: 2.3em
</style>
