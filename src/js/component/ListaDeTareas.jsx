import React, { useState } from 'react';
import '../stylesComponentes/ListaDeTareas.css';
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tareas.jsx';


function ListaDeTareas()  {

  const [tareas, setTareas] = useState([]);


  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };


  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };


  return(
    <>
      <div
      className='titulo'>
        <h1>ToDos</h1>
      </div>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'> 
      {
        tareas.map((tarea) => 
        <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={ tarea.texto }
          completada={ tarea.completada }
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
        )
      } 
      </div>
    </>
  );
}

export default ListaDeTareas;