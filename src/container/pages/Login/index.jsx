import React,{Component} from 'react';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
import { withRouter } from 'react-router-dom';
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

    handleLoginSubmit = async ()=>{
        const {email,password} =this.state;
        const {history}=this.props;
        const res =await this.props.loginAPI({email,password})
        .catch(err=>err);
        if (res) {
            console.log('Login success',res)
            localStorage.setItem('userData',JSON.stringify(res))
            this.setState({
                email:'',password:''
            })
            console.log(res)
            history.push('/')
        }else{
            console.log('Logic Failed')
        }
        
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
    isLoading:state.isLoading,
    userGet:state.user
})
const reduxDispatch =(dispatch)=>({
    loginAPI:(data)=>dispatch(loginUserAPI(data)),
})
export default connect(reduxState,reduxDispatch)(withRouter(Login));