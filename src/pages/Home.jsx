import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BannerHome from '../components/BannerHome';
import Card from '../components/Card';
import HorizontalCardScroll from '../components/HorizontalCardScroll';
import useFetch from '../hooks/useFetch';
function Home() {
  console.log("home rendered")
  let[nowPlaying,setNowPlaying] =useState()
  const trendingData=useSelector(state=>state.movieData.bannerData);
  console.log(trendingData,"ye hai")
 
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  //destructuring the data property and assigning  it to the new variable i.e. nowPlaying
  const { data : topRatedData } = useFetch('/movie/top_rated');
  const { data : popularTvShowData } = useFetch('/tv/popular')
  const { data : onTheAirShowData } = useFetch('/tv/on_the_air')



  return (
    <div>
     <BannerHome/>

     <HorizontalCardScroll data={trendingData} heading={"Trending"} trending={true}/>
     <HorizontalCardScroll data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
     <HorizontalCardScroll data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
     <HorizontalCardScroll data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
        <HorizontalCardScroll data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
     {/* <section className="container mx-auto px-3 my-10"> 
     <h2 className="text-xl lg:text-2xl font-bold mb-2">Trending watchList</h2><br/><br/>
    <div className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6">
    {
      trendingData.map((item,index)=><Card key={item.id} data={item} index={index} trending={true}/>)
     }
    
    </div>
     </section> */}
    </div>
  )
}

export default Home
