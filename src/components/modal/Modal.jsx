import React from 'react';
import { InputModal, ModalContent, ModalTask } from './Style';
import Title from '../Title/Title';
import ButtonModal from '../ButtonModal/ButtonModal';

const Modal = ({ visible }) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ModalTask>
				<ModalContent>
					<Title text={'Descreva sua tarefa'} />
					<InputModal placeholder="Exemplo de Descricao" />
					<ButtonModal textButton="Confirmar tarefa" />
				</ModalContent>
			</ModalTask>
		</div>
	);
};

export default Modal;
