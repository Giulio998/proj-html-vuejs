<script>
export default {
    props: {
        block : Object
    },
    data() {
        return {
            hovered: false,
        }
    },
}
</script>

<template>
    <div class="block relative" @mouseover="hovered= true" @mouseleave="hovered= false">
        <img :src="block.image" alt="">
        <div v-if="hovered==true" class="label ">
        <p>{{ block.label }}</p>
        </div>
    </div>
        
    
</template>

<style scoped>
.block{
    width: calc(100% / 3)

}

img{
    width: 100%;
}

.label{
    top: 50%;
    left: 0;
    z-index: 1;
    position: absolute;
    background-color: white;
    border: 1px solid whitesmoke;
    width: 45%;
    padding: 15px;
    
}

</style>