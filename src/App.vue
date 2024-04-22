<script>
import AppHeader from './components/AppHeader.vue'
import { store } from "../store.js"
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
<AppHeader :logo="'src/assets/img/logo-sidearea-1.png'" :navBarLinks="store.navBarLinks" :optionImg="'src/assets/svg/svg-1.svg'"/>
<AppMain/>
</template>

<style scoped>
 
</style>
