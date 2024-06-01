import React from 'react'
import ReactDOM from 'react-dom/client'
// import router from './routes/index.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import axios from 'axios';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import DetailPage from './pages/DetailPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';



/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3"

axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_DB_TOKEN}`;



const router=createBrowserRouter([
  { path:'/', 
  element:<App/>,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:':explore',
        element:<Explore/>
      },
      {
        path:':explore/:id',
        element:<DetailPage/>

      },
      {
        path:'search',
        element:<SearchPage/>
        
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/></Provider>
  // {/* </React.StrictMode> */}
)
