import styled from "styled-components"
import { PokemonImage } from "./PokemonImage"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 220px;
    width: 200px;
    margin: 10px;
    box-shadow: 1px 1px 3px 1px gray;
    border-radius: 5px;
    background-color: white;
    :hover {
        cursor: pointer;
    }
`

const PokemonNane = styled.div``

export function PokemonCard(props) {
    const { name, image, onClick } = props

    return (
        <CardContainer onClick={onClick}>
            <PokemonImage url={image} loading="lazy"></PokemonImage>
            <PokemonNane>{name}</PokemonNane>
        </CardContainer>
    )
}
