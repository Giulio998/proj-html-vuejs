<script>
import { store } from "../../store.js"
import AppCard from "./AppCard.vue"
export default {
    name: "AppBlog",
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section class="flex justify-content-center align-items-center">
        <template v-for="card in store.cards">
            <AppCard :card="card" />


        </template>
    </section>

</template>


<style scoped>
section{
    height: 550px;
}
</style>