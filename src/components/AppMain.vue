<script>
import  AppHero  from "./AppHero.vue"
import AppBlocks from "./AppBlocks.vue"
import AppProcess from "./AppProcess.vue"
export default {
    components: {
        AppHero,
        AppBlocks,
        AppProcess,
    }
}

</script>

<template>
    <main>
        <AppHero/>
        <AppBlocks/>
        <AppProcess/>



    </main>


</template>

<style scoped></style>