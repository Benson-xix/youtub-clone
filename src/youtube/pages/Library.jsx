import React from 'react'
import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import LibrarySection from '../components/LibrarySection'
import {MdHistory} from "react-icons/md"
import {AiOutlineLike} from "react-icons/ai"
import {MdPlaylistPlay} from "react-icons/md"
import {IoMdTime} from "react-icons/io"
import image1 from "../assets/img/image1.png"
import icon1 from "../assets/img/icon1.png"
const Library = () => {
    const sections = [
        {
            heading:"History",
            icon: <MdHistory/>,
            data: [
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                }
            ]
        },

        {
            heading:"Watch later",
            icon: <MdHistory/>,
            data: [
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                }
            ]
        },

        {
            heading:"Playlists",
            icon: <MdPlaylistPlay/>,
            data: [
                {
                    image:image1,
                    author:"John Smith",
                     title:"moments that can't be repeated in anime",
                }
            ]
            },



        {
            heading:"Liked videos",
            icon: <AiOutlineLike/>,
            data: [
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                },
                {
                
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeframe:"8:71",
                    title:"moments that can't be repeated in anime",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,

                }
            ]
        }
        
    ]
    return (
        <Flex px={10} py={8}>
            <Box flex={1}>
                {
                    sections.map((item, index) =><LibrarySection {...item} key={index}  />)
                }
        
            </Box>
            <Box w={300}>
                <Box textAlign={"center"}>
                <Image src={icon1} rounded={"full"} objectFit={"cover"} w={100} h={100} display={"inline-block"} />
                <Text mt={1} color={"gray.300"}>Hisoka perv</Text>
                </Box> 
                <VStack>
                    <Flex py={3} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"} >
                        <Text>Subscriptions</Text>
                        <Spacer/>
                        <Text>58</Text>
                    </Flex>
                    <Flex py={3} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"} >
                        <Text>Uploads</Text>
                        <Spacer/>
                        <Text>0</Text>
                    </Flex>
                    <Flex py={3} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"} >
                        <Text>Likes</Text>
                        <Spacer/>
                        <Text>1</Text>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Library
