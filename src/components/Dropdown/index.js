import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function Dropdown() {
	const classes = useStyles();
	const [ filterBy, setfilterBy ] = React.useState('');

	const handleChange = (event) => {
		setfilterBy(event.target.value);
	};

	return (
		<div className="dropDownDiv">
			<FormControl variant="filled" className={classes.formControl}>
				<InputLabel id="demo-simple-select-filled-label">Filter by</InputLabel>
				<Select
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					value={filterBy}
					onChange={handleChange}
				>
					<MenuItem value={10}>Name</MenuItem>
					<MenuItem value={20}>Phone</MenuItem>
					<MenuItem value={30}>Email</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
