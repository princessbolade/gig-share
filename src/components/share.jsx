import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Niches from "../assets/photoroom.png";
import dots from "../assets/dots.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const Share = () => {
	return (
		<Box maxWidth="1300px" mx="auto" my="100px">
			<Flex alignItems="start" justifyContent={"space-between"}>
				<Flex pr="20px">
					<Image borderRadius={"30px"} src={Niches} />
					<Image src={dots} mr="3px" ml="10px" />
				</Flex>

				<VStack alignItems="start" px="20px" flex={1}>
					<Text
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
					>
						In Gig Share, you can work directly with the leading communication
						platforms - Slack and Zoom. Now you can have a brief meeting with
						your colleagues or even a video conference with just a couple of
						mouse clicks.
					</Text>
					<Flex w="100%" pt="20px" alignItems="center">
						<Button
							w="165px"
							h="60px"
							bgColor="#4c4e8e"
							color="white"
							mr="30px"
						>
							Get started
						</Button>
						<Text>Learn more {<ArrowForwardIcon />}</Text>
					</Flex>
				</VStack>
			</Flex>
		</Box>
	);
};
