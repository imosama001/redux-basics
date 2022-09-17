const redux=require("redux")
const createStore=redux.createStore;
const thunkMiddleware=require("redux-thunk").default
const axios=require("axios")
const applyMiddleware=redux.applyMiddleware
const initialState={
    loading:false,
    users:[],
    error:"",
}

const FETCH_USER_REQUESTED="FETCH_USER_REQUESTED"
const FETCH_USER_SUCCEEDED="FETCH_USER_SUCCEEDED"
const FETCH_USER_FAILED="FETCH_USER_FAILED"

const fetchUserRequested=()=>{
    return{
        type:FETCH_USER_REQUESTED,
    }
}

const fetchUserSucceeded=(users)=>{
    return {
        type:FETCH_USER_SUCCEEDED,
        payload:users
    }
}
const fetchUserFailed=(error)=>{
    return{
        type:FETCH_USER_FAILED,
        payload:error,
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
            return{
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCEEDED:
            return{
                ...state,
                users:action.payload,
                error:""
            }
        case FETCH_USER_FAILED:
            return{
                ...state,
                error:action.payload
            }
        default :
        return{
            state
        }
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequested())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            //response.data is the users
            const users=response.data.map((user)=>user.id)
            dispatch(fetchUserSucceeded(users))
        })
        .catch((error)=>{
            //error.message is the error message
            dispatch(fetchUserFailed(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())