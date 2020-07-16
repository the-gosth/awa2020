import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Element from './element/Element'
import List from './list/List'
import NewContact from './contact/NewContact'
import AccountOptions from './Account/AccountOptions'
import { Container, Row,Col } from 'react-materialize';

function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>

		// <List></List>
		// <NewContact></NewContact>
		
		<div className="NavigationBar">
			<Row>
				<Col s={2} m={2} l={2}>
					<div className="SideBar">
						<AccountOptions></AccountOptions>	
					</div>	
				</Col>
				<Col s={10} m={10} l={10}>
					<div className="tittleApp"><h3>Mi escuelita</h3></div>
				</Col>
			</Row>
		</div>	
	);
}

export default App;