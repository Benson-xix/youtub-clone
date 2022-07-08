import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import VideoCard from "./VideoCard";
import WatchedCard from "./WatchedCard";

const SubscriptionSection = ({ title, data, mode }) => {
  return (
    <Box px={8} py={1} w={"full"}>
      <Flex alignItems={"center"}>
        {mode === "grid" && (
          <Heading
            py={4}
            fontSize={"md"}
            textTransform={"capitalize"}
            fontWeight={600}
            color={"white"}
          >
            {title}
          </Heading>
        )}
      </Flex>
      {mode === "list" ? (
        <VStack gap={5} mt={16}>
          {data.map((item, index) => (
            <WatchedCard
              key={`$ {item.title}-${index}`}
              image={item.image}
              author={item.author}
              date={item.date}
              time={item.timeFrame}
              title={item.title}
              views={item.view}
              isVerified={item.isViewed}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio labore dolor molestiae eaque, non repellendus aliquid voluptatem quod consectetur similique ducimus mollitia commodi? Unde facere culpa excepturi repudiandae aspernatur! "
              }
            />
          ))}
        </VStack>
      ) : (
        <Flex
          flexWrap={"wrap"}
          gap={5}
          py={"4"}
          borderColor={"whiteAlpha.300"}
          borderBottomWidth={1}
        >
          {data.map((item, index) => (
            <VideoCard {...item} key={index} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default SubscriptionSection;
