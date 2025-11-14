import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastrarTarefa from "./components/pages/produto/CadastrarTarefa";
import ListarTarefa from "./components/pages/produto/ListarTarefa";
import TarefasConcluidas from "./components/pages/produto/TarefasConcluidas";
import TarefasNaoConcluidas from "./components/pages/produto/TarefasNaoConcluidas";
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
               <Link to="/tarefa/alterar/:id"> Alterar Tarefas </Link>
            </li>
            <li>
              <Link to="/tarefa/concluidas"> Tarefas Concluidas </Link>
            </li>
            <li>
              <Link to="/tarefa/naoconcluidas"> Tarefas não concluidas </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarTarefa/>} />
          <Route path="/tarefa/cadastrar" element={<CadastrarTarefa/>} />
          <Route path="/tarefa/listar" element={<ListarTarefa/>} />
          <Route path="/tarefa/alterar/:id" element={<AlterarTarefa/>} />
          <Route path="/tarefa/concluidas" element={<TarefasConcluidas/>} />
          <Route path="/tarefa/naoconcluidas" element={<TarefasNaoConcluidas/>} />
        </Routes>
        <footer>
          Rodapé da aplicação
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;