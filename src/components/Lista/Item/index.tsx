import React from "react";
import styles from '../styles.module.scss';
export function ItemLista(props:{tarefa:string,tempo:string}){
    const {tarefa,tempo } = props;
    return(
        <li className={styles.listaTarefas}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}