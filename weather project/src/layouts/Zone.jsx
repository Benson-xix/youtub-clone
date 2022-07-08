import React from "react"
import { Box, Flex, VStack} from '@chakra-ui/react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Body from "../components/Body"

const Zone = () => {
    return (
        <Box bgColor={"rgb(121,152,231)"} w={"35rem"} h={"45rem"} p={"4rem"} m={"2rem"}>
            <VStack>

                    <Flex  alignContent={"center"} w={"25rem"} h={"35rem"} bgColor={"black"} borderRadius={"5rem"} >
       <Box  w={"90%"} h={"75%"} bgColor={"rgb(121,152,231)"} marginLeft={"1rem"} marginTop={"1rem"} borderRadius={"3rem"}>
              <Header/>

              <Body/>
          

       </Box>
       <Footer/>
       </Flex>

            </VStack>
    
        </Box>
      
    )
}

export default Zone
