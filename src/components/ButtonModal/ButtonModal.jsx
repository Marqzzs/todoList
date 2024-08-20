import React from 'react';
import { ButtonModals, TextButton } from './Style';

const ButtonModal = ({ textButton }) => {
	return (
		<ButtonModals>
			<TextButton>{textButton}</TextButton>
		</ButtonModals>
	);
};

export default ButtonModal;
