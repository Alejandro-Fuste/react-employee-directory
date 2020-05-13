import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
// import TableRows from './components/TableRows';
import employees from './employees.json';

class App extends Component {
	// Setting the component's initial state
	state = {
		employees,
		search: ''
	};

	searchFilter = (query) => {
		// Creating search filter to narrow down employee list
		const employees = this.state.employees.filter(
			(employee) =>
				employee.name.first.toUpperCase() === query.toUpperCase() ||
				employee.name.last.toUpperCase() === query.toUpperCase()
		);

		this.setState({ employees });
		console.log(employees);
	};

	handleInputChange = (event) => {
		// Getting the value and name of the input which triggered the change
		const { value, name } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchFilter(this.state.search);
	};

	handleOnClick = (event) => {
		event.preventDefault();
		this.sortEmployees();
	};

	render() {
		return (
			<Container>
				<Header />
				<Search
					value={this.state.search}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<Table data={this.state.employees} onClick={this.handleOnClick} />
			</Container>
		);
	}
}

export default App;
