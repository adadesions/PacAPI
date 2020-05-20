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
        name: 'InfoComponent',
        props: ['icon', 'label', 'value'],
    }
</script>

<style lang="sass" scoped>
@media (max-width: $breakpoint-lg-max)
    .fixed-size
        width: 30em

    .icon-style
        width: 6.5em
        border-radius: 10em

    .text-section
        margin-left: 1em

    .text-style
        font-size: 25px
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
