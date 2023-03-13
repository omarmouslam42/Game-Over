import { useContext } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Category from "./category/Category";
import GamesDetails from "./gameDetails/GamesDetails";
import Games from "./Games/Games";
import { DataContext } from "./GamesContext/GamesContext";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Platform from "./platform/Platform";
import Reg from "./Regester/Reg";
import SortBy from "./sortBy/SortBy";



function App() {

  const {loginTkn} = useContext(DataContext);

  function ProtectRoute(props) {
    if (loginTkn == null) {
      //m3ml4 login
      return<Navigate to='/login'/>}
      else{
        return <>{props.children}</>
      }
  }


  const router = createBrowserRouter([
    {path:"" , element: <Navbar/>,children:[
      {path:'',element:<Login />},
      {path:'login',element:<Login />},
      {path:'Home',element:<ProtectRoute><Home /></ProtectRoute>},
      // {path:'',element:<ProtectRoute><Home /></ProtectRoute>},
      {path:'Games',element: <ProtectRoute><Games /></ProtectRoute>},
      {path:'Reg',element:<Reg />},
      {path:'platform',element:<ProtectRoute><Platform /></ProtectRoute>,children:[
        {path:":pf"}
      ]},
      {path:'sort-by',element:<ProtectRoute><SortBy /></ProtectRoute>,children:[
        {path:":sb"}
      ]},
      {path:'category',element:<ProtectRoute><Category /></ProtectRoute>,children:[
        {path:":categ"}
      ]},
      {path:'GamesDetails',element:<ProtectRoute><GamesDetails /></ProtectRoute>,children:[
        {path:":id"}
    ]},  
      {path: "*", element: <h2>4 0 4</h2>},
    ]}
  ])



  return <>
    <RouterProvider router={router}/>
  </>
}

export default App;
