<script>
import AppBadge from "./AppBadge.vue"
export default {
    name: "AppCard",
    components: {
        AppBadge,
    },
    props : {
        card : Object,
    }
}

</script>

<template>

    <div class="relative card">
        <AppBadge :reminder="card.reminder" :date="card.date"/>
        <img :src="card.image" alt="">
        <h3 class="title">{{ card.title }}</h3>
        <p class="info">{{ card.info }}</p>

    </div>

        
    
</template>

<style scoped>
img{
    width: 100%;
    margin-bottom: 10px;
}

.card{
    width: calc(100%/4);
    margin: 0 20px;
    cursor: pointer;
}

h2{
    margin-bottom: 10px;
}
</style>