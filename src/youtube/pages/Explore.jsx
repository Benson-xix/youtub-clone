import React, { useState } from 'react'
import { Box, Container, Flex, Heading, HStack, VStack } from '@chakra-ui/react'
import {MdOutlineLocalFireDepartment} from "react-icons/md"
import {HiMusicNote} from "react-icons/hi"
import {SiYoutubegaming} from "react-icons/si"
import {IoNewspaperSharp} from "react-icons/io5"
import {FaTrophy} from "react-icons/fa"
import Exploreitem from '../components/Exploreitem'
import ExploredVideos from '../components/ExploredVideos'
import { Route } from 'react-router-dom'
import MusicVideo from '../components/MusicVideo'
import GamingVideo from '../components/GamingVideo'
import NewsVideo from '../components/NewsVideo'
import SportVideo from '../components/SportVideo'
const Explore = () => {  
    const [pageHeading, setPageHeading] = useState("Trending videos")
    const exploreItems = [
        {
            icon:<MdOutlineLocalFireDepartment size={36} color={"rgb(216,16,32)"}/>,
            text:"trending"
        },
        {
            icon:<HiMusicNote size={36} color={"rgb(221,174,40)"}/>,
            text:"Music"
        },
        {
            icon:<SiYoutubegaming size={36} color={"rgb(195,77,35)"}/>,
            text:"gaming"
        },
        {
            icon:<IoNewspaperSharp size={36} color={"rgb(121,152,231)"}/>,
            text:"news"
        },
        {
            icon:<FaTrophy size={36} color={"rgb(30,53,251)"}/>,
            text:"sports"
        },
    ]

    const handleClick = text => setPageHeading(`${text} videos`)
    return (
   <Box p={4}>
       <Container maxW={'container.lg'} >
        <Flex flexWrap={"wrap"} gap={1.5}>
        {
            exploreItems.map(({icon, text}, index) => (
                <Exploreitem key={`${text}-${index}`} handleClick={handleClick} icon={icon} text={text} />
            ))
        }
        </Flex>
        <Box mt={6}>
            <Heading color={"white"} fontSize={"lg"} >{ pageHeading}</Heading>
            <Box mt={5}>
              {
                  pageHeading?.split(" ")[0].toLowerCase() == "trending" ? (
                      <ExploredVideos/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "music" ? (
                      <MusicVideo/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "gaming" ? (
                      <GamingVideo/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "news" ? (
                      <NewsVideo/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "sports" ? (
                      <SportVideo/>
                  ) : (
                      <ExploredVideos/>
                  )


              }
            </Box>
        </Box>



       </Container>

       {/* <Container>
        <VStack>
        <ExploredVideos/>

        </VStack>

       </Container> */}
        </Box>
    )
}

export default Explore
