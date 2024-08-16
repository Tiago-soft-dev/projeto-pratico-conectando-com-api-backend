import React from 'react'
import './Card.css'

export default function Card(props){
   
    return (
        <div className="card">
           <div className="card-nome">{props.item.nome}</div>
           <div className="card-image"><img src={props.item.imagem}/></div>
           <div className='card-evoluipara'>{props.item.evoluiPara == null || props.item.evoluiPara == undefined ?(<>Não evolui!</>) : (<>Evolui para: {props.item.nome}</>)}</div>
           <button onClick={()=>props.deleteComponent(props.item._id)}>deletar</button>
           
        </div>
    )
}