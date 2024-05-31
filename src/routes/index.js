import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Explore from "../pages/Explore";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";

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
        path:'pageDetail',
        element:<DetailPage/>
      }
    ]

  }
])
export default router;