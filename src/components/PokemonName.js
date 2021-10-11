import styled from "styled-components"

const CardName = styled.p`
    font-size: 10px;
    color: black;
`

const ModalName = styled.p`
    font-size: 20px;
    color: black;
    margin: 8px 6px 0px 16px;
`

export function PokemonName(props) {
    const { name, isModalName } = props
    return isModalName ? (
        <ModalName>{name}</ModalName>
    ) : (
        <CardName>{name}</CardName>
    )
}
