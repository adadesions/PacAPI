<template>
  <q-icon
    class="arrowIcon"
    name="keyboard_arrow_right"
  ></q-icon>
</template>

<script>
export default {
  name: 'ArrowRight',
};
</script>

<style lang="sass" scoped>
  @media (max-width: $breakpoint-lg-max)
    .arrowIcon
      font-size: 6em
      color: #FFF
      margin-top: -0.9em

  @media (max-width: $breakpoint-sm-max)
    .arrowIcon
      font-size: 3em
      color: #FFF
      margin-top: -0.6em
</style>
