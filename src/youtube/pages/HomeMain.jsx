
import { Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import VideoCard from '../components/VideoCard'

import image1 from "../assets/img/image1.png"
import icon1 from "../assets/img/icon1.png"




const HomeMain = () => {
   

return (
    <Flex   flexWrap={"wrap"} gap={5} p={'4'} >
    {
       new Array(12).fill("_").map((_, index) => (
         <VideoCard 
         key={index}
         image={image1}
         icon={icon1}
         datePosted={"7 days ago"}
         timeframe={"8:71"}
         title={"moments that can't be repeated in anime"}
         views={"5.3M"}
         author={"John Smith"}
         isViewed={true}
         />
       ))
    }
       </Flex>
)
}


export default HomeMain 