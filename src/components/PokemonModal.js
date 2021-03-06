/* eslint-disable react-hooks/exhaustive-deps */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { fetchPokemon } from "../services"
import { PokedexLoading } from "./PokedexLoading"
import { PokemonImage } from "./PokemonImage"
import { PokemonName } from "./PokemonName"
import { PokemonType } from "./PokemonType"

export function PokemonModal(props) {
    const { isOpen, onClose, pokemonName } = props
    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [setPokemon])

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await fetchPokemon(pokemonName)
            setPokemon(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.error(e)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            preserveScrollBarGap
            isCentered
        >
            {isLoading ? (
                <PokedexLoading />
            ) : (
                pokemon && (
                    <ModalOverlay>
                        <ModalContent>
                            <PokemonName
                                name={pokemon.name}
                                isModalName={true}
                            />
                            <ModalCloseButton />

                            <ModalBody
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <PokemonImage url={pokemon.image} />
                                <div>Id: {pokemon.id}</div>
                                <div>Altura: {pokemon.height}</div>
                                <PokemonType type={pokemon.type} />
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                )
            )}
        </Modal>
    )
}
