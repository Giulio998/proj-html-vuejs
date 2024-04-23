<script>
import  AppHero  from "./AppHero.vue"
import AppBlocks from "./AppBlocks.vue"
import AppProcess from "./AppProcess.vue"
import AppContact from "./App.Contact.vue";
export default {
    components: {
        AppHero,
        AppBlocks,
        AppProcess,
        AppContact,
    }
}

</script>

<template>
    <main>
        <AppHero/>
        <AppBlocks/>
        <AppProcess/>
        <AppContact/>



    </main>


</template>

<style scoped></style>