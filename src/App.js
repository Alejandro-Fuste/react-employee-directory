import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Search from './components/Search';
import TableHeaders from './components/TableHeaders';

function App() {
	return <Container>{[ <Header />, <Search />, <TableHeaders /> ]}</Container>;
}

export default App;
