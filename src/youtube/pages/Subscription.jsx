import { Box, Button, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import SubscriptionSection from "../components/subscriptionSection";
import image1 from "../assets/img/image1.png";
import icon1 from "../assets/img/icon1.png";
import { IoGridOutline, IoGrid , IoListOutline, IoList} from "react-icons/io5";
const Subscription = () => {
  const [mode, setMode] = useState("grid")
  const data = [
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
    {
      image: image1,
      icon: icon1,
      datePosted: "7 days ago",
      timeframe: "8:71",
      title: "moments that can't be repeated in anime",
      views: "5.3M",
      author: "John Smith",
      isViewed: true,
    },
  ];
  return (
    <Box minH={"full"} w={"full"} p={4} position={"relative"}>
      <HStack pos={"absolute"} right={12} zIndex={10} top={12}>
        <Button variant={"link"}  _hover={{textDecoration:"none"}} colorScheme={"blue"} textTransform={"uppercase"}>Manage </Button>

        <IconButton variant ={"outline"} fontSize={"lg"}  colorScheme={"whiteAlpha"} rounded={"full"} borderColor={"gray.800"} onClick={() => setMode("grid")}>
      { mode === "grid" ? (
        <IoGrid color={"#ffff"}/>): (
          <IoGridOutline/>
        )
         }
        </IconButton>

        <IconButton variant ={"outline"} fontSize={"lg"} colorScheme={"whiteAlpha"} rounded={"full"} borderColor={"gray.800"}  onClick={() => setMode("list")}>
      { mode === "list" ? (
        <IoList color={"#ffff"} />): (
          <IoListOutline/>
        )
         }
        </IconButton>



      </HStack>



      <SubscriptionSection
      mode={mode}
       title={"Today"} data={data}
        />

      <SubscriptionSection 
      mode={mode}
      title={"week"} data={data} 
      />

<SubscriptionSection 
mode={mode}
      title={"month"} data={data} 
      />
    </Box>
  );
};

export default Subscription;
