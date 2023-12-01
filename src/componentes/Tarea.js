import React from 'react';
import '../estilo/Tarea.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completo, completaTarea, borraTarea }) {
  return (
		<div className={completo ? 'tarea-caja completo' : 'tarea-caja'}>
			<div className='tarea-texto'
			onClick={() => completaTarea(id)} >
				{texto}
			</div>
			<div className='caja-icono'
			onClick={() => borraTarea(id)}>
				<AiFillCloseCircle className='icono' />
			</div>
		</div>
	)
}

export default Tarea;