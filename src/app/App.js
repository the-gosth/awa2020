import React from 'react';
import './App.css';
import AccountOptions from '../account/AccountOptions'
import { Row, Col } from 'react-materialize';

function App() {
	return (
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