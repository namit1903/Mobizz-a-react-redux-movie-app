import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL } from "./store/MovieSlice";
import Home from "./pages/Home";

const App=()=>{
//define toh yhan kr  lo pr call useEffect me krna
let dispatch=useDispatch();
  const fetchTrendingData = async()=>{
    try {
        const response = await axios.get('/trending/all/week')
        console.log("here is response",response);
        dispatch(setBannerData(response.data.results))
    } catch (error) {
        console.log("error",error)
    }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")
console.log("here is congfiguration",response);
        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return(<>
  <Header/>
<div className="p-16">
  {/* <Home></Home> */}
<Outlet/>
</div>
 <Footer/>
 <MobileNavigation/>
 </>)
}
export default App;