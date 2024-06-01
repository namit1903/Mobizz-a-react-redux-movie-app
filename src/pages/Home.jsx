import React from 'react'
import { useSelector } from 'react-redux'
import BannerHome from '../components/BannerHome';
import Card from '../components/Card';
function Home() {
  const trendingData=useSelector(state=>state.movieData.bannerData);
  console.log(trendingData,"ye hai")
  return (
    <div>
     <BannerHome/>
     <section className="container mx-auto px-3 my-10"> 
     <h2 className="text-xl lg:text-2xl font-bold mb-2">Trending watchList</h2><br/><br/>
    <div className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6">
    {
      trendingData.map((item,index)=><Card key={item.id} data={item} index={index} trending={true}/>)
     }
    
    </div>
     </section>
    </div>
  )
}

export default Home
