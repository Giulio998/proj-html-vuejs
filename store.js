import { reactive } from "vue";

export const store = reactive({

    navBarLinks : ["HOME","PAGES","PORTFOLIO","BLOG","SHOP","ELEMENTS"],
    blockArray : [{
        image: "/src/assets/img/h-2-port-img-1.jpg",
        label: "FE",
        type : "Minimal art"
    },
    {
        image: "/src/assets/img/h-2-port-img-2.jpg",
        label: "Love in tandem", 
        type : "Picture"
    },
    {
        image: "/src/assets/img/h-2-port-img-3.jpg",
        label: "Brochure template", 
        type : "Brochure"
    },
    {
        image: "/src/assets/img/h-2-port-img-4.jpg",
        label: "Illustrations of novels", 
        type: "Illustration"
    },
    {
        image: "/src/assets/img/h-2-port-img-5.jpg",
        label: "Modern art", 
        type : "Art"
    },
    {
        image: "/src/assets/img/h-2-port-img-6.jpg",
        label: "Chill vibes", 
        type : "Collection"
    },





]






})