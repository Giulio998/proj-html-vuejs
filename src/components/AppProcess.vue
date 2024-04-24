<script>
import AppBubbleText from "./AppBubbleText.vue"
import { store } from "../../store.js"
export default {
    name: "AppProcess",
    components: {
        AppBubbleText,
    },
    data() {
        return {
            store
        }
    }
}

</script>
<template>
    <section>
        <div class="text-center padding marginBottom">
            <h2>Working <i><strong>process</strong></i> </h2>
        </div>
        <div class="circlesDiv justify-content-center flex wave">
            <template v-for="bubble in store.processArray">
                <AppBubbleText :bubble="bubble" />
            </template>
        </div>
    </section>

</template>

<style scoped>
h2 {
    font-weight: lighter;
    font-size: 40px;
}

.wave {
    background-image: url("../assets/svg/svg-3.svg");
    background-repeat: no-repeat;
    background-size: 47%;
    background-position: center;
}

.marginBottom {
    margin-bottom: 10px;
}


section {
    padding-bottom: 100px;
}

.icon {
    height: 30px;
}

.card {
    padding-top: 30px;
}
</style>