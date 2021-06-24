import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/pages/App/index';
import reportWebVitals from './reportWebVitals';
import firebase from './config/firebase/index';



console.log('friebase=>',firebase)
ReactDOM.render(<App />,document.getElementById('root'));

