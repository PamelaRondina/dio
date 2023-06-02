import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// buscando o ID "root" do index.html
const container = document.getElementById("root");
//Criar o ponto inicial da aplicação
const root = createRoot(container);
//Renderizar o componente App.jsx
root.render(<App/>);