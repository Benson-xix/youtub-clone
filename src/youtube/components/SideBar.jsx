import { Box, Flex, IconButton, LinkBox, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMenuOutline, IoHomeOutline, IoHomeSharp, } from "react-icons/io5";
import {
  MdOutlineExplore,
  MdExplore,
  MdSubscriptions,
  MdPlayCircle,
  MdOutlineVideoLibrary,
  MdPlayCircleOutline,
  MdOutlineSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";

import { Link, useLocation } from 'react-router-dom'
const SideBar = () => {
const [active, setActive] = useState("/")
const {pathname} = useLocation()


useEffect(() => {
       setActive(pathname)
}, [pathname]
)

const sidebarNavItem = [
{
  link:"/", 
name: "home",
icon:<IoHomeOutline size={25} color={"#fff"}/>,
activeIcon: <IoHomeSharp size={25} color={"#fff"}/>,
},

{
  link:"/explore", 
name: "explore",
icon:<MdOutlineExplore size={25} color={"#fff"}/>,
activeIcon: <MdExplore size={25} color={"#fff"} />,
},



{
  link:"/short", 
name: "short",
icon:< MdPlayCircleOutline size={25} color={"#fff"}/>,
activeIcon: <MdPlayCircle  size={25} color={"#fff"}/>,
},

{
           link:"/subscription", 
      name: "subscription",
      icon:< MdOutlineSubscriptions  size={25} color={"#fff"}/>,
      activeIcon: <MdSubscriptions  size={25} color={"#fff"}/>,
      },
      
{
  link:"/library", 
name: "library",
icon:<MdOutlineVideoLibrary size={25} color={"#fff"}/>,
activeIcon: <MdVideoLibrary size={25} color={"#fff"}/>,
},

 
]


return (
<VStack gap={"1rem"} h={"100%"} py={"1rem"} >

<IconButton bgColor={"transparent"} _hover={{ bgColor: "grey.900" }}>
        <IoMenuOutline size={25} color={"#fff"} />
</IconButton>

{
        sidebarNavItem.map((item, index )=> (
                <LinkBox w={"100%"} key={index}>
              
                <Link to={item.link}>
              
                <VStack w={"100%"} py={"2.5"} px={"3"} _hover={{bgColor: "gray.900"}}>
                { active === item.link ? item.activeIcon : item.icon }
               <Text textTransform={"capitalize"}fontSize={".65rem"} color={"#fff"} fontWeight={"600"}>
             {item.name}
               </Text>
               </VStack>
              
               </Link>
                </LinkBox>
               
                
              ))
              
              }
</VStack>
        
)}   


/* <VStack h={"100"} py={"2rem"}>
<IconButton bgColor={"transparent"} _hover={{ bgColor: "grey.900" }}>
        <IoMenuOutline size={30} color={"#fff"} />
</IconButton> */



/* <VStack h={"100"} py={".10rem"}>

        <Flex flexDirection={"column"} color={"#fff"} p={3} _hover={{ bgColor: "#484657", color:"#050101 ", cursor:"pointer"}}>
        <IconButton
        py={"2rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "grey.900" }}
        >
        <VscHome size={30} color={"#fff"} />
        </IconButton>
        <Text fontSize='sm' >Home</Text>
        </Flex>


        <Flex flexDirection={"column"}  color={"#fff"} p={3} _hover={{ bgColor: "#484657", color:"#050101 ", cursor:"pointer"}}>
        <IconButton
        py={"2rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "grey.900" }}
        >
        <MdOutlineExplore size={30} color={"#fff"} />
        </IconButton>
        <Text fontSize='sm'>Explore</Text>
</Flex>

<Flex flexDirection={"column"} color={"#fff"} p={3} _hover={{ bgColor: "#484657", color:"#050101 ", cursor:"pointer"}}>
        <IconButton
        py={"2rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "grey.900" }}
        >
        <HiPlay size={30} color={"#fff"} />
        </IconButton>
        <Text fontSize='sm'>Short</Text>
</Flex>

<Flex flexDirection={"column"} color={"#fff"}  _hover={{ bgColor: "#484657", color:"#050101 ", cursor:"pointer"}}> 
<IconButton
        py={"2rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "grey.900" }}
        >
        <MdSubscriptions size={30} color={"#fff"} />
        </IconButton>
        <Text fontSize='sm'> Suscription</Text>
</Flex>


<Flex flexDirection={"column"} color={"#fff"} p={3} _hover={{ bgColor: "#484657", color:"#050101 ", cursor:"pointer"}}>
        <IconButton
        py={"2rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "grey.900" }}
        >
        <MdOutlineVideoLibrary size={30} color={"#fff"} />
        </IconButton>
        <Text fontSize='sm' >Libary</Text>
        </Flex>

</VStack>
</VStack> */

export default SideBar
