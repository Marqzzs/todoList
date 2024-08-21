import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = () => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			sx={{
				color: '#BDA4FF', // Cor peronalizada quando desmarcado
				'&.Mui-checked': {
					color: '#1E123B', // Cor personalizada quando marcado
				},
			}}
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
};

export default CheckBox;
