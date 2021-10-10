import styled from "styled-components"

export const CustomPokemonImage = styled.img`
    max-height: 200px;
    max-width: 150px;
    color: black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export function PokemonImage(props) {
    const { url } = props
    return <CustomPokemonImage src={url} />
}
