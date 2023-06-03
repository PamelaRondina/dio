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

- no `stels.css` do Header, incluir estilos:

~~~css

~~~
