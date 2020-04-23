import {
    SET_CATEGORY_NAME
} from "../constants";
import lion from "../../../assets/images/lion_bg.png";
import cheeta from "../../../assets/images/cheeta_bg.png";
import goat from "../../../assets/images/goat_bg.png";
import rabbit from "../../../assets/images/rabbit_bg.png";
import parrot from "../../../assets/images/parrot_bg.png";
import rose from "../../../assets/images/rose_bg.png";
import sunflower from "../../../assets/images/sunflower_bg.png";
import owl from "../../../assets/images/owl_bg.png"
import sparrow from "../../../assets/images/sparrow_bg.png"
import humming from "../../../assets/images/humming_bg.png"
import orchid from "../../../assets/images/orchid_bg.png"
import palm from "../../../assets/images/palm_bg.png"

const initialState = {
    categoryName: "animals",
    animals: [{
            name: "Lion",
            source: lion,
            bg: "rgb(236, 127, 24)",
        },
        {
            name: "Leopard",
            source: cheeta,
            bg: "rgb(4, 191, 173)",
        },
        {
            name: "Goat",
            source: goat,
            bg: "rgb(157, 191, 33)",
        },
        {
            name: "Rabbit",
            source: rabbit,
            bg: "rgb(139, 39, 140)",
        },

    ],
    birds: [{
            name: "Parrot",
            source: parrot,
            bg: "rgb(236, 127, 24)",
        },
        {
            name: "Humming Bird",
            source: humming,
            bg: "rgb(4, 191, 173)",
        },
        {
            name: "Sparrow",
            source: sparrow,
            bg: "rgb(157, 191, 33)",
        },
        {
            name: "Owl",
            source: owl,
            bg: "rgb(139, 39, 140)",
        }
    ],
    plants: [{
            name: "Rose",
            source: rose,
            bg: "rgb(236, 127, 24)",
        },
        {
            name: "Orchid",
            source: orchid,
            bg: "rgb(4, 191, 173)",
        },
        {
            name: "Sunflower",
            source: sunflower,
            bg: "rgb(157, 191, 33)",
        },
        {
            name: "Palm",
            source: palm,
            bg: "rgb(139, 39, 140)",
        },

    ]
}


const homeData = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_NAME:
            return {
                ...state,
                categoryName: action.payload
            }
            break;
    }
    return state
}

export default homeData;