import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import Edit from '../Edit/Edit';
import Delete from '../Delete/Delete';

const List = ({ task, onDelete }) => {
	return (
		<div className="contentList">
			<div className="taskItem">
				<div className="contentCheck">
					<CheckBox />
					<p className="description">{task.description}</p>
				</div>
				<div className="contentEdit">
					<Edit />
					<Delete onClick={onDelete} />
				</div>
			</div>
		</div>
	);
};

export default List;
