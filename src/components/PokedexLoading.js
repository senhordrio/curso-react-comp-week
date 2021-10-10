import styled from "styled-components"
import pokeball from "../assets/Pokeball_icon-icons.com_67533.svg"

const Loading = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    color: black;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    -webkit-animation: wobble-hor-bottom 0.8s infinite both;
    animation: wobble-hor-bottom 0.8s infinite both;
    @-webkit-keyframes wobble-hor-bottom {
        0%,
        100% {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
        }
        15% {
            -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
        }
        30% {
            -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
        }
        45% {
            -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
        }
        60% {
            -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
        }
        75% {
            -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
        }
    }
    @keyframes wobble-hor-bottom {
        0%,
        100% {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
        }
        15% {
            -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
        }
        30% {
            -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
        }
        45% {
            -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
        }
        60% {
            -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
        }
        75% {
            -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
        }
    }
`

export function PokedexLoading() {
    return (
        <Loading>
            <Image src={pokeball}></Image>
        </Loading>
    )
}
