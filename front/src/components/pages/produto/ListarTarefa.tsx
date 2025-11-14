import { useEffect, useState } from "react";
import axios from "axios";
import Tarefa from "../../../models/Tarefa";


function ListarTarefa() {
  //Estados - Variáveis
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  //Realizar operações ao carregar o componente
  useEffect(() => {
    console.log("O componente foi carregado!");
    buscarTarefasAPI();
  }, []);

  async function buscarTarefasAPI() {
    try {
      const resposta = await axios.get(
        "http://localhost:5000/api/tarefas/listar"
      );
      setTarefas(resposta.data);
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

  async function concluirTarefa(id : string){    
    try {
      const resposta = await axios.get(`http://localhost:5000/tarefas/concluidas/${id}`);
      buscarTarefasAPI();
    } catch (error) {
      console.log("Erro ao concluir a tarefa: " + error);
    }
  }

  
  return (
    <div id="listar_tarefas">
      <h1>Listar Tarefas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Criado Em</th>
            <th>Concluir</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.criadoEm}</td>
              <td>
                <button onClick={() => concluirTarefa(tarefa.id!)}>Concluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefa;

