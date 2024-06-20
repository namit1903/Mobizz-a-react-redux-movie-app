import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BannerHome from '../components/BannerHome';
import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';
import ShimmerUi from '../components/ShimmerUi';
function Home() {
  console.log("home rendered")
  let[nowPlaying,setNowPlaying] =useState()
  const trendingData=useSelector(state=>state.movieData.bannerData);
  console.log("trending data",trendingData);
 
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  // console.log("data:nowplaying",nowPlaying)
  //destructuring the data property and assigning  it to the new variable i.e. nowPlaying
  const { data : topRatedData } = useFetch('/movie/top_rated');
  const { data : popularTvShowData } = useFetch('/tv/popular')
  const { data : onTheAirShowData } = useFetch('/tv/on_the_air')
  // console.log("data:toprated",topRatedData)



  return (
    trendingData.length==0?(<ShimmerUi/>):
      (
    <div>
     <BannerHome/>
{console.log("home is rendering")}
     <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
     <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
     <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
     <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
        <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
     {/* <section className="container mx-auto px-3 my-10"> 
     <h2 className="text-xl lg:text-2xl font-bold mb-2">Trending watchList</h2><br/><br/>
    <div className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6">
    {
      trendingData.map((item,index)=><Card key={item.id} data={item} index={index} trending={true}/>)
     }
    
    </div>
     </section> */}
    </div>)
     
  )
}

export default Home
