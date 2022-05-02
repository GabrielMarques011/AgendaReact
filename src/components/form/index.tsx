import React from 'react';
import { ITarefa } from '../../type/Tarefas';
import Botao from '../botao';
import style from './form.module.scss'
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component 

<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{

    //valores nos estados inicias
    state = {
        tarefa:'',
        tempo:'00:00'
    }

    addTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()

        //this.props serviu para localizar o setTarefas
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas,
            {
                ...this.state,
                selecionado:false,
                completado:false,

                //buscando os ids
                id:uuidv4()
            
            }
        
        ])
        
        console.log('state', this.state);

        //aqui ele está limpando os campos
        //aqui é o estado final logo apos precionar o botão adicionar
        this.setState({
            tarefa:'',
            tempo:"00:00:00"
        })
    }

    render() {
        return (
            //bind(this) aplicamos isso para que ele consiga acessar a função
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Nome da tarefa:</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Digite o nome da tarefa..."
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo da tarefa:</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        step="1"
                        max="02:00:00"
                        min="00:00:00"
                        required
                    />
                </div>
                {/* trzaendo o botao, e determinando um texto para ele */}
                <Botao type='submit'>
                    Adicionar
                </Botao>
                
            </form>
        )
    }
}
export default Form;