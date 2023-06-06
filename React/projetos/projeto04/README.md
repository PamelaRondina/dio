## Projeto GitFind - React

FOTO 

## Consumir Dados Externos - API

- [x] Criar Aplicação com React `npx create-react-app nomeArquivo`

**Organizar as Pastas**

- [x] Limpar diretórios e arquivos iniciais;
- [x] Dentro do `src` criar diretórios: 
  - `pages`, e dentro criar:
    - `Home`;
  - `assets`: para o arquivo de background (Projeto [Figma](https://www.figma.com/file/IXySq1eGSvvY9nSGLbKcom/GitFind?type=design&node-id=2-2&t=xBUw5uMJ2ZaNwWfp-0)):
  - `components`, e dentro criar os componentes:
     - `Button`, `Header` e `Input`
     - Em cada diretório dos componentes criar `index.js` e `styles.css`  
- [x] Dentro do `src`, criar arquivo:
  - `styles.css`
- [x] O arquivo `App.js`, passará a chamar `index.js` e ficará dentro do diretório Home
- [x] No index. do `src`, Importar: 
  - `import App from "./pages/Home";`
  - `"import "./styles.css"`  
<br>

- [x]  Em `src`, arquivo principal `style.css`, iniciar estilização:
  - *, body e hr.

~~~css
  * {
    margin: 0;
    padding: 0;
}

body{
    /*Frame-Figma*/
    background-color: #1D2128;
}

hr {
    background-color: rgba(229, 229, 229, 0.2);
    border: 1px solid rgba(229, 229, 229, 0.2);
}
~~~
<br>

- [x] No `index.js` do Componente Header:

> `export { Header }` não será exportado para todos 

~~~js
import "./styles.css"

const Header = () => {
    return (
      <header>
        <h1>GitFind</h1>
      </header>
    )
}

export { Header };
~~~

- [x] No `index.js` do pages/Home:
    - importar o estilo do Header;
    - e puxar o Componente 

~~~js
import {Header} from "../../components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;

~~~
![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/4f84d1d8-3dc6-4c55-a0de-a9b97ecdedf2)

- [x] No `index.html` de public, colar link fonte Roboto do Google Fonts, no head.
- [x] no `styles.css` do Components/Header, incluir estilos:

  > componente funcional: `rfc`

~~~css
header {
    width: 100%;
    height: 52px;
    background-color: #2D333B;

    display: flex;
    align-items: center;
    justify-content: center;    
}

h1 {
    font-family: 'Inter, Roboto, Arial';
    font-size: 24px;
    color: #ffffff;    
}
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/198e87ef-be7d-42cb-8b03-e6c704cf086e)


**Importar imagem do Background**

- [x] No `index.js` de pages/Homes, adicionar:

~~~js
import background from "../../assets/background.png;"

> Para imagem é necessário incluir o `alt=""` -> descrição da imagem;

<Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
~~~

- [x] No diretório Home, criar arquivo `styles.css`

~~~css
/* conteudo da div - se manterá à direita*/
.conteudo {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

}

.background {   
    height: 100vh;
    position: absolute;
    left: 0;
}
~~~

- [x] Em `index.js` do pages/Homes, importar `styles.cs/pages/Home`

~~~js
import "./styles.css";
~~~

- [x] No `index.js` da pages/Home, após a imagem criar uma nova div para o conteúdo interno

~~~js
<div className="conteudo">
        <img 
          src={background} 
          className="background" 
          alt="background app"
        />
        <div className="info">

        </div>
      </div>
~~~

- [x] No `styles.css` do pages/Home estilizar nova div:

~~~css
.info {
    width: 60%;
    margin-right: 90px;
    margin-top: 40px;
    color: #ffffff;
}
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/1a58b52c-91a3-442c-9c88-aa672825cd80)

**Criar INPUT e BOTÃO BUSCAR**

- [x] em `index.js` do pages/Home dentro da div="info" criar outra div;

~~~css
<div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
      
          </div>
~~~

- [x] Em `styles.css` do pages/Homes, estilizar INPUT e BOTAO

~~~css
input {
    border: 1px solid #999999;
    border-radius: 22px;
    min-width: 250px;
    width: 80%;
    margin-right: 12px;
    background: transparent;
    font-size: 18px;
    padding: 10px;
}

button {
    border: 1px solid #999999;
    border-radius: 22px;    
    margin-right: 12px;;
    background: #2D333B;
    color: #FFFFFF;
    font-size: 18px;
    padding: 10px;
}
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/4ba2ebb6-a7d0-4117-9862-ff4867406f16)

**Informações do Profile**

- Em `index.js` pages/Home, incluir 
~~~js
 <button>Buscar</button>      
          </div>
          <div className="perfil">
            <img 
              src="https://avatars.githubusercontent.com/u/108991648?v=4"
              className="profile"
              alt="imagem de perfil"
            />
            <div>
            <h3>Pamela Rondina</h3>
            <span>@pamelarondina</span>
            <p>Descrição</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>      
    </div>
  );
}
~~~

- [x] Em `styles.css` do pages/Homes, estilizar PROFILE:

~~~css

.perfil {
    display: flex;
    margin: 20px 0;   
}

.profile {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 2px solid #E5E5E5;
    margin-right: 32px;
}

.perfil h3 {
    color: #999999;
    font-size: 24px;
    margin: 0;
}

.perfil span {
    display: block;
    color: #999999;
    font-size: 12px;
    margin: 0;
}


.perfil p {
    color: #999999;
    font-size: 12px;
    margin: 20px 0 0 0;
}
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/77de555c-9f82-4f2f-b895-bce55eac19d6)


**Artes dos Repositórios**

- [x] Criar Componente `ItemList` e Arquivo `index.jsx`

> rfc

~~~js
import React from 'react'
import "./styles.css"

function ItemList({title, description}) {
  return (
    <div className="item-list">
        <strong>{title}</strong>
        <p>{description}</p>
        <hr />
    </div>
  );
}

export default ItemList;
~~~

- [x] E criar `styles.css` 

~~~css
.item-list {
    margin: 24px 0;
}

.item-list strong {
    color: #539BF5;
    font-size: 24px;
    margin: 24px 0;
}

.item-list p {
    color: #999999;
    font-size: 12px; 
    margin: 24px 0;
}
~~~

- [X] Chamar o componente `ItemList` no `index.js` do pages/Home
  - 1º importar

  > `import ItemList from "../../components/Itemlist"` não há necessidade de incluir dentro das chaves, porque possui `export default`

~~~js
import {ItemList} from "../../components/Itemlist"

  <hr/>
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste 1" 
            description="teste de descrição"/>
            <ItemList title="Teste 1" description="teste de descrição"/>
            <ItemList title="Teste 1" description="teste de descrição"/>
          </div>
~~~

- Em `styles.css` do pages/Home estilizar:

~~~css
.repositorio {
    font-size: 32px;
    color: #FFFFFF;
    margin: 12px 0;
    text-align: center;
}
~~~

<hr>

## Buscar API - Requisição com Fetch

- [x] No `index.js` do pages/Homes, criar um estado para armazenar o valor que está no input;
- [x] E, criar variáveis `useState`.

~~~js
import {useState} from "react";
...
import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  
  return (
    <div className="App">
~~~

- [x] No input incluir dados:

> setar o para atualizar o valor do estado

~~~js
 <input 
              name="usuario"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"            
            />
~~~

- [x] Método que vai buscar os dados, armazenr GitHUb:

~~~js
  const [currentUser, SetCurrentUser] = useState(null);
  const [repos, SetRepos] = useState(null);
~~~

- [x] Criar função assíncrona `handleGetData`, 

> Como estamos buscando dados de uma API exterma, não sabemos quanto tempo vai demorar

- O valor que o usuário incluiu no `input` será registrado em `${user}`

~~~js
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    console.log(newUser);
  }
~~~

- [x] Para a função acima ter efeito, criamos `onClicK` no botão, e chamando a função:

~~~js
 <button onClick={handleGetData}>Buscar</button> 
~~~

- [x] Com a página na web, F12, Console. Buscar:

**Buscar os dados do usuário / Salvar**
  - Foto: `avatar_url`
  - Nome: `name`
  - Descrição: `bio`
  - Nome usuário: `login`

  ~~~js
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      SetCurrentUser({avatar_url, name, bio, login})
    }   
  }
~~~

  - [x] Apenas será exibido os repositórios se possui o currentUser.name, todo o perfil vai pra dentro do `{currentUser.name ? (colarPErfil)}`

~~~js
    ...
    <button onClick={handleGetData}>Buscar</button>      
          </div>
          {currentUser?.name ? (<>
            <div className="perfil">
              <img 
                src="https://avatars.githubusercontent.com/u/108991648?v=4"
                className="profile"
                alt="imagem de perfil"
              />
              <div>
                <h3>Pamela Rondina</h3>
                <span>@pamelarondina</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr/>
          </>
          ): null}
~~~

  - [x] E o mesmo serve para os repositórios:

~~~js
    ...
      ): null}
          {repos?.length ? (          
          <div>
            <h4 className="repositorio">Repositórios</h4>     
            <ItemList title="Teste 1" description="teste de descrição"/>
            <ItemList title="Teste 1" description="teste de descrição"/>
            <ItemList title="Teste 1" description="teste de descrição"/>
          </div>
          ): null}
~~~

**Finalizando Buscas do Usuário**

~~~js
      ...
                 <div className="perfil">
              <img 
                src={currentUser.avatar_url}
                className="profile"
                alt="imagem de perfil"
              />
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr/>
          </>
~~~

**Buscando dados do repositório**

- [x] Fazer um map, no itemList

  - Nome do repositório: `name`
  - Descrição do repositório: `description`

  ~~~js
...
         <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr/>
          </>
          ): null}
          {repos?.length ? (                 
          <div>            
            <h4 className="repositorio">Repositórios</h4>  
            {repos.map(repo => (
              <ItemList title={repo.name} description={repo.description}/>
            ))}       
          </div>
          ): null}
  ~~~