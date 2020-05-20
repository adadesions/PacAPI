<template>
  <q-layout view="lHh Lpr lFf" class="app-body" style="padding: 0">
    <q-bar class="q-electron-drag drag"></q-bar>

    <q-page-container style="padding: 0">
      <img class="app-logo" src="statics/uis/ui-logo-main.png" alt="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style lang="sass">
  .drag
    position: absolute
    width: 100%
    background-color: rgba(0, 0, 0, 0)
</style>
