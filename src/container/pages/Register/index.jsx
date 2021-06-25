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
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    handleRegisterSubmit = async()=>{
        const {email,password} =this.state;
        console.log('data',email,password)
        const res =await  this.props.regitserAPI({email,password})
        .catch(err=>err)
        if (res) {
            this.setState({
                email:'',password:''
            })
            console.log('Register Success')
        }else{
            console.log('Register Failed')
        }
       
    }

    render(){
        return(
           <div className='auth-container'>
               <div className='auth-card'>
                        <p className='auth-title'>Register Page</p>
                        <input className='input' onChange={this.handleChangeText} value={this.state.email}id='email' type="text" placeholder='Email'/>
                        <input className='input' onChange={this.handleChangeText} value={this.state.password}id='password'type="password" placeholder='Password'/>
                        <Button onClick={this.handleRegisterSubmit} title='Register' loading={this.props.isLoading} />
               </div>
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