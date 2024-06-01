import { createSlice } from "@reduxjs/toolkit";

//slice is a collection of redux reducer logic and actions for a single feature of your application.
const initialValues={
  bannerData:[],
  imageURL:""

}
const MovieSlice = createSlice({
  name: 'movieData',
  initialState:initialValues,
  reducers:{
    setBannerData:(state,action)=>{
      state.bannerData=action.payload;
      console.log(action.payload)
    },
    setImageURL:(state,action)=>{
      state.imageURL=action.payload;
    }

  }

})

export const{setBannerData,setImageURL} = MovieSlice.actions;
export default MovieSlice.reducer

