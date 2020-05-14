import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Body from './components/Body';
import Search from './components/Search';
import Table from './components/Table';
import employees from './employees.json';

class App extends Component {
	// Setting the component's initial state
	state = {
		employees,
		filterEmployees: [ ...employees ],
		search: '',
		sortOrder: true
	};

	searchFilter = (query) => {
		/* This if statement will state the state of filterEmployees back to the original employees
		list if the input field is left blank */
		if (!query) {
			this.setState({ filterEmployees: [ ...employees ] });
			return;
		}
		// Search filter to narrow down employee list
		const filterEmployees = this.state.employees.filter(
			(employee) =>
				employee.name.first.toUpperCase() === query.toUpperCase() ||
				employee.name.last.toUpperCase() === query.toUpperCase()
		);

		this.setState({ filterEmployees });
		console.log(employees);
	};

	handleInputChange = (event) => {
		// Getting the value and name of the input which triggered the change
		const { value, name } = event.target;

		// Updating the input's state...
		// ...the name variable is the input's props
		// ...the value is what the user types in the input box
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		/* This is a function for an OnSubmit event for the form that holds the input box for search. 
		It will pass in the value of search, getting search from 
		handleInputChange function, into the searchFilter function */
		event.preventDefault();
		this.searchFilter(this.state.search);
	};

	sortEmployees = (sort) => {
		// Sort by name, phone, and email using switch statement
		let sortedEmployees = [];
		switch (sort) {
			case 'name':
				sortedEmployees = this.state.filterEmployees.sort((a, b) => (a[sort].last > b[sort].last ? 1 : -1));
				return this.setState({ filterEmployees: sortedEmployees });

			case 'phone':
				sortedEmployees = this.state.filterEmployees.sort((a, b) => (a[sort].phone > b[sort].phone ? 1 : -1));
				return this.setState({ filterEmployees: sortedEmployees });

			case 'email':
				sortedEmployees = this.state.filterEmployees.sort((a, b) => (a[sort].email > b[sort].email ? 1 : -1));
				return this.setState({ filterEmployees: sortedEmployees });

			default:
				sortedEmployees = this.state.filterEmployees;
				return this.setState({ filterEmployees: sortedEmployees });
		}
	};

	render() {
		return (
			<Container>
				<Header />
				<Body>
					<Search
						value={this.state.search}
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
						data={this.state.employees}
					/>
					<Table
						data={this.state.filterEmployees}
						search={this.state.search}
						sortEmployees={this.sortEmployees}
					/>
				</Body>
			</Container>
		);
	}
}

export default App;
