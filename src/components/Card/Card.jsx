

export default function Card(props){
   
    console.log(props);
    
    
    return (
        <div className="card">
           <div className="card-nome">{props.item.nome}</div>
           <div className="card-image"><img src={props.item.imagem}/></div>
           <div className="card-evoluipara">{props.evoluiPara == null || props.evoluiPara == undefined ?(<>Não evolui!</>) : (<>Evolui para: {props.item.nome}</>)}</div>
           
        </div>
    )
}