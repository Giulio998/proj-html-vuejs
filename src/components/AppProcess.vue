<script>
export default {
    name: "AppProcess",
}

</script>

<template>
    <section>
        <div class="text-center padding marginBottom">
            <h2>Working <i><strong>process</strong></i> </h2>
        </div>
        <div class="circlesDiv justify-content-center flex wave">
            <div class="card">
                <div class="circle bulb">
                    <img class="icon" src="../assets/img/lighting-bulb.png" alt="">
                </div>
                <div class="text-center">
                    <h3>
                        First theres an idea
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="circle chat">
                    <img class="icon" src="../assets/svg/comment-regular.svg" alt="">
                </div>
                <div class="text-center">
                    <h3>
                        Then we talk about
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="circle cloud">
                    <img class="icon" src="../assets/svg/cloud-solid.svg" alt="">
                </div>
                <div class="text-center">
                    <h3>
                        And we think about
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="circle pencil">
                    <img class="icon" src="../assets/svg/pencil-solid.svg" alt="">
                </div>
                <div class="text-center">
                    <h3>
                        So we draw along
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>

        </div>
    </section>


</template>

<style scoped>
h2 {
    font-weight: lighter;
    font-size: 40px;
}

.text-center {
    text-align: center;
}

.padding {
    padding: 70px;
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

.circle {
    background-color: var(--faf7f1);
    padding: 35px;
    border-radius: 50%;
    margin: 20px 60px;
    width: min-content;


}

section {
    padding-bottom: 80px;
}

.icon {
    height: 30px;
}

.card{padding-top: 30px;}
</style>