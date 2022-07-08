import {
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiPlayList2Fill} from "react-icons/ri"
import {FiClock} from "react-icons/fi"
import {BsDot} from "react-icons/bs"
import { IoEllipsisVerticalSharp,IoCheckmarkCircle } from "react-icons/io5";

const WatchedCard = ({ image, time, title, author, views, date, description, isVerified }) => {
  const [isHovered, setIsHovered] = useState(false);
 const [isParentHovered, setIsParentHovered] = useState(false)
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleParentMouseOver = () => setIsParentHovered(true)
  const handleParentMouseLeave = () => setIsParentHovered(false)

  useEffect(() => console.log(isParentHovered), [isParentHovered])


  return (
    <Flex w={"fit-content"} position={"relative"}  onMouseOver={handleParentMouseOver} onMouseLeave={handleParentMouseLeave}>
      <Box
        position={"relative"}
        w={"fit-content"}
        minH={"fit-content"}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        <Image src={image} w={400} h={150} objectFit={"cover"} />

        {isHovered ? (
          <Flex flexDirection={"column"}
          alignItems={"flex-end"} p={1} position={"absolute"} top={0}
          left={0}
          w={"100%"} gap={1}
          >
           
                <Center w={26} h={26} cursor={"pointer"} bgColor={"black"} p={1}>
                <FiClock size={22} color={"#fff"}/>
                </Center>

                <Center w={26} h={26} cursor={"pointer"} bgColor={"black"} p={1}>
                <RiPlayList2Fill size={22} color={"#fff"}/>
                </Center>
          
          </Flex>
        ) : (
          <Box
            p={1}
            position={"absolute"}
            left={0}
            bottom={0}
            w={"100%"}
            textAlign={"right"}
          >
            <Badge bgColor={"black"} color={"white"}>{time}</Badge>
          </Box>
        )}
      </Box>


      <Box maxW={"calc(100% - 300px"}>
          <VStack flex={1} ml={4} p={4} py={2} pl={0} >
            <Flex  w={"100%"}>
                <Heading fontSize={"lg"} color={"white"} fontWeight={500}>
                    {title}
                </Heading>
            </Flex>
            <HStack w={"100%"} >

              <HStack color={"gray.600"}>
                <Text fontSize={"sm"} color={"gray.600"}> { author } </Text>
                {isVerified && <IoCheckmarkCircle size={16} /> }
              </HStack>
                  
                  <Center color={"gray.600"}>
                    <BsDot size={19}  />
                  </Center>

                  <Text fontSize={"sm"} color={"gray.600"}> { views  } </Text>
                  <Center color={"gray.600"}>
                    <BsDot size={19}  />
                  </Center>
                  <Text fontSize={"sm"} color={"gray.600"}> { date  } </Text>
                </HStack>

                <Text fontSize={"sm"} color={"gray.500"}>
                  {description}
                </Text>
          </VStack>


          {isParentHovered && (
            <Center position={"absolute"} cursor={"pointer"} right={1} top={1}>
            <IoEllipsisVerticalSharp color={"white"} size={20} />
            </Center>
          )}
         
      </Box>
    </Flex>

    // image, icon, title, views, datePosted, timeframe, author, info}) => {

    // <Box  w={"65rem"} h={"100"} marginRight={"-10"}>
    //     <Box position={"relative"}>
    //         <HStack>
    //         <Image src={image} w={"15%"} h={"120px"} />
    //         <VStack >
    //             <Flex >
    //                 <Heading color={"white"} fontSize={".9rem"} mt={"-14"}>{title}</Heading>

    //                 <HStack>
    //                     <Flex mt={"-57"} gap={"2"}>
    //                 <Heading color={"white"} fontSize={".9rem"} marginLeft={"-270"}>{author} </Heading> <IoCheckmarkCircle color={"white"} />
    //                 <Text  textAlign={"left"}  color={"white"} fontSize={"sm"}>{views} Views. {datePosted}</Text>
    //                     </Flex>

    //                 </HStack>
    //                 <Flex mt={"-4"} ml={"-270"}>
    //                       <Heading fontSize={"sm"} color={"white"}>{info}</Heading>
    //                 </Flex>

    //             </Flex>

    //         </VStack>

    //         </HStack>

    //     </Box>
    // </Box>
  );
};

export default WatchedCard;
