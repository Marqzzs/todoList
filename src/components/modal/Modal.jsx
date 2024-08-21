import React, { useState } from 'react';

const Modal = ({
	visible,
	onClose,
	mode,
	initialTaskDescription,
	addOrUpdateTask,
}) => {
	const [taskDescription, setTaskDescription] = useState(
		initialTaskDescription || '',
	);

	const handleTaskDescriptionChange = (event) => {
		setTaskDescription(event.target.value);
	};

	const handleConfirmTask = () => {
		if (taskDescription.trim()) {
			addOrUpdateTask(taskDescription);
			setTaskDescription(''); // Limpa o campo de texto após adicionar ou editar a tarefa
			onClose(); // Fecha o modal após confirmar
		}
	};

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(135, 88, 255, 0.4)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div className="modalContent">
				<h1 className="title">Descreva sua tarefa</h1>
				<textarea
					className="modalInput"
					placeholder="Exemplo de Descrição"
					onChange={handleTaskDescriptionChange}
					value={taskDescription}
				></textarea>
				<button className="buttonModal" onClick={handleConfirmTask}>
					{mode === 'add' ? 'Confirmar tarefa' : 'Salvar alterações'}
				</button>
			</div>
		</div>
	);
};

export default Modal;
