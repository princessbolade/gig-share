import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MotionImage } from "./framer";

import { useAnimation } from "framer-motion";

export const GigCard = ({ icon, firstText, secondText }) => {
	const [isHovered, setHovered] = React.useState(false);
	const controls = useAnimation();

	useEffect(() => {
		if (isHovered) {
			console.log(isHovered);
			controls.start("visible");
		}
		if (!isHovered) {
			controls.start("hidden");
		}
	}, [controls, isHovered]);
	const variants = {
		first: {
			hidden: { y: "-50%", x: "-50%" },
			visible: {
				y: "-300%",
				x: "-50%",
				transition: {
					duration: 0.5,
				},
			},
		},
		second: {
			hidden: { y: "300%", x: "-50%" },
			visible: {
				y: "-50%",
				x: "-50%",
				transition: {
					duration: 0.6,
					delay: 0.2,
				},
			},
		},
	};
	return (
		<VStack
			className="font"
			spacing="24px"
			bg="white"
			borderRadius={"30px"}
			p="50px"
			onMouseOver={() => setHovered(true)}
			onMouseOut={() => setHovered(false)}
		>
			<Box
				pos={"relative"}
				overflow="hidden"
				justifyContent="center"
				w="80px"
				h="80px"
				bg="#4c4e8e"
				flexDirection="column"
			>
				<MotionImage
					pos="absolute"
					left="50%"
					top="50%"
					transform="translate(-50%, -50%)"
					initial="hidden"
					variants={variants.first}
					animate={controls}
					src={icon}
				/>
				<MotionImage
					pos="absolute"
					left="50%"
					top="50%"
					initial="hidden"
					transform="translate(-50%, -50%)"
					variants={variants.second}
					animate={controls}
					src={icon}
				/>
			</Box>

			<Text
				fontWeight={"500"}
				fontSize="22px"
				color={"#0a033c"}
				textAlign="center"
			>
				{firstText}
			</Text>
			<Text
				fontWeight={"300"}
				fontSize="18px"
				color={"#0a033c"}
				textAlign="center"
			>
				{secondText}
			</Text>
		</VStack>
	);
};
