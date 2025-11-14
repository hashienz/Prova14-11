import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastrarTarefa from "./components/pages/produto/CadastrarTarefa";
import ListarTarefa from "./components/pages/produto/ListarTarefa";
import AlterarTarefa from "./components/pages/produto/AlterarTarefa";

//Instalar biblioteca na aplicação
//npm i nome_biblioteca @types/nome_biblioteca

//Componentes
// - HTML, CSS e JS ou TS
function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/cadastrar"> Cadastrar Tarefas </Link>
            </li>
            <li>
               <Link to="/tarefa/alterar"> Alterar Tarefas </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarTarefa/>} />
          <Route path="/tarefa/cadastrar" element={<CadastrarTarefa/>} />
          <Route path="/tarefa/alterar" element={<AlterarTarefa/>} />
        </Routes>
        <footer>
          Rodapé da aplicação
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;