import React, { useState } from 'react';
import List from '../components/List/List';
import Modal from '../components/modal/Modal';

const Main = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [lists, setLists] = useState([]);
	const [editingTask, setEditingTask] = useState(null);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleOpenEditModal = (task) => {
		setEditingTask(task);
		setIsEditModalOpen(true);
	};

	const addNewTask = (taskDescription) => {
		const newTask = { id: Date.now(), description: taskDescription };
		setLists([...lists, newTask]);
		handleCloseModal();
	};

	const updateExistingTask = (taskId, newDescription) => {
		setLists(
			lists.map((task) =>
				task.id === taskId
					? { ...task, description: newDescription }
					: task,
			),
		);
	};

	const handleDeleteTask = (taskId) => {
		setLists(lists.filter((task) => task.id !== taskId));
	};

	return (
		<>
			<div className="content">
				<h1 className="title">
					Terça feira, <span className="data">20</span> de Agosto
				</h1>
				<input className="inputMain" placeholder="Procurar Tarefa" />

				<div className="spacing" />
				{lists.map((task, index) => (
					<div className="listContainer" key={task.id}>
						<List
							key={task.id}
							task={task}
							onDelete={() => handleDeleteTask(task.id)}
						/>
					</div>
				))}
			</div>
			<button className="buttonMain" onClick={handleOpenModal}>
				Nova tarefa
			</button>

			<Modal
				visible={isAddModalOpen}
				onClose={() => setIsAddModalOpen(false)}
				mode="add"
				addOrUpdateTask={addNewTask}
			/>

			<Modal
				visible={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				mode="edit"
				initialTaskDescription={editingTask?.description}
				addOrUpdateTask={updateExistingTask}
			/>
		</>
	);
};

export default Main;
