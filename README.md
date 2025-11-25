
# EJERCICIO: TODO LIST 📓

Una aplicación de lista de tareas (**Todo List**) construida con **React** usando **useState**, **props**, **eventos** y componentes reutilizables. Permite agregar, editar, marcar como completadas y eliminar tareas, con un flujo completo de interacción y validación.


## 🛠 Tecnologías utilizadas

- **React**: Biblioteca principal de UI.
- **React Hooks**: `useState` para manejar estados locales.
- **JSX**: Para construir la estructura de los componentes.
- **Props**: Para pasar datos y funciones entre `TodoList` y `Card`.
- **UUID**: Paquete npm para generar claves únicas para cada tarea.
- **CSS**: Estilos personalizados para Card, botones y formulario.
- **JSON**: Archivo `data.json` para precarga de tareas.
- **Netlify**: Despliegue de la aplicación.


## 🎯 Funcionalidades principales

1. **Agregar tareas**
   - Formulario con input y botón **ADD**.
   - El botón ADD solo aparece cuando el input tiene al menos un valor.
   - Validación: el título debe tener **6 caracteres mínimo**.
   - Después de agregar una tarea, el input se vacía automáticamente.

2. **Listar tareas**
   - Componente `List` que recorre las tareas.
   - Componente `Card` o `Item` que muestra cada tarea con título, descripción y tiempo estimado.
   - Cada tarjeta tiene botones **EDIT**, **DELETE** y un **checkbox** para marcar la tarea como completada.

3. **Editar tareas**
   - Al pulsar **EDIT**, se abre un formulario prellenado con la información de la tarea.
   - Guardar los cambios actualiza la tarea en el estado global.

4. **Eliminar tareas**
   - Botón **DELETE** en cada tarjeta elimina la tarea correspondiente.
   - Botón **CLEAR** elimina todas las tareas actuales.

5. **Reset de tareas**
   - Botón **RESET** recarga las tareas precargadas desde un archivo JSON (`data.json`).

6. **Mensajes y temporizadores**
   - Mensaje de confirmación "Tarea añadida" durante 5 segundos.
   - Si el usuario no envía la tarea en 20 segundos, el input se vacía y el botón ADD desaparece.

7. **Marcado como completada**
   - Cada tarea tiene un **checkbox** para marcarla como completada.
   - El estado `completed` se guarda en el array de tareas.

## Despliegue en Netlify
https://fancy-salmiakki-cff67c.netlify.app/

## DRepositorio de Git Hub
https://github.com/luciaaroca/todo_list.git



