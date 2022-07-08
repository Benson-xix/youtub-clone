import { Box, Button, Flex, HStack, Icon, Spacer, Text, Select } from '@chakra-ui/react'
import React from 'react'


import {MdHistory, MdMicNone} from "react-icons/md"
import VideoCard from './VideoCard'
const LibrarySection = ({heading, icon, data}) => {
    return (
        
            <Box my={5} pb={5} borderBottomWidth={1} borderBottomColor={"gray.700"} >
                <Flex alignItems={"center"}>
                    <HStack fontSize={"xl"} color={"gray.400"}>
                        {icon}
                        <Text fontSize={"lg"} fontWeight={600}>{heading} </Text>
                        {heading.startsWith('Playlists')?"":<Text fontSize={"sm"} fontWeight={600}  color={"gray.500"}>
                            {data.length}
                        </Text>}
                    </HStack>
                    {heading.startsWith('Playlists')?"":
                    <Spacer/>}
                    {heading.startsWith('Playlists')? <Button size={"sm"} ml={10} textTransform={"uppercase"} variant={"link"}_hover={{ border: "none" }} >
                                                <Select placeholder='' size={"sm"} border={"none"} >
                            <option value='option1'> A-Z</option>
                            <option value='option1'>Recently  Added </option>
                            </Select>
                    
                     </Button>: <Button size={"sm"} textTransform={"uppercase"} variant={"link"}>See all</Button>}
                    
                </Flex>

                    <Flex>
                        
                    </Flex>

                <Flex   flexWrap={"wrap"} gap={5} p={'4'} >
    {
       data.map(({image, icon, datePosted, title, author,timeframe, views, isViewed}, index) => (
         <VideoCard 
         key={index}
         image={image}
         icon={icon}
         datePosted={datePosted}
         timeframe={timeframe}
         title={title}
         views={views}
         author={author}
    
         isViewed={isViewed}
         />
       ))
    }
       </Flex>
            </Box>
    )
}

export default LibrarySection
