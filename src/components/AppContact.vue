<script>
export default {
    name: "AppContact",
}

</script>

<template>
    <section class="text-center contact flex flex-column justify-content-center align-items-center">
        <h2 class="marginBottomSmall">Want to work with us? Send us <i><strong>a message!</strong></i></h2>
        <p class="marginBottom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, earum excepturi
            odio accusamus voluptatem nam dolorem doloribus? Enim?</p>
        <button>CONTACT</button>


    </section>


</template>

<style scoped>
h2 {
    font-weight: normal;
    font-size: 50px;

}

.marginBottomSmall {
    margin-bottom: 20px;
}

.marginBottom{
    margin-bottom: 35px;
}


.contact {
    background-image: url("../assets/img/h-2-background-1.jpg");
    padding: 70px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 360px;
    
}

button {
    padding: 12px 50px;
    border: none;
    background-color: var(--d8f0e3);
}
</style>