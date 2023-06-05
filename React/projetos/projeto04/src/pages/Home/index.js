import {Header} from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/Itemlist"
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img 
          src={background} 
          className="background" 
          alt="background app"
        />
        <div className="info">
          <div>
            <input 
              name="usuario" 
              placeholder="@username"            
            />
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
          <div>
            |<h4>Repositórios</h4>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
