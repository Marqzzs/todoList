import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function Delete() {
	return (
		<Tooltip title="Delete">
			<IconButton>
				<div className="contentIcon">
					<DeleteIcon />
				</div>
			</IconButton>
		</Tooltip>
	);
}
