<template>
	<div class="row fixed-size">
		<div class="col-4">
			<img class="icon-style" :src=icon alt="">
		</div>
		<div class="col-4 text-section">
			<div class="text-style">
				{{ label }}
			</div>
			<div class="text-style value-style">
				{{ value }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'InfoItem',
		props: ['icon', 'label', 'value'],
	}
</script>
<style lang="sass">

</style>
