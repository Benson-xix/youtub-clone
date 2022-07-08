import { Avatar, Box, Button, Center, Flex, Heading, VStack, Text, Spacer } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { IoEllipsisVerticalSharp, IoThumbsUp, IoThumbsDown, IoChatbubble, IoChatbox, IoShare, IoShareSocial} from "react-icons/io5";

const ShortCardIcons = ({icons, text, handleClick, isLike}) => {
    return (
        <VStack color={"gray.500"} onClick={handleClick} cursor={"pointer"}>
            {icons}
            <Text fontSize={"sm"}>{text}</Text>
        </VStack>
    )
}
const styles = {
    videoStyle : {
        width: '100%',
        height: '100%',
        objectFit:'cover',
    },

    overlay:{
        width: '100%',
        height: '100%',
        objectFit:'cover',
        position:'absolute',
        left:0,
        top:0,
        backgroundColor:"rgba(0,0,0, .5)",
        zIndex:2
    }
}



const ShortCard = ({video,title, authorName, authorIcon, likes, comments }) => {
    const videoRef = useRef()
   
    const [isLike, setIsLiked] = useState(null)
    
    
  

    // const handleScroll = () => {
    //     console.log(videoRef.current)
    // }
    // useEffect (() => {
    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])
    return (
            <Flex>

                <Box maxWidth={350} height={"80vh"} position={"relative"} >
                    <div style={styles.overlay}></div>
                         <video ref={videoRef}  loop src={video} style={styles.videoStyle} autoPlay />
                         <Box position={"absolute"} bottom={5} w={"100%"} p={5} zIndex={5}>
                             <Heading color={"gray.200"} fontSize={"xl"} mb={5}>{title}</Heading>
                             <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                 <Flex alignItems={"center"}>
                                <Avatar src={authorIcon}/>
                                 <Text color={"gray.200"} fontWeight={600} ml={2}>
                                     {authorName}
                                 </Text>
                                
                                 </Flex >
                                  <Button colorScheme={"red"} rounded={"none"}>Subscribe</Button>
                             </Flex>

                            
                         </Box>
                </Box>
           
                <Flex  flexDir={"column"} px={2}>
                    <Center cursor={"pointer"} color={"gray.200"}>
                        <IoEllipsisVerticalSharp size={20}/>
                    </Center>

                    <Spacer/>

                    <VStack  gap={3}>
                    <ShortCardIcons isLiked={isLike}  text={likes} handleClick={() => setIsLiked("like")} icons={<IoThumbsUp color={isLike == "like" && "#f00"} size={25}/>}/>
                    <ShortCardIcons isLiked={isLike}  text={"Dislike"}  handleClick={() => setIsLiked("dislike")}  icons={<IoThumbsDown color={isLike == "dislike" && "#f00"} size={25} />}  />
                    <ShortCardIcons text={comments} icons={<IoChatbubble size={25}/>}  />
                    <ShortCardIcons text={"Share"} icons={<IoShareSocial size={25}/>}  />
                    </VStack>
                </Flex>
            </Flex>
    )
}

export default ShortCard
