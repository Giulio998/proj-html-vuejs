<script>
import AppHeader from './components/AppHeader.vue'
import { store } from "../store.js"
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppPopup from './components/AppPopup.vue'
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppPopup,
  },
  data() {
    return {
      store,
      showed: false,
    }
  },
  methods: {
    showDiv(){
      window.scrollY >= 440 ? this.showed = true : this.showed = false;
    }
  },

  mounted() {
    window.addEventListener('scroll', this.showDiv)
  },
}
</script>

<template>
<AppHeader :logo="'src/assets/img/logo-sidearea-1.png'" :navBarLinks="store.navBarLinks" :optionImg="'src/assets/svg/svg-1.svg'"/>
<AppMain/>
<AppFooter :footerData="store.footerData"/>
<AppPopup v-if="showed"/>
</template>

<style scoped>
 
</style>
