import React from 'react';
import List from '../components/List/List';

const Main = () => {
	return (
		<>
			<div className="content">
				<h1 className="title">
					Terca feira, <span className="data">20</span> de Agosto
				</h1>
                <input className='inputMain' placeholder='Procurar Tarefa' />

                <div className='spacing'/>
                <List />
			</div>
            <button className='buttonMain'>Nova tarefa</button>
		</>
	);
};

export default Main;
