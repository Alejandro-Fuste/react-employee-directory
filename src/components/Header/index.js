import React from 'react';
import './style.css';

function Header() {
	return (
		<div className="header">
			<h1>Employee Directory</h1>
			<h5>Click on the name to sort alphabetically or use the search box to narrow down the employees.</h5>
		</div>
	);
}

export default Header;
