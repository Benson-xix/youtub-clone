import { Box, Circle, Divider, Flex, HStack, StackDivider, Text, VStack } from "@chakra-ui/react"
import React from "react"
import {IoIosThunderstorm} from "react-icons/io"
import {BiWind} from  "react-icons/bi"
import {WiHumidity} from "react-icons/wi"
import {FiCloudRain} from "react-icons/fi"
const Body = () => {
    return (
       <Box w={"100%"}>
           <Flex alignContent={"center"}  w={"45%"}  ml={"125"}>
 <IoIosThunderstorm  size={140} color={"yellow"}  />

           </Flex>
       <VStack marginTop={"-7"} marginLeft={"7"} spacing='-1'>
       
        <Text fontSize={50} color={"white"}  >
        21°
                </Text>
        <Text fontSize={15} color={"white"}  textTransform={"capitalize"}>
            Thunderstorm
        </Text>
        <Text color={"white"}  textTransform={"capitalize"} fontSize={"9"}> 
            Monday,17 May
        </Text>
       
       </VStack > 
        <Divider orientation={"horizontal"} w={"20rem"} ml={5} mt={3}></Divider>
<Flex mt={3} ml={"7.5rem"} >
      

<HStack>
    <Flex gap={"3rem"}>

          <Circle>
            <BiWind size={20} color={"white"} />
            </Circle>

            <Circle>
            <WiHumidity size={20} color={"white"} />
            </Circle>

            <Circle>
            <FiCloudRain size={20} color={"white"} />
            </Circle>
    </Flex>
          
</HStack>




</Flex>

<HStack >
    <Flex ml={"25"}>
        <Text fontSize={11 } >13 km/h</Text>
    </Flex> 

    <Flex ml={"25"} >
        <Text fontSize={11} textAlign={"center"} >humidity</Text>
    </Flex>

    <Flex ml={"25"}>
        <Text fontSize={11}  >chances of rain</Text>
    </Flex>
</HStack>

       </Box>
    )
}

export default Body
