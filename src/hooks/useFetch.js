import { useState
  
 } from "react";
 const useFetch=(endpoint)=>{
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  const fetchData=async()=>{
    try{
      const response=await axios.get(endpoint);
      setData(response.data.results)
    }
    catch(error){
      
      console.log("error",error);
      throw error;
    }
    useEffect(()=>{
      fetchData();
    })
  }
  return {data,loading}
 }
 export default useFetch;