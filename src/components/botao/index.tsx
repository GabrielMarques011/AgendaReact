import React from 'react';
import style from './botao.module.scss'

class Botao extends React.Component<{
    
    type?: 'submit'
    /* type?: "button" | "submit" | "reset" | undefined */

    onClick?:() => void

    }>{
    render() {

        const {type='button', onClick} = this.props;

        return(

            <button onClick={onClick} type={type} className={style.botao}>

                {/* {this.props.texto}{ */}
                {this.props.children}{/* deste componente ira trazer o texto */}

            </button>

        )
    }
}

export default Botao;