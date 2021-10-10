import styled from "styled-components"

const CustomPokemonList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 100px;
    justify-content: center;
`

export function PokemonList(props) {
    const { children } = props

    return <CustomPokemonList>{children}</CustomPokemonList>
}
