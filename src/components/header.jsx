import { Box, VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import "./index.css";
import { NavBar } from "./Navbar";
import { Upload } from "./Upload";
import hero2 from "../assets/hero2.svg";
import hero4 from "../assets/hero4.svg";
import { MotionBox } from "./framer";
export const Header = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			pos="relative"
		>
			<MotionBox
				zIndex={0}
				bg="#636c78"
				layout
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						width: "calc(100vw - 40px)",
					},
					hidden: {
						width: "0px",
					},
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					default: { duration: 0.9 },
					delay: 0.1,
				}}
				h="800px"
				borderRadius={"45px"}
				position="absolute"
			/>
			<Box
				zIndex={1}
				position="relative"
				width="calc(100vw - 40px)"
				h="800px"
				overflow="hidden"
			>
				<MotionBox
					layout
					left={"10%"}
					position="absolute"
					initial="hidden"
					animate="visible"
					bottom="0"
					variants={{
						visible: {
							opacity: "1",
							bottom: "0px",
						},
						hidden: {
							opacity: "0",
							bottom: "-50px",
						},
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						default: { duration: 0.9 },
						delay: 0.1,
					}}
				>
					<Image src={hero2} borderTopRadius="30px" />
				</MotionBox>
				<MotionBox
					layout
					bottom={"5%"}
					right={"5%"}
					position="absolute"
					initial="hidden"
					animate="visible"
					variants={{
						visible: {
							opacity: "1",
							right: "5%",
						},
						hidden: {
							opacity: "0",
							right: "7%",
						},
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						default: { duration: 0.9 },
						delay: 0.1,
					}}
				>
					<Image src={hero4} borderRadius="30px" />
				</MotionBox>
				<NavBar />
				<MotionBox
					initial="hidden"
					animate="visible"
					variants={{
						visible: {
							opacity: "1",
						},
						hidden: {
							opacity: "0",
						},
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						default: { duration: 0.3 },
						delay: 0.1,
					}}
				>
					<VStack maxW={"760px"} mx="auto" textAlign={"center"}>
						<Text
							className="fontR"
							fontWeight={"500"}
							fontSize="80px"
							color={"white"}
						>
							Big transfers, bigger impact
						</Text>
						<Text
							className="font"
							fontWeight={"300"}
							fontSize="22px"
							color={"#dcdcdc"}
						>
							The simplest way to send big ideas around the world, and discover
							new creative work while you’re at it.
						</Text>
					</VStack>
				</MotionBox>
				<Upload />
			</Box>
		</Box>
	);
};
