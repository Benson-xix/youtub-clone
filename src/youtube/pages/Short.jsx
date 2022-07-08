import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import avatar from "../assets/img/icon1.png"
import video from "../assets/videos/video.mp4"
import ShortCard from '../components/ShortCard'
const Short = () => {
        const shortItems = [
                {
                title:"Win $1000 every time 😳",
                authorIcon:avatar,
                authorName:"john Smith",video,
                likes:"964k",
                comments:"2k"   
                }
      
        ]

        
    return (
                <VStack p={4}>
                        {
                                shortItems.map((shortItems, index) => <ShortCard {...shortItems} key={`${index}`}/>)
                        }
                
                </VStack>

    )
}

export default Short
