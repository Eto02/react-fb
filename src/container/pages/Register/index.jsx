import React,{Component} from 'react';
import './index.scss'
import firebase from '../../../config/firebase/index.js';

class Register extends Component{
    state={
        email:'',
        password:''
    }
    handleChangeText =(e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    handleRegisterSubmit =()=>{
        const {email,password} =this.state;
        console.log('data',email,password)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
        //   var user = res.user;
        console.log(res)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console(errorCode,errorMessage)
        });
    }
    render(){
        return(
           <div className='auth-container'>
               <div className='auth-card'>
                        <p className='auth-title'>Register Page</p>
                        <input className='input' onChange={this.handleChangeText} id='email' type="text" placeholder='Email'/>
                        <input className='input' onChange={this.handleChangeText} id='password'type="password" placeholder='Password'/>
                        <button className='btn' onClick={this.handleRegisterSubmit}>Register</button>
               </div>
                {/* <button>Go to Dashboard</button> */}
           </div>
        )
    }
}
export default Register;