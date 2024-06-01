import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './MovieSlice'
//movieData represents a slice of ocverall state managed by the store
    //moviereducer => this reducer function will manage the state updates for the movieData Slice
export const store=configureStore({
  reducer:{
    movieData:movieReducer,
    
  },
})