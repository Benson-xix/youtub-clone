import React from 'react'
import WatchedCard from './WatchedCard'
import { Flex, Text, VStack } from '@chakra-ui/react'
import videoimage from "../assets/img/image1.png"

const MusicVideo = () => {

    const videoItems = [
        {
            title: "best friends in the world: senior year | episode 5",
            author: "Neptune3 Studios",
            image: videoimage,
            isVerified:true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusamus ut! Explicabo aspernatur ab voluptate eveniet, veniam iste amet necessitatibus consequuntur facilis tempore architecto cumque voluptatum! Quisquam magni quis saepe!",
        },
        {
            title: "best friends in the world: senior year | episode 5",
            author: "Neptune3 Studios",
            image: videoimage,
            isVerified:true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusamus ut! Explicabo aspernatur ab voluptate eveniet, veniam iste amet necessitatibus consequuntur facilis tempore architecto cumque voluptatum! Quisquam magni quis saepe!",
        },
        {
            title: "best friends in the world: senior year | episode 5",
            author: "Neptune3 Studios",
            image: videoimage,
            isVerified:true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusamus ut! Explicabo aspernatur ab voluptate eveniet, veniam iste amet necessitatibus consequuntur facilis tempore architecto cumque voluptatum! Quisquam magni quis saepe!",
        },
        {
            title: "best friends in the world: senior year | episode 5",
            author: "Neptune3 Studios",
            image: videoimage,
            isVerified:true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusamus ut! Explicabo aspernatur ab voluptate eveniet, veniam iste amet necessitatibus consequuntur facilis tempore architecto cumque voluptatum! Quisquam magni quis saepe!",
        }

    ]
    return (
        <VStack alignItems={"flex-start"} gap={5}>
            { videoItems.map((items, index) =>  <WatchedCard key={`$ {items.title}-${index}`}
            {...items}/> )}
           
            
        </VStack>
    )
}

export default MusicVideo
