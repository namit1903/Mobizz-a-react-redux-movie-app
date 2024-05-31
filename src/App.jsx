import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";

const App=()=>{

  const fetchTrendingData = async()=>{
    try {
        const response = await axios.get('/trending/all/week')
        console.log("here is response",response);
        // dispatch(setBannerData(response.data.results))
    } catch (error) {
        console.log("error",error)
    }
  }

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")
console.log("here is response",response);
        // dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchTrendingData()
    // fetchConfiguration()
  },[])
  return(<>
  <Header/>
<div className="p-16">
<Outlet/>
</div>
 <Footer/>
 <MobileNavigation/>
 </>)
}
export default App;