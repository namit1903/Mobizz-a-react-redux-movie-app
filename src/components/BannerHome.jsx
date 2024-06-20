import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const BannerHome = () => {
  let bannerData=useSelector(state=>state.movieData.bannerData);//ek baar aa jaega data
let imageURL=useSelector(state=>state.movieData.imageURL);
  // console.log("bannerdata is:",bannerData);
  // console.log("imgurls are:",imageURL);
  const [currentImage,setCurrentImage] = useState(0);
  const handleNext = ()=>{
    if(currentImage < bannerData.length - 1){
        setCurrentImage(preve => preve + 1)
    }
}
const handleprevious = ()=>{
  if(currentImage > 0){
      setCurrentImage(preve => preve - 1)
  }
}
let interval;
console.log("useeffect start hoga")
useEffect(()=>{
  console.log("useeffect bannerhome inside")
  interval = setInterval(()=>{
      if(currentImage < bannerData.length - 1){
          handleNext()
      }else{
          setCurrentImage(0);
      }
  },4000)

  return ()=>clearInterval(interval)
},[bannerData,imageURL,currentImage])
console.log("useeffect ke turant baad h")

function clearFun(){
  console.log("clear is clicked");
  clearInterval(interval)
}

  return (
   <section className="w-full h-full">
    <div className="flex min-h-[95vh] overflow-hidden">
      {
        bannerData.map((data, index)=>{
          return(
            <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{ transform : `translateX(-${currentImage * 100}%)`}}>
              
            <div className='w-full h-full'>
              <img src={imageURL+data.backdrop_path} className='h-full w-full object-cover'/>

              </div>
               {/***button next and previous image */}
               <div className='absolute top-0 w-full h-full hidden items-center z-50  justify-between px-4 group-hover:lg:flex'>
                {/* {console.log("buttons printed")} */}
                                    <button onClick={handleprevious} className='bg-white  p-1 rounded-full  text-xl z-10 text-black'>
                                        <FaAngleLeft/> 
                                    </button>
                                    <button onClick={handleNext} className='bg-white p-1 rounded-full  text-xl z-10 text-black '>
                                        <FaAngleRight/>
                                    </button>
                                </div>
                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                                </div>

                                <div className='container mx-auto'>
                                    <div className=' w-full absolute bottom-0 max-w-md px-3'>
                                        <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl '>{data?.title || data?.name}</h2>
                                        <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                        <div className='flex items-center gap-4'>
                                            <p>Rating : { Number(data.vote_average).toFixed(1) }+</p>
                                            <span>|</span>
                                            <p>View : { Number(data.popularity).toFixed(0) }</p>
                                        </div>
                                        <Link to={"/"+data?.media_type+"/"+data?.id}>
                                            <button  className=' bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                                                Play Now
                                            </button>
                                        </Link>
                                    </div></div>
                                    
              </div>
             
          )
        })
      }

    </div>
    <button className="clear p-10 border-red-900" onClick={()=>clearFun()}>clear</button>
   </section>
  )
}

export default BannerHome
