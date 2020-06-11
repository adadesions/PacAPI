<template>
	<div class="app-info-background">
		<div class="app-info">
			<div class="row row-margin">
				<div class="col-4 col-margin">
					<InfoItem
						icon="statics/uis/ui-time.png"
						label="Remaining Time"
						:value="info.remainTime"
					></InfoItem>
				</div>
				<div class="col-4">
					<InfoItem
						icon="statics/uis/ui-voltage.png"
						label="Voltage"
						:value="info.voltage"
					></InfoItem>
				</div>
			</div>
			<div class="row row-margin">
				<div class="col-4 col-margin">
					<InfoItem
						icon="statics/uis/ui-temp.png"
						label="Temperature"
						:value="info.temp"
					></InfoItem>
				</div>
				<div class="col-4">
					<InfoItem
						icon="statics/uis/ui-amp.png"
						label="Ampere"
						:value="info.ampere"
					></InfoItem>
				</div>
			</div>

			<div class="row">
				<div class="col-4 col-margin">
					<InfoItem
						icon="statics/uis/ui-kw.png"
						label="Kilowatt"
						:value="info.kWatt"
					></InfoItem>
				</div>
				<div class="col-4">
					<InfoItem
						icon="statics/uis/ui-bat.png"
						label="Capacity"
						:value="info.capacity"
					></InfoItem>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import InfoItem from 'components/InfoItem';

	export default {
		name: 'InfoComponent',
		components: { InfoItem },
		props: ['info'],
	}
</script>
<style lang="sass" scoped>
	.app-info-background
		position: absolute
		background-color: $theme-orange
		width: 100%
		height: 50%
		bottom: 0
		border-radius: 3em 3em 0 0
	@media (max-width: $breakpoint-xl-max)
		.app-icon-status
			width: 10em
	@media (max-width: $breakpoint-lg-max)
		.app-icon-status
			width: 5em
	@media (max-width: $breakpoint-md-max)
		.app-info-background
			height: 45%
			margin-left: -1.1em
		.app-info
			padding-top: 1em
		.col-margin
			margin-left: 15%
			margin-right: 10%
		.row-margin
			margin-bottom: 1em
	@media (max-width: $breakpoint-sm-max)
		.app-info-background
			height: 45%
			margin-left: -1.1em
		.app-info
			padding-top: 0.7em
		.col-margin
			margin-left: 15%
			margin-right: 10%
		.row-margin
		    margin-bottom: 0
	@media (max-width: $breakpoint-xs-max)
		.app-info-background
			margin-left: -0.5em
		.app-info
			padding-top: 1em
		.col-margin
			margin-left: 4em
			margin-right: 5em
</style>
