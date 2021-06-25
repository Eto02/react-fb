import React,{Component} from 'react';
import logo from './../../../assets/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import {store} from '../../../config/redux/store';

function App() {
  
  return (
    <Provider  store={store}>
      <Router>
        <div>
            <Route path="/" exact>  <Dashboard/> </Route>
            <Route path="/login">   <Login /> </Route>
            <Route path="/register"> <Register /></Route>
      
        </div>
      </Router>
    </Provider>
  );
}

export default App;
