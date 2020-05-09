import React from 'react';
import './style.css';

function TableRows(props) {
	return (
		<tr>
			<th scope="row" />
			<td>
				<img alt={`${props.name.first} ${props.name.last}`} src={props.picture.thumbnail} />
			</td>
			<td>{`${props.name.first} ${props.name.last}`}</td>
			<td>{props.phone}</td>
			<td>{props.email}</td>
			<td>{props.dob}</td>
		</tr>
	);
}

export default TableRows;
