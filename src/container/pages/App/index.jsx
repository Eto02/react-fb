import React,{Component} from 'react';
import logo from './../../../assets/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
 
const initialState={
    popup:false,
    isLogin:false
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'CHANGE_POPUP':
            return {
                ...state,
                popup:action.value
            }
        case 'CHANGE_ISLOGIN':
        return {
            ...state,
            isLogin:action.value
        }
        default:
           return state
    }
}

const store = createStore(reducer);

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
