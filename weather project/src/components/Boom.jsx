import { Flex, IconButton, Text} from '@chakra-ui/react'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import {GoLocation} from 'react-icons/go'
import {HiOutlineDotsVertical} from 'react-icons/hi'

const Boom = () => {
    return (
        <Flex >
             <IconButton bgColor={"transparent"} _hover={{bgColor:"rgb(121,152,231)"}} >
             <CgMenuGridO size={25} color={"white"} cursor={"pointer"}/>
           </IconButton>
          

           <Flex marginLeft={"6.5rem"} marginTop={".9rem"}  > 
           <GoLocation size={10} color={"white"} cursor={"pointer"}/>
         
           </Flex> 

           <Flex marginTop={".5rem"} >
           <Text color={"white"} fontSize={"md"}  textTransform={"capitalize"}  marginLeft={"1"} > Minsk</Text>
           </Flex>

            <Flex marginLeft={"5.5rem"} marginTop={".2rem"} >
            <IconButton bgColor={"transparent"} _hover={{bgColor:"rgb(121,152,231)"}} >
            <HiOutlineDotsVertical color={"white"} cursor={"pointer"} size={20}/>
           </IconButton>
               
            </Flex>
           
        </Flex>
    )
}

export default Boom
