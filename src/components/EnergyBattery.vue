<template>
  <div class="app-battery">
    <img class="battery-frame" src="statics/uis/ui-battery.png" alt="">
    <div class="energy-background" ></div>
    <div class="energy"></div>
    <div class="energy-text">{{ percentage }}%</div>
    <!-- <div class="energy" :style="energyLevel"></div>
    <div class="energy-text" :style="energyTextAdjust">{{ percentage }}%</div> -->
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
      fullEnergyLg: 41.5,
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

      return `width: ${(fullEnergyScale * this.percentage) / 100}em`
    },
    energyTextAdjust() {
      const screenWidth = window.innerWidth
      let digits = {}

      if (screenWidth <= 800) {
        digits = {
          one: 0.7,
          two: 0.5,
          three: 1,
        }
      } else {
        digits = {
          one: 1.8,
          two: 1.55,
          three: 1.2,
        }
      }

      let offset = 0;
      if (this.percentage >= 0 && this.percentage < 10) {
        offset = digits.one
      } else if (this.percentage >= 10 && this.percentage < 100) {
        offset = digits.two
      } else {
        offset = digits.three
    }

      return `left: ${offset}em`
    },
  },
}
</script>

<style lang="sass" scoped>
  @media (max-width: $breakpoint-xl-max)
    .app-battery
      position: relative
      z-index: 0
    .battery-frame
      position: absolute
      z-index: 1
      width: 60em
    .energy-background
      position: absolute
      z-index: 2
      width: 50em
      height: 16em
      top: 2.5em
      left: 2.5em
      margin-top: 0.4em
      margin-left: 1em
      background-color: $theme-orange
      opacity: 0.5
    .energy
      position: absolute
      z-index: 3
      width: 50em
      height: 16em
      top: 2.5em
      left: 2.5em
      margin-top: 0.4em
      margin-left: 1em
      background-color: $theme-orange
    .energy-text
      position: absolute
      z-index: 4
      color: $theme-white
      font-size: 150px
      font-weight: bold
      top: 0.1em
      left: 1.55em
      margin-top: 0.1em
      margin-left: 0.2em
    .text-battery
      position: absolute
      z-index: 5
      color: $theme-red
      font-size: 55px
      font-weight: bold
      top: 6em
      left: 4.5em
      margin-top: -0.4em
      margin-left: -0.4em
  @media (max-width: $breakpoint-lg-max)
    .app-battery
      position: relative
      z-index: 0
    .battery-frame
      position: absolute
      z-index: 1
      width: 37em
    .energy-background
      position: absolute
      z-index: 2
      width: 30em
      height: 10em
      top: 2.5em
      left: 2.5em
      margin-top: -0.8em
      background-color: $theme-orange
      opacity: 0.5
    .energy
      position: absolute
      z-index: 3
      width: 25em
      height: 10em
      top: 2.5em
      left: 2.5em
      margin-top: -0.8em
      background-color: $theme-orange
    .energy-text
      position: absolute
      z-index: 4
      color: $theme-white
      font-size: 108px
      font-weight: bold
      top: 0.1em
      left: 1.55em
      margin-top: 0
      margin-left: -0.2em
    .text-battery
      position: absolute
      z-index: 5
      color: $theme-red
      font-size: 3em
      font-weight: bold
      top: 6em
      left: 4.5em
      margin-top: -1em
      margin-left: -1.5em

  @media (max-width: $breakpoint-md-max)
    .app-battery
      width: 2em
    .battery-frame
      width: 30em
    .energy-background
      width: 24em
      height: 7.7em
      margin-top: -1em
      margin-left: -0.5em
      background-color: $theme-orange
      border-radius: 5px
    .energy
      width: 20em
      height: 7.7em
      margin-top: -1em
      margin-left: -0.5em
      background-color: $theme-orange
      border-radius: 5px
    .energy-text
      width: 100%
      font-family: 'Prompt'
      font-size: 64px
      font-weight: bold
      color: $theme-white
      margin-top: 0.3em
      margin-left: 0.5em

    .text-battery
      width: 10em
      font-size: 33px
      color: $theme-red
      font-family: 'Prompt'
      font-weight: bold
      letter-spacing: 2px
      margin-top: -1em
      margin-left: -2em

  @media (max-width: $breakpoint-sm-max)
    .app-battery
      position: absolute
      width: 200px
      margin-top: 0.45em

    .energy
      position: absolute
      height: 50px
      background-color: $theme-orange
      border-radius: 5px

    .energy-background
      position: absolute
      height: 50px
      width: 163px
      background-color: $theme-orange
      border-radius: 5px
      opacity: 0.3

    .energy-text
      position: absolute
      font-family: 'Prompt'
      font-size: 45px
      font-weight: bold
      color: $theme-white

    .text-battery
      position: absolute
      font-size: 15px
      color: $theme-red
      font-family: 'Prompt'
      font-weight: bold
      letter-spacing: 2px
      padding-left: 2.3em
</style>
