import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user:null,
    token:'',
}


export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setAuth:(state,action)=>
        {
            const {user,token} = action.payload;
            state.user = user;
            state.isAuth = true;
            state.token = token;
        }
    }
})

export const {setAuth} = authSlice.actions;

export default authSlice.reducer;

