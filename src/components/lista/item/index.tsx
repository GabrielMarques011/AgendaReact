import { ITarefa } from '../../../type/Tarefas'
import style from '../lista.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionda: ITarefa) => void
}

//tipando com a interface Tarefa
export function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props){
    console.log("item atual: ", {tarefa, tempo, selecionado, completado, id})
    return(

        //"?" é com se fosse o "ENTÃO..."
        //isso add no ClassName para dar o funcionamento do metodo Concluido
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""}${completado?style.itemCompletado : ""}`}onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            
            {completado && <span aria-label='Concluida' className={style.concluido}></span>}
        </li>

    )

}