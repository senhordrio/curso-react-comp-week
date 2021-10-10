export async function fetchPokemons() {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
        )
        if (response.ok) {
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
            const data = await response.json()
            const pokemonArray = data.results.map((element, index) => {
                index = index + 1
                const image = imageUrl + index + ".png"
                const data = Object.assign({ image }, element)
                return data
            })
            return pokemonArray
        } else {
        }
    } catch (e) {
        console.error(e)
    }
}
