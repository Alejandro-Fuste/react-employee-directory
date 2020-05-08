import React from 'react';
import './style.css';

function Search() {
	return (
		<div className="input-group searchDiv mb-3">
			<input type="text" className="form-control searchBox" placeholder="Search Employee" />
		</div>
	);
}

export default Search;
