import React, { useState } from 'react';
import './style.css';
import moment from 'moment';
// import Functions from '../../utils/Functions';

function Table(props) {
	// const [ search, setSearch ] = useState(props.search);
	const [ sort, setSort ] = useState(true);
	const [ employees, setEmployees ] = useState({
		data: props.data
	});

	const sortEmployees = () => {
		if (sort) {
			const sortedEmployees = employees.data.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
			setEmployees({ ...employees, data: sortedEmployees });
		} else {
			const sortedEmployees = employees.data.sort((a, b) => (b.name.last > a.name.last ? 1 : -1));
			setEmployees({ ...employees, data: sortedEmployees });
		}
		setSort(!sort);
	};

	// const searchFilter = (query) => {
	// 	// Creating search filter to narrow down employee list
	// 	const filteredEmployees = employees.data.find(
	// 		(employee) =>
	// 			employee.name.first.toUpperCase() === query.toUpperCase() ||
	// 			employee.name.last.toUpperCase() === query.toUpperCase()
	// 	);

	// 	setEmployees({ ...employees, data: filteredEmployees });
	// 	console.log(filteredEmployees);
	// };

	// const handleFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	searchFilter(search);
	// };

	// const handleInputChange = (event) => {
	// 	// Getting the value and name of the input which triggered the change
	// 	// const { value, name } = event.target;

	// 	// Updating the input's state
	// 	setSearch(event.target.value);
	// };

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">
						<button className="sortButton" onClick={sortEmployees}>
							Name
						</button>
					</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<tbody>
				{employees.data.map((x, i) => (
					<tr key={`tr-${i}`}>
						<td>
							<img alt={`${x.name.first} ${x.name.last}`} src={x.picture.thumbnail} />
						</td>
						<td>{`${x.name.first} ${x.name.last}`}</td>
						<td>{x.phone}</td>
						<td>{x.email}</td>
						<td>{moment(x.dob.date).format('MM-DD-YYYY')}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
