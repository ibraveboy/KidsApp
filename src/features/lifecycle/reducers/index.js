import {
    SET_SELECTED_SPECIE_NAME
} from "../constants"
import lion from "../../../assets/images/lion_bg.png";
import cheeta from "../../../assets/images/cheeta_bg.png"
import goat from "../../../assets/images/goat_bg.png"
import rabbit from "../../../assets/images/rabbit_bg.png"
import parrot from "../../../assets/images/parrot_bg.png"
import rose from "../../../assets/images/rose_bg.png"
import sunflower from "../../../assets/images/sunflower_bg.png"
import owl from "../../../assets/images/owl_bg.png"
import humming from "../../../assets/images/humming_bg.png"
import sparrow from "../../../assets/images/sparrow_bg.png"
import orchid from "../../../assets/images/orchid_bg.png"
import palm from "../../../assets/images/palm_bg.png"

const initialState = {
    selectedSpecieName: "Lion",
    dataForSelectedSpecie: {
        Lion: {
            url: `https://prezi.com/embed/uwvap0ljxdso/`,
            image: lion
        },
        Leopard: {
            url: `https://player.slideplayer.com/96/16479627/`,
            image: cheeta,
        },
        Goat: {
            url: `https://prezi.com/embed/k-xo6r4qcvqy/`,
            image: goat,
        },
        Rabbit: {
            url: `https://prezi.com/embed/iwvnnmzz1y5p/`,
            image: rabbit,
        },
        Palm: {
            url: `https://prezi.com/embed/qizzm-yc6qwg/`,
            image: palm,
        },
        Orchid: {
            url: `https://prezi.com/embed/xjhb-iiugj7n/`,
            image: orchid,
        },
        Rose: {
            url: `https://prezi.com/embed/ngyupwkkva6p/`,
            image: rose,
        },
        Sunflower: {
            url: `https://prezi.com/embed/imwektltjwkt/`,
            image: sunflower
        },
        Owl: {
            url: `https://prezi.com/embed/7th7v8s9_zv8/`,
            image: owl,
        },
        "Humming Bird": {
            url: `https://prezi.com/embed/fke6a5xsiw-a/`,
            image: humming,
        },
        Sparrow: {
            url: `https://prezi.com/embed/8dh0d_otyzn5/`,
            image: sparrow,
        },
        Parrot: {
            url: `https://prezi.com/embed/6un-jgn5cxny/`,
            image: parrot,
        }
    }
}

export const specieReducer = (state = initialState, action) => {
    if (action.type === SET_SELECTED_SPECIE_NAME) {
        return {
            ...state,
            selectedSpecieName: action.payload
        }
    }
    return state
}