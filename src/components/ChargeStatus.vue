<template>
    <div class="charge-status-container">
        <span v-for="(icon, idx) in patterns[patternNo]" :key="idx">
            <img class="app-icon-status" :src="icon" alt="">
            <ArrowRight v-if="idx < patterns[patternNo].length-1" />
        </span>
    </div>
</template>

<script>
    import ArrowRight from './ArrowRight'

    const home = '/statics/uis/ui-home.png'
    const solar = '/statics/uis/ui-solar.png'
    const battery = '/statics/uis/ui-pacbatt.png'
    const electric = '/statics/uis/ui-electric.png'

    export default {
        name: 'ChargeStatus',
        components: {
            ArrowRight,
        },
        props: ['patternNo'],

        data() {
            return {
                patterns: [
                    // Pattern 1
                    [home, battery],
                    // Pattern 2
                    [home, electric],
                    // Pattern 3
                    [home, battery, electric],
                    // Pattern 4
                    [solar, battery],
                    // Pattern 5
                    [solar, electric],
                    // Pattern 6
                    [solar, battery, electric],
                    // Pattern 7
                    [battery, electric],
                ],
            }
        },
    }
</script>

<style lang="sass" scoped>
	@media (max-width: $breakpoint-xl-max)
		.app-icon-status
			width: 10em
	@media (max-width: $breakpoint-lg-max)
		.app-icon-status
			width: 5em
	@media (max-width: $breakpoint-md-max)
		.app-icon-status
			width: 3em
		.charge-status-container
			padding-top: 1.5em
	@media (max-width: $breakpoint-sm-max)
		.app-icon-status
			width: 3em
	@media (max-width: $breakpoint-xs-max)
		.app-icon-status
			width: 2em

</style>
