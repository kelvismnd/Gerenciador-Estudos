import React from "react";
import './styles.scss'

type Props ={
    titulo:string;
}

export function Botao ({titulo}:Props){
    return(
      
            <button className="botao">{titulo}</button>
        
    )
}    