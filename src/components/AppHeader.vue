<script>
export default {
    props: {
        logo: String,
        navBarLinks: Array,
        optionImg: String,

    }
}
</script>

<template>
    <header id="header" class="flex justify-content-between padding align-items-center">
        <div>
            <img :src="logo" alt="">
        </div>
        <div class="flex align-items-center">
            <template v-for="link in navBarLinks">
                <a href="#">{{ link }}</a>
            </template>
            <div><a href="http://"><img class=" menu" :src="optionImg" alt="MENU"></a> </div>
        </div>
    </header>





</template>

<style scoped>
header{
    height: 80px;
    background-color: var(--ffffff);
}

.padding{
    padding: 0 30px;
}

a{
    margin: 0 20px;
    text-decoration: none;
    color: black;
}

</style>