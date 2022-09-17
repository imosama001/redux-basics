//library to treet state as immutable
const redux=require("redux")
const produce=require("immer").produce
const inititalState={
    name:"Osama",
    address:{
        street:"123 Main Street",
        city:"Azamgarh",
        stat:"UP",
    }
}
const STREET_UPDATE="STREET_UPDATE";
const updateStreet=(street)=>{
    return {   
        type:STREET_UPDATE,
        payload:street,
    }
}
const reducer=(state=inititalState,action)=>{
    switch(action.type){
        case STREET_UPDATE:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
    //with immutable package immer
    return produce(state, (draft)=>{
        draft.address.street=action.payload
    })
        default :
        {
            return state
        }
    }
}

const store =redux.createStore(reducer)
console.log("initialState",store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log("updated State",store.getState())
})
store.dispatch(updateStreet("365 Main street"))