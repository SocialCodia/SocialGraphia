import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    slider : null,
    festival : null,
    cateogry:null,
    business_category:null,
    current_business:null,
    currntbusiness_photos:null,
    new_category:null
}

export const mainSlice = createSlice({
    name:'mainSlice',
    initialState,
    reducers:{
        setData:(state,action)=>
        {
            const {slider,festival,cateogry,business_category,current_business,currntbusiness_photos,new_category} = action.payload;
            state.slider = slider;
            state.festival = festival;
            state.cateogry = cateogry;
            state.business_category = business_category;
            state.current_business = current_business;
            state.currntbusiness_photos = currntbusiness_photos;
            state.new_category = new_category;
        }
    }
})

export const {setData} = mainSlice.actions;

export default mainSlice.reducer;