import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Search from './components/Search';

function App() {
	return <Container>{[ <Header />, <Search /> ]}</Container>;
}

export default App;
