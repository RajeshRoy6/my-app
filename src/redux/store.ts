import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import userReducer from "./userSlice";


const store = configureStore({
    reducer:{
        form: formReducer,
        users: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;