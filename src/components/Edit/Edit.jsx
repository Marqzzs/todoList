import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function Edit({onClick}) {
	return (
		<Tooltip title="Edit">
			<IconButton onClick={onClick}>
				<div className="contentIcon">
					<EditIcon className='customIcon'/>
				</div>
			</IconButton>
		</Tooltip>
	);
}
