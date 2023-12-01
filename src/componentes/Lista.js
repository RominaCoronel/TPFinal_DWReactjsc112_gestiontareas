import React, { useState } from 'react';
import Formulario from './Formulario';
import '../estilo/Lista.css';
import Tarea from './Tarea';

function Lista() {

	const [tareas, setTareas] = useState([]); /*estado inicial*/

	const agregaTarea = tarea => {
		console.log(tarea);
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
		}
	}

	const borraTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}

	const tareaCompleta = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if (tarea.id === id) {
				tarea.completa = !tarea.completa;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	}	


  return (
		<>
			<Formulario onSubmit={agregaTarea} />
			<div className='lista-caja'>
				 {
					tareas.map((tarea) => 
						<Tarea 
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completo={tarea.completa}
							borraTarea={borraTarea}
							completaTarea={tareaCompleta}
						/>
					)
				 }
			</div>
		</>
	)
}

export default Lista;