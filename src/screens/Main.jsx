import React, { useState } from 'react';
import List from '../components/List/List';
import Modal from '../components/modal/Modal';
import moment from 'moment';
import 'moment/locale/pt-br';

const Main = () => {
	const day = moment().format('D');
	const dateString = moment().format(`dddd, [${day}] [de] MMMM`);

	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [lists, setLists] = useState([]);
	const [editingTask, setEditingTask] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	const handleOpenAddModal = () => {
		setIsAddModalOpen(true);
	};

	const handleCloseAddModal = () => {
		setIsAddModalOpen(false);
	};

	const handleOpenEditModal = (task) => {
		setEditingTask(task);
		setIsEditModalOpen(true);
	};

	const handleCloseEditModal = () => {
		setIsEditModalOpen(false);
	};

	const addNewTask = (taskDescription) => {
		const newTask = { id: Date.now(), description: taskDescription };
		setLists([...lists, newTask]);
		handleCloseAddModal();
	};

	const updateExistingTask = (taskId, newDescription) => {
		setLists(
			lists.map((task) =>
				task.id === taskId
					? { ...task, description: newDescription }
					: task,
			),
		);
		handleCloseEditModal();
	};

	const handleDeleteTask = (taskId) => {
		setLists(lists.filter((task) => task.id !== taskId));
	};

	const filteredTasks = lists.filter((task) =>
		task.description.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<>
			<div className="content">
				<h1 className="title">
					{dateString.split(day)[0]}
					<span className="data">{day}</span>
					{dateString.split(day)[1]}
				</h1>
				<input
					className="inputMain"
					placeholder="Procurar Tarefa"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<div className="spacing" />
				{filteredTasks.map((task) => (
					<div className="listContainer" key={task.id}>
						<List
							task={task}
							onDelete={() => handleDeleteTask(task.id)}
							onEdit={() => handleOpenEditModal(task)}
						/>
					</div>
				))}
			</div>
			<button className="buttonMain" onClick={handleOpenAddModal}>
				Nova tarefa
			</button>

			{isAddModalOpen && (
				<Modal
					visible={isAddModalOpen}
					onClose={handleCloseAddModal}
					mode="add"
					addOrUpdateTask={addNewTask}
				/>
			)}

			{isEditModalOpen && (
				<Modal
					visible={isEditModalOpen}
					onClose={handleCloseEditModal}
					mode="edit"
					initialTaskDescription={editingTask?.description}
					addOrUpdateTask={(newDescription) =>
						updateExistingTask(editingTask.id, newDescription)
					}
				/>
			)}
		</>
	);
};

export default Main;
