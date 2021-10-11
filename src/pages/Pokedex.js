import styled from "styled-components"
import { useState, useEffect } from "react"
import { fetchPokemons } from "../services/fetchPokemons"
import {
    PokemonCard,
    PokedexNavbar,
    PokemonList,
    PokedexLoading,
    PokemonModal
} from "../components"
import { useDisclosure } from "@chakra-ui/react"

const PokedexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setLoading] = useState(false)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [pokemonName, setPokemonName] = useState("")

    async function fetchData() {
        setLoading(true)
        try {
            const data = await fetchPokemons()
            setPokemons(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderPokemons = pokemons.map(element => (
        <PokemonCard
            key={`pokemon-${element.name}`}
            name={element.name}
            image={element.image}
            onClick={() => {
                setPokemonName(element.name)
                onOpen()
            }}
        />
    ))

    return (
        <PokedexContainer>
            <PokedexNavbar>Pokedex</PokedexNavbar>
            {isLoading ? (
                <PokedexLoading />
            ) : (
                <PokemonList children={renderPokemons} />
            )}
            {isOpen && (
                <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
                    pokemonName={pokemonName}
                />
            )}
        </PokedexContainer>
    )
}
