import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function Delete({onClick}) {
	return (
		<Tooltip title="Delete">
			<IconButton onClick={onClick}>
				<div className="contentIcon">
					<DeleteIcon className='customIcon'/>
				</div>
			</IconButton>
		</Tooltip>
	);
}
