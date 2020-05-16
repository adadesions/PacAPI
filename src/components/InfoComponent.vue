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
    .fixed-size
        width: 30em

    .icon-style
        width: 75px
        border-radius: 10em

    .text-section
        margin-left: -2.5em

    .text-style
        font-size: 18px
        font-weight: bold
        color: $theme-white
        margin-top: 0.5em

    .value-style
        font-size: 30px
        margin-top: 0
</style>
