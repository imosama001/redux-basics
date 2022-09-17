const redux=require("redux")
const createStore=redux.createStore;
const bindActionCreater=redux.bindActionCreators;
const combineReducers=redux.combineReducers;
const reduxLogger=require("redux-logger")
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger();


//acitons
const CAKE_ORDERED="CAKE_ORDERED";
const CAKE_RESTOCKED="CAKE_RESTOCKED"
const ICECREAME_ORDERED="ICECREAME_ORDERED"
const ICECREAME_RESTOCKED="ICERCREAM_RESTOCKED";

function orderCake(){
    return{
        type:CAKE_ORDERED,
        payload:1,
    }
}
function restockCake(quantity=1){
    return{
        type:CAKE_RESTOCKED,
        payload:quantity,

    }
}

function icecreameOrdered(quantity=1){
    return{
        type:ICECREAME_ORDERED,
        payload:quantity
    }
}
function icecreameRestocked(quantity=1){
    return{
        type:ICECREAME_RESTOCKED,
        payload:quantity
    }
}
//reducer=(prevState,aciton)=>newState

const initialCakeState={
    numOfCakes:10,
}
const initialIcecreameState={
    numOfIcecreame:20,
}
const cakeReducer=(state=initialCakeState,action)=>{
    switch (action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload,
            }
        
        
      

        default: return state;
    }
}
const icecreameReducer=(state=initialIcecreameState,action)=>{
    switch (action.type){     
        case ICECREAME_ORDERED:
            return{
                ...state,
                numOfIcecreame:state.numOfIcecreame-action.payload,
            }
        case ICECREAME_RESTOCKED:
            return{
                ...state,
                numOfIcecreame:state.numOfIcecreame+action.payload,
            }

        default: return state;
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecreame:icecreameReducer,
})

//3 Store
const store =createStore(rootReducer,applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe=store.subscribe(()=>{});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(5));

// alternative to store.dispatch
const actions=bindActionCreater({orderCake,restockCake,icecreameOrdered,icecreameRestocked},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.restockCake(4)
actions.icecreameOrdered()
actions.icecreameRestocked(5);
unsubscribe();