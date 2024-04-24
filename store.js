import { reactive } from "vue";

export const store = reactive({

    navBarLinks: ["HOME", "PAGES", "PORTFOLIO", "BLOG", "SHOP", "ELEMENTS"],
    blockArray: [{
        image: "/src/assets/img/h-2-port-img-1.jpg",
        label: "FE",
        type: "Minimal art"
    },
    {
        image: "/src/assets/img/h-2-port-img-2.jpg",
        label: "Love in tandem",
        type: "Picture"
    },
    {
        image: "/src/assets/img/h-2-port-img-3.jpg",
        label: "Brochure template",
        type: "Brochure"
    },
    {
        image: "/src/assets/img/h-2-port-img-4.jpg",
        label: "Illustrations of novels",
        type: "Illustration"
    },
    {
        image: "/src/assets/img/h-2-port-img-5.jpg",
        label: "Modern art",
        type: "Art"
    },
    {
        image: "/src/assets/img/h-2-port-img-6.jpg",
        label: "Chill vibes",
        type: "Collection"
    },





    ],

    cards: [
        {
            image: "/src/assets/img/h-2-blog-img-1.jpg",
            title: "This way, loves: a detailed guide through new design",
            info: "By Emily Fields",
            reminder: "07",
            date: "May '19",
        },
        {
            image: "/src/assets/img/h-2-blog-img-2.jpg",
            title: "I try to give people a different way of looking art",
            info: "By Emily Fields",
            reminder: "07",
            date: "May '19",

        },
        {
            image: "/src/assets/img/h-2-blog-img-3.jpg",
            title: "Introduce Richard Laperriére of those amazing features",
            info: "By Emily Fields",
            reminder: "07",
            date: "May '19",

        },
    ],

    footerData:
    {
        logo: "/src/assets/img/logo-sidearea-1.png",
        slogan: "Let's get creative",
        email: "maree.qode@gmail.com",
        phone: "+44645 321 789",
        address: "Avenue d'Auderghem 10",
        location: "1040 Brussels, Belgium",
        contact: "Stay in touch with us",
        social: ["/src/assets/svg/twitter.svg", "/src/assets/svg/pinterest.svg", "/src/assets/svg/facebook.svg", "/src/assets/svg/linkedin.svg"]

    },

    processArray: [
        {
            image: "/src/assets/img/lighting-bulb.png",
            title: "First theres an idea",
            text: "Lorem ipsum dolor sit amet.",
        },
        {
            image: "/src/assets/svg/comment-regular.svg",
            title: "Then we talk about",
            text: "Lorem ipsum dolor sit amet.",
        },
        {
            image: "/src/assets/svg/cloud-solid.svg",
            title: "And we think about",
            text: "Lorem ipsum dolor sit amet.",
        },
        {
            image: "/src/assets/svg/pencil-solid.svg",
            title: "So we draw along",
            text: "Lorem ipsum dolor sit amet.",
        }




    ]





})