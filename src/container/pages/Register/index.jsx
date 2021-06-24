import React,{Component} from 'react';
import './index.scss'

class Register extends Component{
    render(){
        return(
           <div>
               <div className='auth-card'>
                        <div className='auth-title'>Register Page</div>
                        <input className='input' type="text" placeholder='Email'/>
                        <input className='input' type="password" placeholder='Password'/>
                        <button>Register</button>
               </div>
                {/* <button>Go to Dashboard</button> */}
           </div>
        )
    }
}
export default Register;