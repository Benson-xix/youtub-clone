import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import Boom from "./Boom"


const Header = () => {
    return (
       <Box>
           <HStack marginTop={"1rem"} marginLeft={"1rem"}>

              <Flex>
                  <Boom/>   
              </Flex>
          
           </HStack>
        
        <Box mt={"-3"}alignItems={"center"}  border={"1px"} borderRadius={"15rem"} borderColor={"white"} w={"20"} ml={155}>
             <IconButton size={"2"} overflow={"hidden"}bgColor={"rgb(121,152,231)"} marginLeft={"3"} padding={"1"} _hover={{bgColor:"#808fb8", padding:"1", color:"white"}}>
           < Text color={"white"} ml={1} textTransform={"capitalize"} textAlign={"center"} fontSize={"10"} cursor={"pointer"} >updating</Text>
            </IconButton> </Box>
       </Box>
    )
}

export default Header
