import { useState } from 'react'
import { ITarefa } from '../../type/Tarefas'
import {Item} from './item'
import style from './lista.module.scss'

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item  => (
                    <Item
                        selecionaTarefa={selecionaTarefa} 
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}