import styled from "styled-components"
import { colours } from "../data/colours"

const CustomDiv = styled.div`
    background-color: ${props => colours[props.color]};
    color: white;
    border-radius: 5px;
`

export function PokemonType(props) {
    const { type } = props

    return <CustomDiv color={type}>Tipo: {type}</CustomDiv>
}
