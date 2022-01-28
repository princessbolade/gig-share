import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { MotionBox, MotionImage } from "./framer";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Upload = () => {
	const [isHovered, setHovered] = React.useState(false);
	const [isClicked, setClicked] = React.useState(false);
	const [count, setCount] = useState(-1);

	console.log("count", count);
	useEffect(() => {
		if (count > -1 && count < 30) {
			setTimeout(() => setCount(count + 1), 100);
			return;
		}
		setClicked(false);
		setHovered(false);
		setCount(-1);
	}, [count]);

	const { ref, inView } = useInView();
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
		second1: {
			hidden: { y: "300%", x: "-50%" },
			visible: {
				y: "-70%",
				x: "-70%",
				rotate: "-30deg",
				transition: {
					duration: 0.8,
					delay: 0.6,
				},
			},
		},
		second2: {
			hidden: { y: "300%", x: "-50%" },
			visible: {
				y: "-70%",
				x: "-30%",
				rotate: "30deg",
				transition: {
					duration: 0.6,
					delay: 0.2,
				},
			},
		},
	};
	console.log(isHovered);
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			mt="70px"
			w={"262px"}
			mx="auto"
			h="240px"
			onMouseEnter={() => setHovered(true)}
			style={{
				backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='white' stroke-width='1' stroke-dasharray='22%2c 11%2c 10%2c 11' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
				borderRadius: "30px",
			}}
		>
			<Box
				w={"232px"}
				mx="auto"
				h="210px"
				bg="#7c8490"
				borderRadius="30px"
				alignItems="center"
				justifyContent="center"
				cursor={"pointer"}
				pos={"relative"}
				overflow="hidden"
				zIndex={0}
			>
				<MotionBox
					display={isClicked ? "none" : "block"}
					pos="absolute"
					left="50%"
					top="50%"
					transform="translate(-50%, -50%)"
					initial="hidden"
					variants={variants.first}
					animate={controls}
					zIndex={0}
				>
					<VStack
						w={"232px"}
						mx="auto"
						h="210px"
						borderRadius="30px"
						alignItems="center"
						justifyContent="center"
						zIndex={0}
					>
						<AddIcon
							w={"60px"}
							h={"60px"}
							bg="white"
							borderRadius={"100%"}
							p="18px"
							zIndex={0}
						/>
						<Text zIndex={0} fontWeight={"500"} fontSize="18px" color={"white"}>
							Add your files
						</Text>
						<Text zIndex={0} fontWeight={"300"} fontSize="15px" color={"white"}>
							Up to 20GB
						</Text>
					</VStack>
				</MotionBox>
				<MotionBox
					display={isClicked ? "none" : "block"}
					pos="absolute"
					left="50%"
					top="50%"
					initial="hidden"
					transform="translate(-50%, -50%)"
					variants={variants.second}
					animate={controls}
					zIndex={10}
					onClick={() => {
						setClicked(true);
						setCount(0);
					}}
				>
					<VStack
						zIndex={0}
						w={"232px"}
						mx="auto"
						h="210px"
						borderRadius="30px"
						alignItems="center"
						justifyContent="center"
					>
						<div ref={ref} className="addfile__img-wrap">
							<img
								src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
								loading="eager"
								alt=""
								className="addfile__img mod--0"
							/>
							<MotionImage
								src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
								loading="eager"
								data-addfile="img"
								alt=""
								className={`addfile__img mod--1 ${inView ? "active" : ""}`}
							/>
							<MotionImage
								src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
								loading="eager"
								data-addfile="img"
								alt=""
								className={`addfile__img mod--2 ${inView ? "active" : ""}`}
							/>
						</div>
					</VStack>
				</MotionBox>
				<Box w="100%" h="100%" overflow="hidden" pos={"relative"}>
					<MotionBox
						w="100%"
						h="100%"
						display={isClicked ? "flex" : "none"}
						justifyContent="center"
						alignItems="center"
						zIndex={10}
						style={{
							transformOrigin: " 50% 100%",
							scaleY: count / 30,
						}}
						background="#8bb8a2"
					></MotionBox>
					<Text
						left="50%"
						top="50%"
						display={isClicked ? "flex" : "none"}
						transform="translate(-50%, -50%)"
						position="absolute"
						color={"white"}
						fontWeight="600"
						fontSize="30px"
					>
						{Math.floor(count * 3.3333)}%
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};
