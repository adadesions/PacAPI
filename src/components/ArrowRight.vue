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
	@media (max-width: $breakpoint-xl-max)
	  .arrowIcon
		  font-size: 3em
		  color: #FFF
		  margin-top: -0.6em

	@media (max-width: $breakpoint-lg-max)
	  .arrowIcon
		  font-size: 8em
		  color: #FFF
		  margin-top: -0.6em

	@media (max-width: $breakpoint-md-max)
	  .arrowIcon
		  font-size: 5em
		  color: #FFF
		  margin-top: -0.5em

	@media (max-width: $breakpoint-sm-max)
	  .arrowIcon
		  font-size: 5em
		  color: #FFF
		  margin-top: -0.6em

	@media (max-width: $breakpoint-xs-max)
	  .arrowIcon
		  font-size: 3em
		  color: #FFF
		  margin-top: -0.6em
</style>
