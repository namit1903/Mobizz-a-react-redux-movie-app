import React, { useEffect, useState } from 'react'
// import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navigation } from '../contents/navigation';
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  console.log("header rendered")
  const location = useLocation();
  // console.log(location)
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
const [searchInput,setSearchInput]=useState("");
const navigate=useNavigate();

useEffect(()=>{
  //as soon as i input sth 
  if(searchInput){
      navigate(`/search?q=${searchInput}`)
  }
},[searchInput])


function handleSubmit(e){
e.preventDefault();
console.log("search input",searchInput); 
}
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-20 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
            <Link to={"/"}>
                    {/* <img
                        src={logo}
                        alt='logo'
                        width={120} 
                    /> */}<h1>LOGO</h1>
                </Link>
<nav className='hidden lg:flex items-center gap-4 ml-10'>
{navigation.map(item=>(<div key={`${Date.now()}_${item.label}`}>
  <NavLink key={item.label}to={item.href}
 className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}
  >{item.label}</NavLink>
</div>
                
 ) )}
</nav>

{/* search */}
<div className='ml-auto flex items-center gap-5'>
<form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                                <IoSearchOutline/>
                        </button>
                    </form>

<div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        {/* <img
                            src={userIcon}
                            width='w-ful h-full' 
                        /> */}<h1>ICON</h1>
                    </div>
                </div>
                </div>
            </header>
  )
}

export default Header
