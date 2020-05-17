import React from 'react';
import './style.css';
// import Dropdown from '../Dropdown';

function Search(props) {
	return (
		<form onSubmit={props.handleFormSubmit}>
			<div className="input-group searchDiv mb-3">
				{/* <Dropdown /> */}
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
