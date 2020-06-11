<template>
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
						label="Kilowatt"
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
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'InfoComponent',
		computed: {
			...mapGetters('info', ['info']),
		},
	}
</script>

<style lang="sass" scoped>
	@media (max-width: $breakpoint-lg-max)
		.fixed-size
			width: 30em

		.icon-style
			width: 7.5em
			border-radius: 10em

		.text-section
			margin-left: 1em

		.text-style
			font-size: 2em
			width: 10em
			font-weight: bold
			color: $theme-white
			margin-top: 0.3em

		.value-style
			font-size: 35px
			margin-top: 0

	@media (max-width: $breakpoint-sm-max)
		.fixed-size
			width: 30em

		.icon-style
			width: 60px
			border-radius: 10em

		.text-section
			margin-left: -4em

		.text-style
			font-size: 16px
			font-weight: bold
			color: $theme-white
			margin-top: 0.3em

		.value-style
			font-size: 25px
			margin-top: 0
</style>
