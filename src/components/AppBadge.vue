<script>
export default {
    name: "AppBadge",
    props: {
        reminder: String,
        date: String,
    }
}
</script>

<template>
    <div class="ribbon text-center">
        <p>{{ reminder }}</p>
        <span>{{ date }}</span>
    </div>


</template>

<style scoped>
.ribbon {
    width: 65px;
    height: 45px;
    background-color: var(--c0e1cf);

    position: absolute;
   left: 15px;
    top: -350px;
    animation: drop forwards .8s 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:before {

        content: '';
        position: absolute;
        z-index: 2;
        left: 0;
        height: 24px;
        bottom: -26px;
        border-left: 33px solid var(--f3d0c7);
        border-right: 33px solid var(--f3d0c7);
        border-bottom: 11px solid transparent;
    }

    &:after {
        content: '';
        width: 200px;
        height: 270px;
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: -120px;

        transform: skewY(50deg) skewX(0);
    }
}

@keyframes drop {
    0% {
        top: -350px;
    }

    100% {
        top: 0;
    }
}

p {
    padding-top: 3px;
    font-size: 28px;
}

span {
    position: absolute;
    top: 42px;
    z-index: 3;
    font-size: 10px;
    width: 37px;
    left: 17px;
}
</style>