import React from 'react';
import './style.css';

function Search(props) {
	return (
		<form onSubmit={props.handleFormSubmit}>
			<div className="input-group searchDiv mb-3">
				<input
					onChange={props.handleInputChange}
					value={props.value}
					name="search"
					type="text"
					className="form-control searchBox"
					placeholder="Search Employee"
				/>
			</div>
		</form>
	);
}

export default Search;
// { useState }

// const [ search, setSearch ] = useState('');
// const [ employees, setEmployees ] = useState({
// 	data: props.data
// });

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
