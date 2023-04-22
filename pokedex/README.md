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
    height: 100px;
}
```

**Adicionar imagens Pokemons**

```html
<li>
    Bulbasaur
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
      </li>
```








 



