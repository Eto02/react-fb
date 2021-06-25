import firebase from '../../firebase/index'
export const actionUserName =()=>(dispatch)=>{
    setTimeout(()=>{
        return   dispatch({type:'CHANGE_USER',value:'TeTe'})
        },2000)
}
export const registerUserAPI =(data)=>(dispatch)=>{
    dispatch({type:'CHANGE_LOADING',value:true})
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
        console.log(res)
        dispatch({type:'CHANGE_LOADING',value:false})
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage)
          dispatch({type:'CHANGE_LOADING',value:false})
        })
    )

}

export const loginUserAPI =(data)=>(dispatch)=>{
    dispatch({type:'CHANGE_LOADING',value:true})
    return(
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
        console.log(res)
        dispatch({type:'CHANGE_LOADING',value:false})
        dispatch({type:'CHANGE_ISLOADING',value:true})
        dispatch({type:'CHANEG_USER',value:true})
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage)
          dispatch({type:'CHANGE_LOADING',value:false})
        dispatch({type:'CHANGE_ISLOADING',value:false})
        })
    )

}