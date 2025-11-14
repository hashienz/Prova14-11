import { useState } from "react";
import axios from "axios";
import Tarefa from "../../../models/Tarefa";



function CadastrarTarefa(){
    const[titulo, setTitulo] = useState ("");
     function enviarProduto(event: any) {
    event.preventDefault();
    submeterProdutoAPI();
  }

  async function submeterProdutoAPI() {
    //Biblioteca AXIOS
    try {
      const tarefa: Tarefa = {
        titulo
      };
      const resposta = await axios.post("http://localhost:5000/api/tarefas/cadastrar", tarefa);            
      console.log(await resposta.data);
    } catch (error : any) {
      if(error.status === 409){
        console.log("Esse tarefa já foi cadastrado!");
      }
    }
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={enviarProduto}>
        <div>
          <label>Nome:</label>
          <input onChange={(e : any) => setTitulo(e.target.value)} type="text" />
        </div>
        {/* <div>
          <label>Descrição:</label>
          <input
            type="text"
            onChange={(e: any) => setDescricao(e.target.value)}
          />
        </div> */}
        {/* <div>
          <label>Quantidade:</label>
          <input
            type="text"
            onChange={(e: any) => setQuantidade(e.target.value)}
          />
        </div> */}
        {/* <div>
          <label>Preço:</label>
          <input type="text" onChange={(e: any) => setPreco(e.target.value)} />
        </div> */}
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarTarefa;
