import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Main from "../components/Main"






 const LandingLayout = () => {
    return (
     <Box h={"100vh"} w={"100%"} bgColor={"gray.900"} overflow={"hidden"}>
         <Flex h={"100%"} w={"100%"}>

             <Box w={"80px"} bgColor={"gray.700"}>
                 {/* side bar*/}

                 <SideBar/>
             </Box>
             
             <Flex  flexDirection={"column"} flex={1}>
                <Box w={"100%"}  bgColor={"gray.700"}>
                    {/* header */}
                    <Header/>
                </Box>
                <Box w={"100%"} flex={1} overflowY={"scroll"}>
                    {/* main*/}
                    <Main/>
                </Box>
             </Flex>
         </Flex>
     
     </Box>
    )
}


export default LandingLayout