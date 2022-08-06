import React from "react";


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
       <aside>
        <h2>Estudos do dia </h2>
           <ul>
            {
                tarefas.map((item)=>(
                    <li>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))
            }
           </ul>
       </aside>
    );
}