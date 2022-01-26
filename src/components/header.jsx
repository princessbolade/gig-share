import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./Navbar";
import { Upload } from "./Upload";
import hero2 from "../assets/hero2.svg";
import hero4 from "../assets/hero4.svg";
export const Header = () => {
	return (
		<Box
			bg="#636c78"
			h="calc(100vh - 40px)"
			w="calc(100vw - 40px)"
			borderRadius={"45px"}
			position="relative"
		>
			<Image
				left={"10%"}
				bottom={"0"}
				position="absolute"
				src={hero2}
				borderTopRadius="30px"
			/>
			<Image
				bottom={"5%"}
				right={"5%"}
				position="absolute"
				src={hero4}
				borderRadius="30px"
			/>
			<NavBar />
			<VStack maxW={"760px"} mx="auto" textAlign={"center"}>
				<Text fontWeight={"500"} fontSize="80px" color={"white"}>
					Big transfers, bigger impact
				</Text>
				<Text fontWeight={"300"} fontSize="22px" color={"#dcdcdc"}>
					The simplest way to send big ideas around the world, and discover new
					creative work while you’re at it.
				</Text>
			</VStack>

			<Upload />
		</Box>
	);
};
