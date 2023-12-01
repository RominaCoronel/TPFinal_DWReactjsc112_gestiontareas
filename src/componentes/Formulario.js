import React, { useState } from 'react';
import '../estilo/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

	const [input, setInput] = useState('');

	const cambiar = e => {
		 setInput(e.target.value);
		 console.log(e.target.value);
	}

	const enviar = e => {
		e.preventDefault();
		 
		const nuevaTarea = {
			id: uuidv4(),
			texto: input,
			completo: false
		}
		
		props.onSubmit(nuevaTarea);
	}
	
  return (
    <form className='tarea-formulario'
		onSubmit={enviar}>
			<input
				className='tarea-input'
				type='text'
				placeholder='Nueva tarea...'
				name='texto'
				onChange={cambiar}
			/>
			<button className='tarea-boton'>
				Agregar tarea
			</button>
    </form>
    )
}

export default Formulario;
