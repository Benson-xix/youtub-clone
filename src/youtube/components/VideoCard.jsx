import { Flex, Heading, HStack, VStack, Box, Badge, Text, Image, Avatar } from '@chakra-ui/react'
import React from 'react'
import {IoCheckmarkCircle} from "react-icons/io5"
 const VideoCard = ({ image, icon, title, views, datePosted, timeframe, author, isViewed}) => {
    return (
        <Box minW={250} maxW={300} flex={1}>
           <Box position={"relative"}>
               <Image src={image} objectFit={"cover"} />
               <Badge position={"absolute"} bgColor={"black"} color={"white"} right={1.5} bottom={1.5}>{timeframe}</Badge>
           </Box>
           <HStack alignItems={"stretch"} py={5}>
               <Box>  
                   <Avatar src={icon} /> 
                   </Box>

                   <VStack>
                       <Heading color={"white"} fontSize={".9rem"}>{title}</Heading>

                       <HStack width={"100%"}>
                        <Text textAlign={"left"}  color={"gray.500"} fontSize={"sm"}>{author}  
                      
                       </Text>
                       {isViewed && (
                           <IoCheckmarkCircle size={16} color={"#aaa"}/>
                       )}
                       </HStack>
                     
                       <Text  textAlign={"left"} w={"100%"} color={"gray.500"} fontSize={"sm"}>{views} Views. {datePosted}</Text>
                   </VStack>
           </HStack>
        </Box>
    )
}

export default VideoCard