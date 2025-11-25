import React,{useState} from "react";
import './Card.css'

const Card = ({data,remove,checkcompleted, edit}) => { //le pasamos del padre data / remove /checkcompleted
  const {title, description, time, completed} = data //data -> datos de nuestro data.json

  //ESTADOS
  const [isEditing, setIsEditing]= useState(false) //para mostrar/esconder el form editando
  const [editValues, setEditValues]=useState({...data})//PARA GUARDAR EL VALOR DEL FORMULARIO
 
  //función que se ejecuta cada vez que el usuario escribe un input
 const handleEditChange = (e) => {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  //Función que se ejecuta al enviar el formulario
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editValues);
    edit(editValues);//CUANDO ENVIAMOS EDITAR-> ENVIAMOS EL VALOR DEL FORMULARIO
    setIsEditing(false);//al dar a save--> queremos que el form se esconda otra vez
  };

  //CARD
  return <article className="card">
    <section className="headerCard">
      <input type="checkbox" checked={completed} onChange={checkcompleted}/> 
      <h3>{title || "--" }</h3>
    </section>
    <p className="description">{description || "--" }</p>
    <p><b>{"⏱️ " + time || "--" }</b></p>
    <br/>
    <button onClick={remove}>Delete</button>
    <button onClick={()=>setIsEditing(true)}>Edit</button>  {/*cambia el estado del card --> true*/}
    {isEditing? 
        <form onSubmit={handleEditSubmit} className="formEdit"> 
          <input 
            type="text"
            name="title" 
            value={editValues.title}
            onChange={handleEditChange } /><br />
          <input 
            type="text"
            name="description"
            value={editValues.description}
            onChange={handleEditChange } /><br />
          <input 
            type="text" 
            name="time" 
            value={editValues.time}
            onChange={handleEditChange } 
            className="time"/><br />
          <article className="botonesEdit">
            <button type="submit">SAVE</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button> {/*volvemos a cambiar el estado de la card --> false*/}
          </article>
        </form>
    : ""}
    </article>;
};

export default Card;
