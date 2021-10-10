import styled from "styled-components"

const CustomPokedexNavbar = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: lightblue;
    top: 0;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
`

export function PokedexNavbar() {
    return <CustomPokedexNavbar>Pokedex</CustomPokedexNavbar>
}
