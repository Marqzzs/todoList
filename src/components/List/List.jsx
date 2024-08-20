import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import Edit from '../Edit/Edit';
import Delete from '../Delete/Delete';

const List = () => {
	return (
		<div className="contentList">
			<div className="contentCheck">
				<CheckBox />
                <p className='description'>Descricao do projeto</p>
			</div>
            <div className="contentEdit">
                <Delete />
               <Edit />
            </div>
		</div>
	);
};

export default List;
