import React from "react";
import { ItemLista } from "./Item/index";

import style from './styles.module.scss';

export default function Lista(){
    const tarefas = [
        {
            tarefa:'React',
            tempo:'02:00:00'
        },
        {
            tarefa:'javascript',
            tempo:'01:30:00'
        },
        {
            tarefa:'React Native',
            tempo:'01:30:00'
        }
    ]
    return(
       <aside className={style.listaTarefas}>
        <h2>Estudos do dia </h2>
           <ul>
            {
                tarefas.map((item,index)=>(
                    <ItemLista tarefa={item.tarefa} tempo={item.tempo}/>
                ))
            }
           </ul>
       </aside>
    );
}