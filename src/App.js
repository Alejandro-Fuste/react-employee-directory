import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
// import TableRows from './components/TableRows';
import employees from './employees.json';

class App extends Component {
	state = {
		employees
	};
	render() {
		return (
			<Container>
				<Header />
				<Search />
				<Table data={this.state.employees} />
			</Container>
		);
	}
}

export default App;
