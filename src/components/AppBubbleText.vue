<script>
export default {
    name: "AppBubbleText",
    props:{
        bubble : Object
    }
}
</script>

<template>
    <div class="card">
        <div class="circle bulb">
            <img class="icon" :src="bubble.image" alt="">
        </div>
        <div class="text-center">
            <h3>
                {{ bubble.title  }}
            </h3>
            <p>
               {{ bubble.text }}
            </p>
        </div>
    </div>


</template>

<style scoped>
h3 {
    font-weight: light;
    margin-bottom: 10px;
}

p {
    font-weight: lighter;
}


.padding {
    padding: 70px 70px 0;
}

.circle {
    background-color: var(--faf7f1);
    padding: 35px;
    border-radius: 50%;
    margin: 20px 60px;
    width: min-content;


}

.icon {
    height: 30px;
}

.card {
    padding-top: 30px;
}
</style>