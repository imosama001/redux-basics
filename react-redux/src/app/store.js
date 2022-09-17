import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/users/userSlice"
// import { createLogger } from "redux-logger"
// import { getDefaultMiddleware } from "@reduxjs/toolkit"
// const logger=createLogger()
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer,
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store;