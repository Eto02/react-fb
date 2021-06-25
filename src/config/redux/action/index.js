import firebase from '../../firebase/index'
export const actionUserName =()=>(dispatch)=>{
    setTimeout(()=>{
        return   dispatch({type:'CHANGE_USER',value:'TeTe'})
        },2000)
}
export const registerUserAPI =(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch({type:'CHANGE_LOADING',value:true})
        return(
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
            console.log(res)
            dispatch({type:'CHANGE_LOADING',value:false})
            resolve(true)
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode,errorMessage)
              dispatch({type:'CHANGE_LOADING',value:false})
              reject(false)
            })
        )
    })

}

export const loginUserAPI =(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch({type:'CHANGE_LOADING',value:true})
        return(
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
            console.log(res)
            dispatch({type:'CHANGE_LOADING',value:false})
            dispatch({type:'CHANGE_ISLOADING',value:true})
            dispatch({type:'CHANEG_USER',value:res.user})
            resolve(true)
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode,errorMessage)
              dispatch({type:'CHANGE_LOADING',value:false})
            dispatch({type:'CHANGE_ISLOADING',value:false})
            reject(false)
            })
        )
    })

}