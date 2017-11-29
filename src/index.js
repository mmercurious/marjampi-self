import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import FrontPage from './frontPage/components/FrontPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FrontPage />, document.getElementById('root'));
registerServiceWorker();
