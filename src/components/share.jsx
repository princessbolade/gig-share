import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./index.css";
import dots from "../assets/dots.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const Share = () => {
  return (
    <Box maxWidth="1300px" mx="auto" my="100px">
      <Flex alignItems="start" justifyContent={"space-between"}>
        <Flex pr="20px" pos="relative">
          <Image
            borderRadius={"30px"}
            position={"absolute"}
            left={"-24px"}
            top={"auto"}
            right={"auto"}
            bottom={"-30px"}
            zIndex={"0"}
            src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303315ee5e03ee_hero_illustr-04.svg"
            loading="lazy"
            alt=""
          />
          <Box
            zIndex={1}
            display={"flex"}
            flexDirection={"row"}
            padding={" 32px 58px 40px 315px"}
            borderRadius={"30px"}
            minHeight={"340px"}
            boxShadow={"0 85px 128px -19px rgb(0 0 0 / 20%)"}
            backgroundColor={"#fff"}
          >
            <Box
              className="font"
              position={"relative"}
              zIndex={"2"}
              color={"#0a033c"}
            >
              <Text mb={"5px"} fontWeight={"500"} fontSize={"22px"}>
                Period statistics
              </Text>
              <Text fontWeight={"300"} fontSize={"18px"}>
                January
              </Text>
            </Box>
            <Image
              position={"absolute"}
              left={"30px"}
              top={"-70px"}
              right={"auto"}
              bottom={"auto"}
              zIndex={"1"}
              src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person.png"
              loading="eager"
              width="321"
              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 321px"
              srcSet="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person-p-500.png 500w, https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person.png 642w"
              alt=""
            />
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"end"}
              position={"relative"}
              zIndex={"2"}
              justifyContent={"flex-end"}
              flex={"1"}
            >
              <Image
                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30336fc75e03f2_statistics_line-03.svg"
                loading="lazy"
                alt=""
                style={{ width: "24px" }}
                mr={"16px"}
                objectFit={"none"}
                objectPosition={"50% 50%"}
              />
              <Image
                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bb395e03f9_statistics_line-02.svg"
                loading="lazy"
                alt=""
                style={{ width: "24px" }}
                mr={"16px"}
                objectFit={"none"}
                objectPosition={"50% 50%"}
              />
              <Image
                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033128f5e03f1_statistics_line-01.svg"
                loading="lazy"
                alt=""
                style={{ width: "24px" }}
                mr={"16px"}
                objectFit={"none"}
                objectPosition={"50% 50%"}
              />
            </Box>
          </Box>
          <Box></Box>
          <Image src={dots} mr="3px" ml="10px" />
        </Flex>

        <VStack alignItems="start" px="20px" flex={1}>
          <Text
            className="fontR"
            fontWeight={"600"}
            fontSize="44px"
            color={"#0a033c"}
            lineHeight="1"
            maxWidth="400px"
            textAlign={"left"}
          >
            Run your business in Gig Share
          </Text>
          <Text
            fontWeight={"300"}
            fontSize="18px"
            color={"#0a033c"}
            lineHeight="1.6"
            py="40px"
            className="font"
          >
            In Gig Share, you can work directly with the leading communication
            platforms - Slack and Zoom. Now you can have a brief meeting with
            your colleagues or even a video conference with just a couple of
            mouse clicks.
          </Text>
          <Flex w="100%" pt="20px" alignItems="center">
            <Button
              className="font"
              w="165px"
              h="60px"
              bgColor="#4c4e8e"
              color="white"
              mr="30px"
              borderRadius={"10px"}
              fontSize={"16px"}
            >
              Get started
            </Button>
            <Text className="font" fontSize={"18px"}>
              Learn more {<ArrowForwardIcon />}
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};
