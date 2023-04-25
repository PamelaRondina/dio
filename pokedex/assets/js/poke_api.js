// funções de manipulações da poke-api

const pokeApi = {}

//vai retornar toda a manipulação do fetch
// pokeApi: função com 2 parâmetros
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    //variáveis de inicio de dados e quantidade por página
    /* const offset = 0;
    const limit = 10; */
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemon) => pokemon.map((pokemon) => fetch(pokemon.url).json()))
        .then((detailRequest) => )
//        .catch((error) => console.error(error))
}

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
]).then((results) => {
    console.log(results)
})