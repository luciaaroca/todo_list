import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card"
import Tasks from "../../../data.json"
import './Todolist.css'
const Todolist = () => {
      const tareas = Tasks; //Almacenamos nuestras tareas (data.json) en una constante

      //useState-> funciones para actualizar estado
      const [tasks, setTasks] = useState([]); //Array de items a representar TASKS (estado inicial [] vacío)
      const [mensaje, setMensaje] = useState(""); //MENSAJE (estado inial "")
      const [error, setError] = useState("");  // ERROR (estado inicial "")
      const [values, setValues] = useState({ //FORMULARIO (estado inicial)
            title: "",
            description: "",
            time: ""
          });
      
      //Se ejecuta cada vez que el usuario escribe un input
      const handleChange = (e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
            setError(""); // Limpiar error al escribir
        };

      //Función que se ejecuta al enviar el formulario
      const handleSubmit = (e) => {
            e.preventDefault();//evita que recargue la pag
            console.log(values);
            console.log(e.target.title.value);
            console.log(e.target.time.value);

            if(values.title.length<6){ //validación
              setError("El título debe tener al menos 6 caracteres")
              return; // No continuar
            }

            //AÑADIR TASKS->Cada vez handleSubmit-> añadimos objeto al array -> con un spread operator array + values nuevos
            setTasks([...tasks, values])

            //AÑADIR MENSAJE -> mensaje de carga correcta
            setMensaje("Tarea añadida correctamente");
            setTimeout(() => {
            setMensaje("");//al pasar 3segs se elimina el mensaje
            }, 3000);  

            //VALORES FORMULARIO
            setValues({ //limpiamos los inputs al enviar formulario
              title:"",
              description:"",
              time:""
            })
        };//cierre

      

      //--------------------
      //FUNCIONES
      //paintData()->Recorre el array de tasks(cada tarea añadida) y devuelve un componente Card
      //.map()-> recorre nuestro array y nos devuelve otro
      const paintData = () => tasks.map((task,index) => <Card data={task} remove={() =>removeTask(index)} key={uuidv4()}/>);//le pasamos las funciones y datos el hijo
      //loadData() ->recarga los datos
      const loadData = () => setTasks(tareas); 
      //removeData() ->vacía array de Tasks
      const removeData = () => setTasks ([]); 

      //removeTask -> función para eliminar una task -> se pasa a el hijo el Componente Card
      //recibe i= index(posicion)     
      //crea un nuevo array que NO incluya la task que coincida con i
      const removeTask = (i) => {
          const filteredTasks = tasks.filter((task,index) => index != i) //usamos filter
          setTasks(filteredTasks) //actualiza el estado de tasks
      }; 
        
      //--------------------------

      //RETURN -> lo que renderizaremos en la pantalla
      //onSubmit={handleSubmit} -> cuando el usuario envía el formulario completo
      //onChange={handleChange} -> cada vez que el usuario escrible algo en el input se ejecuta
      return <div>
          <form onSubmit={handleSubmit} className="formulario"> 
            <label htmlFor="name">Título</label><br />
            <input type="text" name="title" value={values.title}  onChange={handleChange} /><br />

            <label htmlFor="description">Description</label><br />
            <input type="text" name="description" value={values.description}  onChange={handleChange} /><br />

            <label htmlFor="time">Tiempo estimado</label><br />
            <input type="text" name="time" value={values.time} onChange={handleChange} className="time"/>
            <br />
            {/* Validación para completar los campos */}
            {values.title && 
              values.description && 
              values.time ?
              (<button type="submit" > ADD </button>)
              :(
              <b className="completar">"Completa los campos"</b>
            )}
          </form>

          <article className="mensajes">
            {error && <div className="error">{error}</div>}
            {mensaje && <div className="mensaje">{mensaje}</div>}
          </article>
          
          <div className="botones">
            {/* Al hacer click en uno u otro botón llamamos a las funciones load y remove */}
            <button onClick={loadData}>Reset</button>
            <button onClick={removeData}>Clear</button> 
          </div>
          {/* Llamamos a la funcion de paintData para que se vean las cards */}
          {paintData()}
        </div>;
};

export default Todolist;
