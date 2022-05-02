import React, { useState } from 'react';
import { JsxFlags } from 'typescript';
import Botao from '../components/botao';
import { Cronometro } from '../components/cronometro';
import Form from '../components/form';
import { Lista } from '../components/lista';
import style  from '../pages/App.module.scss';
import {ITarefa} from '../type/Tarefas'

function App() {

  //att o Array
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  //criando um selecionado
  const [selecionado, setSelecionado] = useState<ITarefa>(); 

  //setando o valor do setSelecionada
  function selecionaTarefa (tarefaSelecionada:ITarefa){

    setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefas => ({
      ...tarefas,
      selecionado:tarefas.id === tarefaSelecionada.id ? true : false
    })))

    setSelecionado(tarefaSelecionada);

  }

  //iniciando a logica para finalizar as tarefas
  function finalizarTarefa(){

    if(selecionado){

      setSelecionado(undefined)//definindo ele como 'indefinido'

      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {

        if(tarefa.id === selecionado.id){
          return{...tarefa, selecionado: false, completado: true,}
        }

        return tarefa

      }))

    }

  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
  
}

export default App;