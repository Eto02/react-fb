import React,{Component} from 'react';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
class Login extends Component{
    state={
        email:'',
        password:'',
    }
    
    handleChangeText =(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    handleLoginSubmit =()=>{
        const {email,password} =this.state;
        console.log('data',email,password)
        this.props.loginAPI({email,password})
        this.setState({
            email:'',password:''
        })
    }

    render(){
        return(
            <div className='auth-container'>
                <div className='auth-card'>
                         <p className='auth-title'>Login Page</p>
                         <input className='input' onChange={this.handleChangeText} value={this.state.email}id='email' type="text" placeholder='Email'/>
                         <input className='input' onChange={this.handleChangeText} value={this.state.password}id='password'type="password" placeholder='Password'/>
                         <Button onClick={this.handleLoginSubmit} title='Login' loading={this.props.isLoading} />
                </div>
            </div>
         )
    }
}

const reduxState =(state)=>({
    isLoading:state.isLoading
})
const reduxDispatch =(dispatch)=>({
    loginAPI:(data)=>dispatch(loginUserAPI(data))
})
export default connect(reduxState,reduxDispatch)(Login);