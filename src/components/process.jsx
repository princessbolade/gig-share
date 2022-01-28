import {
	Box,
	Flex,
	Image,
	Text,
	VStack,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./index.css";
import HomenGarden from "../assets/HomenGarden.svg";
import Marriot from "../assets/Marriot.svg";
import Living from "../assets/Living.svg";
import bookMyShow from "../assets/bookMyShow.svg";
import { useAnimation } from "framer-motion";
import { MotionBox, MotionImage } from "./framer";
import { useInView } from "react-intersection-observer";

export const Process = () => {
	const [isHovered, setHovered] = React.useState(0);
	const { ref, inView } = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			console.log(inView);
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const nicheVariants = {
		mainBox: {
			hidden: { y: 100 },
			visible: {
				y: 0,
				transition: {
					duration: 0.5,
				},
			},
		},
		dot: {
			hidden: { x: 100 },
			visible: {
				x: 0,
				transition: {
					duration: 1,
					delay: 0.5,
				},
			},
		},
		smallBox: {
			hidden: { x: -100, y: -100 },
			visible: {
				x: 0,
				y: 0,
				transition: {
					duration: 1,
					delay: 0.5,
				},
			},
		},
		bestText: {
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
				},
			},
		},
		smallText: {
			hidden: { opacity: 0, x: -30 },
			visible: {
				opacity: 1,
				x: 0,
				transition: {
					duration: 1,
				},
			},
		},
		icons: {
			hidden: { opacity: 0, y: -30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
				},
			},
		},
	};

	return (
		<Box maxWidth="1300px" mx="auto" my="100px">
			<Flex alignItems="center" justifyContent={"space-between"}>
				<VStack px="20px" flex={1}>
					<Flex justifyContent={"space-between"} alignItems="center" py="50px">
						<MotionBox
							initial="hidden"
							animate={controls}
							variants={nicheVariants.bestText}
						>
							<Text
								className="fontR"
								fontWeight={"600"}
								fontSize="44px"
								color={"#0a033c"}
								lineHeight="1"
								maxWidth={"295px"}
							>
								Your best processes
							</Text>
						</MotionBox>
						<MotionBox
							initial="hidden"
							animate={controls}
							variants={nicheVariants.smallText}
						>
							<Text
								className="font"
								fontWeight={"300"}
								fontSize="18px"
								color={"#0a033c"}
								lineHeight="1.6"
								maxWidth={"295px"}
							>
								It’s a smart workspace where teams, tools and content come
								workspace together.
							</Text>
						</MotionBox>
					</Flex>
					<Box className="dashed-line"></Box>
					<MotionBox
						w="100%"
						initial="hidden"
						animate={controls}
						variants={nicheVariants.icons}
					>
						<Flex w="100%" justifyContent={"space-between"} pt="20px">
							<Image src={Living} />
							<Image src={HomenGarden} />
							<Image src={bookMyShow} />
							<Image src={Marriot} />
						</Flex>
					</MotionBox>
				</VStack>

				<MotionBox
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={nicheVariants.mainBox}
					className="processes__col mod--2"
					style={{ opacity: 1 }}
				>
					<Box className="graph-block">
						<Text
							fontSize={"22px"}
							color={"#0a033c"}
							className="graph__heading font"
						>
							Niches breakdown
						</Text>
						<Box className="graph__columns">
							<Box className="graph__col mod--1">
								<Box data-graph="hover" className="graph__circle">
									<Box className="graph__total">
										<Box className="graph__total-txt font">total</Box>
										<Box id="coord" className="graph__total-numb fontR">
											1258
										</Box>
									</Box>
									<MotionBox
										as={"svg"}
										zIndex={"-9999"}
										visibility="hidden"
										h="300px"
										whileHover={{ scale: 1.1 }}
										id="w__graph-1"
										loading="lazy"
										data-graph="part1"
										alt=""
										className="graph__part"
										onMouseOver={() => setHovered(1)}
										onMouseOut={() => setHovered(0)}
									>
										<path
											style={{
												visibility: "visible",
											}}
											xmlns="http://www.w3.org/2000/svg"
											d="M201 100.5C201 122.917 193.505 144.691 179.707 162.359C165.909 180.026 146.6 192.574 124.851 198.005C103.102 203.437 80.1607 201.441 59.6763 192.335C39.1918 183.229 22.3399 167.536 11.8003 147.751L56.1502 124.125C61.42 134.018 69.8459 141.864 80.0881 146.418C90.3304 150.971 101.801 151.968 112.675 149.253C123.55 146.537 133.205 140.263 140.104 131.429C147.003 122.595 150.75 111.709 150.75 100.5L201 100.5Z"
											fill="#FF4033"
										/>
									</MotionBox>
									<MotionBox
										as={"svg"}
										onMouseEnter={() => setHovered(2)}
										onMouseLeave={() => setHovered(0)}
										id="w__graph-2"
										loading="lazy"
										data-graph="part2"
										alt=""
										className="graph__part"
										whileHover={{ scale: 1.1 }}
										zIndex={"-9999"}
										visibility="hidden"
									>
										<path
											style={{
												visibility: "visible",
											}}
											xmlns="http://www.w3.org/2000/svg"
											d="M11.8656 147.873C5.6445 136.233 1.77692 123.482 0.483671 110.348C-0.809578 97.2136 0.496837 83.9531 4.32832 71.3237L52.4142 85.9118C50.4984 92.2266 49.8452 98.8568 50.4918 105.424C51.1385 111.991 53.0723 118.367 56.1828 124.186L11.8656 147.873Z"
											fill="#E6D3A3"
										/>
									</MotionBox>
									<MotionBox
										as={"svg"}
										zIndex={"-9999"}
										visibility="hidden"
										whileHover={{ scale: 1.1 }}
										id="w__graph-3"
										loading="lazy"
										data-graph="part3"
										alt=""
										className="graph__part"
										onMouseOver={() => setHovered(3)}
										onMouseOut={() => setHovered(0)}
									>
										<path
											style={{
												visibility: "visible",
											}}
											xmlns="http://www.w3.org/2000/svg"
											d="M4.18476 71.8012C11.7073 46.5551 28.8415 25.2719 51.8994 12.5328L76.1997 56.5164C64.6708 62.8859 56.1036 73.5275 52.3424 86.1506L4.18476 71.8012Z"
											fill="#8BB8A2"
										/>
									</MotionBox>
									<MotionBox
										as={"svg"}
										zIndex={"-9999"}
										visibility="hidden"
										whileHover={{ scale: 1.1 }}
										id="w__graph-4"
										loading="lazy"
										data-graph="part4"
										alt=""
										className="graph__part"
										onMouseOver={() => setHovered(4)}
										onMouseOut={() => setHovered(0)}
									>
										<path
											style={{
												visibility: "visible",
											}}
											xmlns="http://www.w3.org/2000/svg"
											d="M51.8404 12.5654C75.1621 -0.339923 102.655 -3.45218 128.272 3.9133L114.386 52.2066C101.578 48.5239 87.831 50.08 76.1702 56.5327L51.8404 12.5654Z"
											fill="#4C4E8E"
										/>
									</MotionBox>
									<MotionBox
										as={"svg"}
										zIndex={"-9999"}
										visibility="hidden"
										whileHover={{ scale: 1.1 }}
										id="w__graph-5"
										loading="lazy"
										data-graph="part5"
										alt=""
										className="graph__part"
										onMouseOver={() => setHovered(5)}
										onMouseOut={() => setHovered(0)}
									>
										<path
											style={{
												visibility: "visible",
											}}
											xmlns="http://www.w3.org/2000/svg"
											d="M128.235 3.9027C149.212 9.92551 167.658 22.613 180.785 40.0476C193.913 57.4822 201.009 78.7164 201 100.541L150.75 100.52C150.754 89.6082 147.207 78.9911 140.643 70.2738C134.079 61.5565 124.856 55.2127 114.367 52.2013L128.235 3.9027Z"
											fill="#432E2D"
										/>
									</MotionBox>
								</Box>
							</Box>
							<Box className="graph__col mod--2">
								<UnorderedList className="graph__list">
									<ListItem
										id="graph__list-item-1"
										className="graph__list-item"
									>
										<MotionBox
											background="transparent"
											animate={{
												scale: isHovered === 4 ? 1.5 : 1,
												border:
													isHovered === 4
														? "1px solid rgb(76, 78, 142)"
														: "none",
											}}
											className="graph__list-dot"
										>
											<MotionBox
												background="rgb(76, 78, 142)"
												w="6px"
												h="6px"
												borderRadius="100%"
												animate={{
													scale: isHovered === 4 ? 0.5 : 1,
												}}
												data-graph="dot4"
												className={`graph__list-dot-border`}
											></MotionBox>
										</MotionBox>
										<Box className="graph__list-txt font">Engineering</Box>
										<Box className="graph__list-numb fontR">23%</Box>
									</ListItem>
									<ListItem
										id="graph__list-item-2"
										className="graph__list-item"
									>
										<MotionBox
											background="transparent"
											animate={{
												scale: isHovered === 3 ? 1.5 : 1,
												border:
													isHovered === 3
														? "1px solid rgb(139, 184, 162)"
														: "none",
											}}
											className="graph__list-dot"
										>
											<MotionBox
												background="rgb(139, 184, 162)"
												w="6px"
												h="6px"
												borderRadius="100%"
												animate={{
													scale: isHovered === 3 ? 0.5 : 1,
												}}
												data-graph="dot3"
												className={`graph__list-dot-border`}
											></MotionBox>
										</MotionBox>
										<Box className="graph__list-txt font">Finance</Box>
										<Box className="graph__list-numb fontR">17%</Box>
									</ListItem>
									<ListItem
										id="graph__list-item-3"
										className="graph__list-item"
									>
										<MotionBox
											background="transparent"
											animate={{
												scale: isHovered === 2 ? 1.5 : 1,
												border:
													isHovered === 2
														? "1px solid rgb(229, 210, 162)"
														: "none",
											}}
											className="graph__list-dot"
										>
											<MotionBox
												background="rgb(229, 210, 162)"
												w="6px"
												h="6px"
												borderRadius="100%"
												animate={{
													scale: isHovered === 2 ? 0.5 : 1,
												}}
												data-graph="dot2"
												className={`graph__list-dot-border`}
											></MotionBox>
										</MotionBox>
										<Box className="graph__list-txt font">Art</Box>
										<Box className="graph__list-numb fontR">13%</Box>
									</ListItem>
									<ListItem
										id="graph__list-item-4"
										className="graph__list-item"
									>
										<MotionBox
											background="transparent"
											animate={{
												scale: isHovered === 1 ? 1.5 : 1,
												border:
													isHovered === 1
														? "1px solid rgb(255, 64, 51)"
														: "none",
											}}
											className="graph__list-dot"
										>
											<MotionBox
												background="rgb(255, 64, 51)"
												w="6px"
												h="6px"
												borderRadius="100%"
												animate={{
													scale: isHovered === 1 ? 0.5 : 1,
												}}
												data-graph="dot1"
												className={`graph__list-dot-border`}
											></MotionBox>
										</MotionBox>
										<Box className="graph__list-txt font">Social</Box>
										<Box className="graph__list-numb fontR">12%</Box>
									</ListItem>
									<ListItem
										id="graph__list-item-5"
										className="graph__list-item"
									>
										<MotionBox
											background="transparent"
											animate={{
												scale: isHovered === 5 ? 1.5 : 1,
												border:
													isHovered === 5
														? "1px solid rgb(67, 46, 45)"
														: "none",
											}}
											className="graph__list-dot"
										>
											<MotionBox
												background="rgb(67, 46, 45)"
												w="6px"
												h="6px"
												borderRadius="100%"
												animate={{
													scale: isHovered === 5 ? 0.5 : 1,
												}}
												data-graph="dot5"
												className={`graph__list-dot-border`}
											></MotionBox>
										</MotionBox>
										<Box className="graph__list-txt font">Design</Box>
										<Box className="graph__list-numb fontR">99%</Box>
									</ListItem>
								</UnorderedList>
							</Box>
						</Box>
					</Box>
					<MotionBox className="processes__bg-wrap mod--1">
						<MotionImage
							initial="hidden"
							animate={controls}
							variants={nicheVariants.dot}
							src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
							loading="lazy"
							alt=""
							className="processes__bg mod--1"
						/>
					</MotionBox>
					<MotionBox className="processes__bg-wrap mod--2">
						<MotionImage
							initial="hidden"
							animate={controls}
							variants={nicheVariants.smallBox}
							src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033f48e5e03f4_processes_illustr.svg"
							loading="lazy"
							alt=""
							className="processes__bg mod--2"
						/>
					</MotionBox>
				</MotionBox>
			</Flex>
		</Box>
	);
};
