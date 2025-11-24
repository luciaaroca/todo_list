import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card"
import Tasks from "../../../data.json"
import './Todolist.css'
const Todolist = () => {
  const tareas = Tasks; //Almacenamos nuestras tareas en una constante
  const [tasks, setTasks] = useState([]); //Array de items a representar 
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");  // estado para mensaje de error
  
  // Estado inicial del formulario
  const [values, setValues] = useState({
        title: "",
        description: "",
        time: ""
      });
  //cambia el estado cambia el valor
  const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
        setError(""); // Limpiar error al escribir
    };
   //sutituye a document.getelementbyId.addEventListener...etc
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(e.target.title.value);
        console.log(e.target.time.value);
        if(values.title.length<6){
          setError("El título debe tener al menos 6 caracteres")
          return; // No continuar
        }

        //Cada vez handleSubmit-> añadimos objeto al array -> con un spread operator array + values nuevos
        setTasks([...tasks, values])

        //mensaje de carga correcta
        setMensaje("Tarea añadida correctamente");
        setTimeout(() => {
        setMensaje("");
        }, 3000);
        //limpiamos los inputs
        setValues({
          title:"",
          description:"",
          time:""
        })
    };
  const paintData = () => tasks.map((task,index) => <Card data={task} remove={() =>removeTask(index)} key={uuidv4()}/>);//le pasamos las funciones y datos el hijo
  // funciones flecha si no ponen nada tiene implicito un return
  const loadData = () => setTasks(tareas); //carga los elementos de nuestro array products
  
  const removeData = () => setTasks ([]); // elimina todo items =[]

        
  const removeTask = (i) => {
      const filteredTasks = tasks.filter((task,index) => index != i)
      setTasks(filteredTasks) //añadimos al array los items filtrados (carga los items con un elemento nuevo)
  }; //i-> posición --> solo te devuelve los elementos que no coinciden con ese i(lo "borra")
      //La función remove se la tenemos que pasar el hijo ya que el botón de borrar está definido en ese componente
  return <div>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" value={values.title}  onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" value={values.description}  onChange={handleChange} /><br />

        <label htmlFor="time">Tiempo estimado</label><br />
        <input type="text" name="time" value={values.time} onChange={handleChange} className="time"/>
        <br />
        {values.title && 
          values.description && 
          values.time ?
          (<button type="submit" > ADD </button>)
          :(
           <b className="completar">"Completa los campos"</b>
        )}
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {mensaje && <div className="mensaje">{mensaje}</div>}

      <div className="botones">
        <button onClick={loadData}>Reset</button>
        <button onClick={removeData}>Clear</button> 
      </div>
      {paintData()}
    </div>;
};

export default Todolist;
