import { Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import VideoCard from './VideoCard'
import image1 from "../assets/img/image1.png"
import icon1 from "../assets/img/icon1.png"
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../pages/HomeMain'
import Short from '../pages/Short'
import Explore from '../pages/Explore'
import Library from '../pages/Library'
import Subscription from '../pages/Subscription'


 const Main = () => {
    const routes = [
      {
        path: "/",
        component: <HomeMain/>
     },

     {
        path: "/explore",
        component: <Explore/>
     },
     {
        path: "/short",
        component: <Short/>
     },

     {
        path: "/subscription",
        component: <Subscription/>
     },

     {
        path: "/library",
        component: <Library/>
     },

    ]

    return (
<div>
      <Routes>
{
  routes.map(({ path, component }, index) => (
              <Route key={`${path}-${index}`} path={path} element={component} />
          ))

}
        

         {/* <Route path={"/"} element={<HomeMain/>}/> */}
         {/* <Route path={"/Explore"} element={<Explore/>}/>
         <Route path={"/Short"} element={<Short/>}/>
         <Route path={"/Suscribe"} element={<Suscribe/>}/>
         <Route path={"/Libary"} element={<Library/>}/> */}
      </Routes>
</div>

     
    )
}


export default Main