import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Exploreitem = ({ icon, handleClick, text}) => {
   const page = text?.slice(0, 1)?.toUpperCase() + text.slice(1)
    return (
        <Box p={3} flex={1} cursor={"pointer"} onClick={() => handleClick(page)} bgColor={"gray.800"} rounded={"md"}>
            { icon }
            <Heading mt={5} textTransform={"capitalize"} fontWeight={600} color={"white"} fontSize={"lg"} > { text} </Heading>
        </Box>
    )
}

export default Exploreitem
