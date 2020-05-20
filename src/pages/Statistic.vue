<template>
    <div class="row">
        <div class="col-7"></div>
        <div class="col-5 app-info-background-vertical">
            <div class="row">
                <div class="col"></div>
                <div class="col text-header">
                    <span class="battery-text">Battery</span><br>
                    <span class="statistic-text">Statistic</span>
                </div>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-time.png"
                    label="Remaining Time"
                    :value="info.remainTime"
                    ></InfoComponent>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-voltage.png"
                    label="Voltage"
                    :value="info.voltage"
                    ></InfoComponent>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-temp.png"
                    label="Temperature"
                    :value="info.temp"
                    ></InfoComponent>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-bat.png"
                    label="Capacity"
                    :value="info.capacity"
                    ></InfoComponent>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-amp.png"
                    label="Ampere"
                    :value="info.ampere"
                    ></InfoComponent>
            </div>
            <div class="row padding">
                    <InfoComponent
                    icon="statics/uis/ui-kw.png"
                    label="Kilowatt"
                    :value="info.kWatt"
                    ></InfoComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoComponent from '../components/InfoComponent'

    export default {
        name: 'Statistic',
        components: {
            InfoComponent,
        },
        data() {
            return {
                info: {
                    remainTime: '4 h 30 m',
                    temp: '27.9 °C',
                    kWatt: '250 kW-hr',
                    voltage: '12.5 Volt',
                    ampere: '20,000 A',
                    capacity: '35,000 mAh',
                },
            }
        },
    }
</script>

<style lang="sass" scoped>
    .app-info-background-vertical
        background-color: $theme-orange
        height: 59.5em
        border-radius: 3em 0 0 3em

    .text-header
        text-align: right
        padding-right: 3.5em
        padding-top: 1.5em
        color: $theme-white
        font-weight: bold

    .battery-text
        font-size: 2em

    .statistic-text
        font-size: 3em

    .padding
        padding-left: 8em
        padding-bottom: 1em
</style>
