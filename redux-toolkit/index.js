const store=require('./app/store')
const { icecreamActions } = require('./features/icecream/icecreamSlice')
const {fetchUsers}=require("./features/users/userSlice")
const cakeActions=require('./features/cake/cakeSlice').cakeActions
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState())
})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(4))

// unsubscribe()
