import React,{Component} from 'react';
import './index.scss'
import firebase from '../../../config/firebase/index.js';
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Register extends Component{
    state={
        email:'',
        password:'',
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
        this.props.regitserAPI({email,password})
        
        
    }
    render(){
        return(
           <div className='auth-container'>
               <div className='auth-card'>
                        <p className='auth-title'>Register Page</p>
                        <input className='input' onChange={this.handleChangeText} id='email' type="text" placeholder='Email'/>
                        <input className='input' onChange={this.handleChangeText} id='password'type="password" placeholder='Password'/>
                        <Button onClick={this.handleRegisterSubmit} title='Register' loading={this.props.isLoading} />
               </div>
                {/* <button>Go to Dashboard</button> */}
           </div>
        )
    }
}
const reduxState =(state)=>({
    isLoading:state.isLoading
})
const reduxDispatch =(dispatch)=>({
    regitserAPI:(data)=>dispatch(registerUserAPI(data))
})
export default connect(reduxState,reduxDispatch) (Register);