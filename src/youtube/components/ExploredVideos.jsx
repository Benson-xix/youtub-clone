import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import WatchedCard from './WatchedCard'

import videoimage from "../assets/img/image1.png"
const ExploredVideos = () => {

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




//         <Flex flexWrap={"wrap"} gap={10} p={'4'}>
//             <Text color={"white"} fontSize={"md"}>
//                 Trending videos
//             </Text>
//  {
//        new Array(3).fill("_").map((_, index) => (
//          <WatchedCard
//          key={index}
//          image={image1} 
//           title={"moments that can't be repeated in anime"}
//           author={"John Smith"}
//          views={"5.3M"}
//          isViewed={true}
//          datePosted={"7 days ago"}
//          info={" life is a way to escape from reality we all wish to avoid it but we end up getting stuck what man could give up just to be free i pr"}
//         //  timeframe={"8:71"}
       
//          />
//        ))
//     }
//         </Flex>
    )
}

export default ExploredVideos
