# Pokedex

> instalar biblioteca `npm install -g http-server`

- [x] Criar arquivo `index.html`;
- [x] No terminal, para iniciar o servidor `http-server ./`
    - irá disponibilizar os IP's e portas para acessar de um mesmo ambiente: celulares, tabletes, computador
- [x] No terminal, para interromper o servidor `CRTL + C`

_______ 

## Criar Site - Pokedex

- [x] Baixar [**Normalize.css**](https://cdnjs.com/libraries/normalize), para que o CSS utilizado fique idêntico em todos os navegadores

![image](https://user-images.githubusercontent.com/108991648/233377123-3e1d1a39-5e45-44ca-abac-9b51d924f974.png)

- [x] Colar abaixo do `title` no head.
- [x] Na web: F12 | Network | Click Disable cache

**Fonte**

- [x] [Editando as Fontes](https://github.com/PamelaRondina/menu_digital#editando-as-fontes)

____

## Estilização da listagem de Pokémon

**Mobile First**: 1º CSS para Mobile e depois telas maiores

- HTML: criar `<section>`. `<h1>`
- HTML: lista ordenada `ol`, com `li` nomes Pokemons

```html
<section>
    <h1 class="content">Pokedex</h1>

    <ol class="pokemons">
      <li>Bulbasaur</li>
```

- CSS: chamar classe `.content` e ajustar padding e margin;

```css
.content {
    padding: 1rem;
}

.content h1 {
    margin: 0;
}
```

- CSS: chamar classe `.pokemons`, eliminar os itens da lista: `list-style: none;`;
- CSS: com a quantidade de itens da lista ordenada, criar GRID como tabela de 2 pra 2: 

```css
 display: grid; 
 grid-template-columns: 1fr 1fr;`
```

![image](https://user-images.githubusercontent.com/108991648/233472010-e3639261-c29c-4b89-b70d-3ed0f246cdbf.png)

- CSS: ajustar li de ol:

```css
ol.pokemons li {
    margin: .5rem;
    padding: 2rem 1rem;
    border-radius: 1rem;
    background-color: #14A06F;
    color: #fff;       
}
```

**Adicionar imagens Pokemons**

```html
<li>
    Bulbasaur
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
      </li>
```

Um embaixo do outro: `flex-direction: column;`
 
 
Para que a imagem se mantenha dentro do quadrado verde: 

```css
ol.pokemons li img {
    max-width: 100%;
    heigth: 100px;
    
}
```

Apenas imagem para a direita: ` align-self: flex-end;`

**Incluir informações Completas Pokemons**

```html
<section class="content">
    <h1>Pokedex</h1>

    <ol class="pokemons">         

      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>
        
        <div class="detail">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
        </div>

      </li>

</section>
```

**Start Media**

```css
@media screen and (min-width: 380px){
    .pokemons {
        grid-template-columns: 1fr 1fr;
    }    
}
```

___________

## Protocolo HTTP

> API - servindo dados
> Protocolo HTTP = cliente | servidor

**Requisição HTTP**

Para montar uma requisição HTTP, temos a URL (path) | IP e porta do servidor e o endereço do que queremos.

A URL é composta:
- IP
- PATH
- ID
 
```html
URL: https://pokeapi.co/api/v2/pokemon/1
${IP: endereço} / ${path = caminho de identificação do recurso} / ${id}

IP: httops://pokeapi.co/ (domínio) DNS
    htpp://127.168.168/8080

PATH: api/v2/pokemon

ID: dentro do PATH, mostra qual o número do ID que será chamado, no caso, qual o pokemon
```

**Requisição para um servidor**

Request Method: GET | POST | PUT | DELETE 

- GET: buscar o recurso
- POST: inserir um novo pokemon
- PUT: atualizar o pokemon
- DELETE: deletar o pokemon 

**Query String**

- [x] Chave e valor;

- `https://pokeapi.co/api/v2/pokemon?type=grass&name=i` 
    - type=grass: tipo grama;
    - name=i: nomes iniciados em i.

- `https://pokeapi.co/api/v2/pokemon?offset=20&limit=2`
    - offset: 20: inicia  a busca a partir do 20;
    - limit: 2: limita por busca 2 itens (pokemons).

**Reponse Headers | Request Headers**

> Área de dados que podemos transmitir e receber informações, metadatos da requisição.
> Configuração da API

- Request: Authorization

**Request Body e Status Code**

- Dependendo do método que utilizarmos, teremos o Body.
- GET | DELETE não faz sentido
- POST | PUT possui BODY

**Status Code**
O que ocorreu com a requisição, um número que retorna

![image](https://user-images.githubusercontent.com/108991648/233863303-dd98a013-fe15-4d89-8f08-2af7ea6ba9bc.png)


___________

## Acessando APIS

[PokeAPI](https://pokeapi.co/)

Na documentação devemos utilizar o link de acesso a API

<spain><img src="https://user-images.githubusercontent.com/108991648/233863378-1bf01fee-f09e-48f7-bf79-5449f97385d0.png" alt="pokeapi" height="350"></img></spain>

`https://pokeapi.co/api/v2/pokemon/ditto`

Note que o exemplo vem com o nome do Pokemon ditto, esta informação pode ser alterada para o nome do pokemon o código de id. 

Aterar para uma Query String, com os dados iniciando do "0" e mostrando "10" por página, teremos uma resposta em JASON:

`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`

```js
{"count":1281,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}
```

**Chamar via HTTP o Endpoint**

Utilizamos o **Fetch API**



No arquivo de `main.js`, incluir os dados:

```js
//variáveis de inicio de dados e quantidade por página
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//chamar requisição
//fetch retorna uma Promise (promessa de um resultado)
//metodo then recebe uma function que terá uma response
fetch(url).then(function (response) {
    console.log(response)
})
```

> Processamento Assíncrono: executa e não tem a resposta de imediato

No browser, F12:
- Em Network, Disable Cache (ticado);
- Em Console, o Response será visualizado;
- Em Network, em Fetch, visualizar as requisições da API e em Previem, em results, visualizar os 10 pokemons chamados;

**Funcionará assim**

```js
fetch(url)
    .then(function (response) {
        response
            .json()
            .then(function (responseBody) {
            console.log(responseBody)
        })
    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
```

**Modelo mais limpo**

- Encadeamento de *then*;
- O primeiro then é o retorno da promise
- O segundo then é o retorno do primeiro

> Altera `function` para `=>`, é uma função especial

> Quando a Arrow Function `=>` tem apenas um item pode tirar as `{}` e incluir o item a frente

```js
//1º then: transformando o response em uma promessa do Body convertido em json 
// 2º then: recebe o Body convertido e imprime ele no console.log
// 
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
```

______________

## Debugando um projeto

- [x] Adicionar `debugger`

```js
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        debugger
        console.log(jsonBody)
    }) 
    .catch((error) => console.error(error))
```

No browser:
![image](https://user-images.githubusercontent.com/108991648/234023151-3c42d1a9-131d-4c01-9389-1f58d2914f55.png)

```js
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        debugger
        console.log(pokemonList)
    }) 
    .catch((error) => console.error(error))
```

![image](https://user-images.githubusercontent.com/108991648/234025378-94daa4ad-5dc7-4697-9f3f-a7cf1741830e.png)

**Converter uma Lista de JSON para uma lista de HTML**

- [x]  Criar `function`

```js
function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
            </div>
        </li>
        `
}
```


**Incluir a lista do Json para o HTML**

Exemplo:

```js
//retornando no HTML e pegando o ID da lista de Pokemons e atribuindo isto a uma variável
//a lista de HMTL concatenando outro item
const pokemonList = document.getElementById('pokemonList')
pokemonList.innerHTML += '<li>Teste</li>'
```

<span><img src="https://user-images.githubusercontent.com/108991648/234041106-ebc6561e-b82b-4000-8967-b463955cb54d.png" alt=""></img></span>

- pegando a lista via ID: `document.getElementById('pokemonList')`;
- fazendo a requisição HTTP: `fetch`
- Com o resultado dos pokemons estamos convertendo a estrutura de objeto em uma li
- E para cada pokemon está concatenando o resultado na pokemonList

```js
const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)            
        }
    }) 
    .catch((error) => console.error(error))
```

> neste exemplo, a contatenação está sendo feito de item a item 

<span><img src="https://user-images.githubusercontent.com/108991648/234042642-8cd31e8e-6634-4b0e-b43e-ec96ee626e24.png" alt=""></img></span>

**Separando o consumo de API da Manipulação de HTML**

- [x] Criar novo arquivo: `poke_api.js`, e incluir no html antes do main, pois este arquivo deve rodar primeiro


**poke_api.js**
```js
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
        .catch((error) => console.error(error))
}
```

**main.js**
```js
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)            
        }
    }) 
    .catch((error) => console.error(error))
```

> neste exemplo, a concatenação é feita apenas 1 vez

Converter uma lista de pokemons (objeto) em uma lista de pokemons (html)


```js
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {        

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

    const newHtml = newList.join('')

    pokemonList.innerHTML += newHtml
})
```

**Melhorando o código**

- Pega a lista de pokemons e mapeia `pokemons.map`
- Converte essa lista de pokemons para uma lista de li `convertPokemonToLi`
- junta todos os li sem separador `.join('')`
- concatena a nova lista com o HTML

```js
pokeApi.getPokemons().then((pokemons = []) => { 
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')       
    })
```

**Melhorar a função do HTML**

Em `poke_api.js`
- Promisse.all([]) - recebe uma array de promise 
- then.results - quando a lista terminar terá a lista com os resultados


```js
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
]).then((results) => {
    console.log(results)
})
```
**deletado**

- Manipular a lista de pokemons, os pokemons possuem `name` e `url`

<span><img src="https://user-images.githubusercontent.com/108991648/234089797-d31ea750-4ed9-470c-9030-c01f79d4a5c3.png" alt=""></img></span>

Faremos uma nova requisição para cada pokemon

- `return fetch(url)` No servidor, buscou a lista de pokemon pela url
- `.then((response) => response.json())` isso nos da um HTTP.response e a lista foi convertida para para JSON
- `.then((jsonBody) => jsonBody.results)` nos da uma JsonBody com muitos detalhes, porem, queremos apenas os resultados desta lista
- Pegamos a lista que estava dentro do JSON convertemos para `pokemons`, que foi transforamda em uma nova lista de busca do detalhe`pokemon` = `pokemon.map(pokeApi.getPokemonDetail))`
- `Promise.all(detailRequests))` estamos esperando que todas as requisições terminem e quando todas elas terminarem, e nos dara uma lista dos pokemons

```js
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
   
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemon) => pokemon.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        }
```

![image](https://user-images.githubusercontent.com/108991648/234299807-1b3396ae-df36-427a-8361-f74cbc4b5550.png)

**Melhorando função: convertPokemonToLi**

```js
function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) =>`<li class="type">${typeSlot.type.name}</li>` )
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypeToLi(pokemon.types).join(' ')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" 
                alt="${pokemon.name}">
            </div>
        </li>
        `
}
```

![image](https://user-images.githubusercontent.com/108991648/234333764-ac51137b-baa8-4edb-93a2-8c6656efe8b8.png)

**Convertendo o modelo da PokeApi para o nosso modelo**

- [x] criar arquivo `pokemon_model.js` e linkar como primeiro no HTML

- Foi convertido do PokeDetail para o novo PokeApi

**pokemon_model.js**
```js

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}
```

**poke-api.js**
```js
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}
```

**main.js**
```js
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join(' ')}
                </ol>
                <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
            </div>
        </li>
        `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => { 
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
```

__________

**Adicionando os tipos de pokemons dinamicamente**

![image](https://user-images.githubusercontent.com/108991648/234427947-84d5d4d3-8e21-43f5-b569-fa0c33271c8f.png)

No CSS, em `pokedex.css` incluir uma classe com cada cor:

```css
.normal {
    background-color: #A8A878;
}
.fire {
    background-color: #F08030;
}
.water {
    background-color: #6890F0;
}
.grass {
    background-color: #80D555;
}
.eletric {
    background-color: #F8D030;
}
.ice {
    background-color: #98D8D8;
}
.ground {
    background-color: #C03028;
}
.flying {
    background-color: #F85888;
}
.poison {
    background-color: #A040A0;
}
.fighting {
    background-color: #C03028;
}
.psychic {
    background-color: #F85888;
}
.dark {
    background-color: #705848;
}
.rock {
    background-color: #B8A038;
}
.bug {
    background-color: #A8B820;
}
.ghost {
    background-color: #705898;
}
.stell {
    background-color: #B8B8D0;
}
.dragon {
    background-color: #7038F8;
}
.fairy {
    background-color: #FFAEC9;
}
```

- Eliminar o `background-color` de `.pokemon ` e`.pokemon .detail .types .type`.
- no `main.js`, alterar:

```js
     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
```

![image](https://user-images.githubusercontent.com/108991648/234430895-752090fa-a1fa-4921-a550-569459eb3275.png)
<span><img src="" alt=""></img></span>

- Dar brilho para os tipos e incluir letra maiúscula.

```css
.pokemon .name {  
    text-transform: capitalize;
    
}

.pokemon .detail .types .type {
        filter: brightness(1.1); 
        text-align: center;  
```

![image](https://user-images.githubusercontent.com/108991648/234432273-769a7c07-1866-447e-9cb7-8089e6b796a7.png)

____________

**Adicionando botão de paginação**

- Em HTML, criar div para button:

```html
    <div class="pagination">
      <button id="loadMoreButton" type="button">
          Load More
      </button>
    </div>
</section>
```

- No CSS, `pokedex.css`:

```css
.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
}

.pagination button {
    padding: .25rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    color: #fff;
    background-color: #6c79db;
    border: none;
    border-radius: 1rem;
}
```

- Em JS `main.js`:

```js
const limit = 5;
let offset =0;

const loadMoreButton = document.getElementById('loadMoreButton')

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHtml += newHtml
    })
}

loadMoreButton.addEventListener('click', () => {
    loadPokemonItens()
})
```

Que será alterado para:

```js
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset =0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')

            pokemonList.innerHtml += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
```

**Limitando pokempns da 1ª geração**






