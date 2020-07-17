import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>,
document.getElementById('root'));

serviceWorker.register();