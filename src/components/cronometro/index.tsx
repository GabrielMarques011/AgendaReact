import Botao from "../botao";
import { Relogio } from "./relogio";
import style from './cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utis/time";
import { ITarefa } from "../../type/Tarefas";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa:() => void
}

//trazendo valores para selecionar e para finalizar as tarefas
export function Cronometro({selecionado, finalizarTarefa}: Props){

    /* console.log('conversão: ', tempoParaSegundos('01:01:01')) */
    //Criando um novo state para o tempo que sera decrementado
    const [tempo, setTempo] = useState<number>()

    //aplicando efeito para conseguir puxar o valor
    //Array de dependencias como base para executar a função useEfect [selecionado]
    useEffect(()=>{
        if(selecionado?.tempo){
        
            setTempo(tempoParaSegundos(selecionado?.tempo))

        }
    })
    
    //iniciando contador
    function regressiva(contador: number = 0){
    
        setTimeout(() => {

            if(contador > 0){
                setTempo(contador -1)
                return regressiva(contador-1)
            }

            finalizarTarefa();

        }, 1000)

    }        

    return(
        
        <div className={style.cronometro}>

            <p className={style.titulo}>Escolha um 'Card' e inicie o Cronometro</p>

            Tempo : {tempo}

            <div className={style.relogioWrapper}>

                <Relogio tempo={tempo}/>

            </div>
            <Botao onClick={() => regressiva(tempo)}>

                Iniciar!

            </Botao>

        </div>

    )

}