import { useEffect, useState } from "react";
import axios from "axios";
import Tarefa from "../../../models/Tarefa";

function TarefasNaoConcluidas(){

const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  //Realizar operações ao carregar o componente
  useEffect(() => {
    console.log("O componente foi carregado!");
    buscarTarefasAPI();
  }, []);

  async function buscarTarefasAPI() {
    try {
      const resposta = await axios.get(
        "http://localhost:5000/api/tarefas/naoconcluidas"
      );
      setTarefas(resposta.data);
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

return (
    <div id="listar_tarefas_concluidas">
      <h1>Listar Tarefas não concluidas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            {/* <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço</th> */}
            <th>Criado Em</th>
            <th>Não Concluida</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              {/* <td>{produto.descricao}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.preco}</td> */}
              <td>{tarefa.criadoEm}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefasNaoConcluidas;