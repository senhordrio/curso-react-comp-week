export async function fetchPokemon(name) {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    try {
        const response = await fetch(url + name)
        const data = await response.json()
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
        if (response.ok) {
            return {
                id: data.id,
                height: data.height,
                name: data.name,
                type: data.types[0].type.name,
                image: imageUrl + data.id + ".png"
            }
        }
    } catch (e) {
        console.error(e)
    }
}
