<script>
export default {
    name: "AppHero",
    
}
</script>

<template>
    <section id="heroSection">
        <div class="container flex relative">
                    <span class="leftButton spanButton"> < </span>
                    <span class="rightButton spanButton">></span>
                    <span class="dot leftDot"></span>
                    <span class="dot"></span>
                    <span class="biggerDot"></span>
                    <div class="heroText flex-column align-items-start flex">
                        <h1 class="marginBottom">
                            Devotion that <br> never <i><strong>ends</strong></i>
                        </h1>
                        <p class="marginBottom">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et tempore doloribus possimus.
                        </p>
                        <button>
                            READ MORE
                        </button>
                    </div>
                    <div class="heroImg flex relative justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26.1"
                            class="edgtf-butterfly redLeaf absolute rightRedLeaf">
                            <path
                                d="M9.4 10.8C9.7 5.3 5.4.5 5.4.5S.7 4.8.4 10.4c-.3 5.6 4 10.3 4 10.3s4.7-4.3 5-9.9z" />
                            <path
                                d="M24.6 21.7s-4.3-4.7-9.9-5c-5.6-.3-10.3 4-10.3 4s4.3 4.7 9.9 5c5.5.3 10.3-4 10.3-4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26.1"
                            class="edgtf-butterfly mirror redLeaf absolute">
                            <path
                                d="M9.4 10.8C9.7 5.3 5.4.5 5.4.5S.7 4.8.4 10.4c-.3 5.6 4 10.3 4 10.3s4.7-4.3 5-9.9z" />
                            <path
                                d="M24.6 21.7s-4.3-4.7-9.9-5c-5.6-.3-10.3 4-10.3 4s4.3 4.7 9.9 5c5.5.3 10.3-4 10.3-4z" />
                        </svg> <img class="smallLeaf absolute" :src="'./src/assets/img/h-2-slider-img-12.png'" alt="">
                        <img class="smallPlant absolute leftSmallPlant" :src="'./src/assets/img/h-2-slider-img-13.png'"
                            alt="">
                        <img class="smallPlant absolute rightSmallPlant" :src="'./src/assets/img/h-2-slider-img-14.png'"
                            alt="">
                        <img class="smallBush absolute" :src="'./src/assets/img/h-2-slider-img-17.png'" alt="">
                        <img class="mainImg absolute skaterFemale" :src="'./src/assets/img/h-2-slider-img-15.png'"
                            alt="">
                        <img class="mainImg absolute skater" :src="'./src/assets/img/h-2-slider-img-16.png'" alt="">

                    </div>
        </div>
    </section>




</template>

<style scoped>
.heroSection{
    padding-bottom:20px ;
}

.spanButton {
    background-color: var(--e1c0b0);
    position: absolute;
    border-radius: 50%;
    height: 21px;
    width: 21px;
    color: white;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    z-index: 1;
}

.leftButton {
    left: 20px;
    top: 195px;
}

.rightButton {
    right: 20px;
    top: 195px;
}

.dot {
    background-color: var(--e1c0b0);
    position: absolute;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    z-index: 1;
    cursor: pointer;
    top: 390px;
    left: 50%;
    
}

.leftDot{
    left: 49%;
}

.biggerDot{
    background-color: var(--e1c0b0);
    position: absolute;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    z-index: 1;
    cursor: pointer;
    top: 388px;
    left: 51%;
}


h1 {
    font-size: 60px;
    font-weight: lighter
}

p {
    font-size: 20px;
    font-weight: lighter;
    padding: 0 40px 0 0;
}

.container {
    margin: 0 auto;
    height: 400px;
}

.heroText {
    width: 53%;
    padding: 82px 0px 20px 300px;
    display: flex;
    
}

.heroImg {
    width: 800px;
    height: 360px;
}

.marginBottom {
    margin-bottom: 16px;
}

button {
    background-color: var(--ffffff);
    border: 2px solid var(--e1c0b0);
    padding: 10px 15px;
    cursor: pointer;

}

.mirror {
    transform: scaleX(-1)
}

.redLeaf {
    fill: var(--f0817b);
    height: 35px;
}

.smallLeaf {
    height: 30px;
    left: 0;
    bottom: 112px;
}



.mainImg {
    height: 270px;
}

.smallBush {
    height: 70px;
    bottom: 0;
    left: 479px;
}


.smallPlant {
    height: 53px;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.redLeaf.mirror {
    left: 55px;
    bottom: 260px;
}

.skater {
    left: 257px;
    bottom: 0;
}

.skaterFemale {
    left: 55px;
    bottom: 0;
}

.rightRedLeaf {
    left: 453px;
    bottom: 202px;
}

.leftSmallPlant {
    bottom: 10px;
    left: 24px;
}

.rightSmallPlant {
    bottom: 271px;
    left: 410px;
}

button:hover{
  color: var(--ffffff);
  background-color: var(--e1c0b0);
}

</style>