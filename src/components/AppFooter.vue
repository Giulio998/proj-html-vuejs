<script>
export default {
    props: {
        footerData: Object,
    }
}
</script>

<template>
    <section class="flex align-items-center justify-content-center padding">
        <div class="margin">
            <img class="marginBottom" :src="footerData.logo" alt="">
            <p>{{ footerData.slogan }}</p>
        </div>
        <div class="margin">
            <p class="marginBottom">{{ footerData.email  }}</p>
            <p>{{ footerData.phone }}</p>
        </div>
        <div class="margin">
            <p class="marginBottom">{{ footerData.address  }}</p>
            <p>{{ footerData.location }}</p>
        </div>
        <div class="margin">
            <p class="marginBottom">{{ footerData.contact }}</p>
            <div>
                <template v-for="icon in footerData.social" >
                    <img class="icon" :src="icon" alt="">
                </template>
            </div>
        </div>


    </section>
        
    
</template>

<style scoped>
    section{
        height: 180px;
        background-color: var(--c0e1cf);
    }

    .icon{
        height: 20px;
        margin: 0 10px;
    }

    .padding{
        padding: 0 20px;
    }

    .margin{
        margin: 0 30px;
    }

    .marginBottom{
        margin-bottom: 10px;
    }

</style>