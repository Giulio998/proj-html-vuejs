<script>
import { store } from "../../store.js"
import AppBlock from "./AppBlock.vue"
export default {
    name: "AppBlocks",
    components: {

        AppBlock,
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
        <div class="flex wrap">
            <template v-for="block in store.blockArray">
                <AppBlock :block="block" />

            </template>

        </div>

    </section>


</template>

<style scoped></style>