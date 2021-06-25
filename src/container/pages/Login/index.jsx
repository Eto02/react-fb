import React,{Component} from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

class Login extends Component{
    changUser =()=>{
        this.props.changeUserName()
    }
    
    render(){
        return(
           <div>
                <div>Login Page {this.props.userName}</div>
                <button onClick={this.changUser}>Change User Name</button>
                <button>Go to Dashboard</button>
           </div>
        )
    }
}

const reduxState=(state)=>({
    popup:state.popup,
    userName:state.user
})
const reduxDispatch=(dispatch)=>({
    changeUserName:()=>dispatch(actionUserName()),
})
export default connect(reduxState,reduxDispatch)(Login);