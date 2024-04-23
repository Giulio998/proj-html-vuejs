<script>
import  AppHero  from "./AppHero.vue"
import AppBlocks from "./AppBlocks.vue"
import AppProcess from "./AppProcess.vue"
import AppContact from "./AppContact.vue";
import AppBlog from "./AppBlog.vue"
export default {
    components: {
        AppHero,
        AppBlocks,
        AppProcess,
        AppContact,
        AppBlog,
    }
    
}

</script>

<template>
    <main>
        <AppHero/>
        <AppBlocks/>
        <AppProcess/>
        <AppContact/>
        <AppBlog/>



    </main>


</template>

<style scoped></style>