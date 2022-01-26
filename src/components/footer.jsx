import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	Link,
	Stack,
	Text,
	Flex,
	Grid,
	GridItem,
	Image,
} from "@chakra-ui/react";
import Footer1 from "../assets/footer1.svg";
import Footer2 from "../assets/footer2.svg";

const ListHeader = ({ children }) => {
	return (
		<Text color={"white"} fontWeight={"500"} fontSize={"22px"} mb={2}>
			{children}
		</Text>
	);
};

export const Footer = () => {
	return (
		<Box position="relative" bg="#636c78" color={"#c7c7c7"}>
			<Image
				left={"80px"}
				position="absolute"
				src={Footer1}
				borderBottomRadius="20px"
			/>
			<Image
				bottom={0}
				right={"20%"}
				position="absolute"
				src={Footer2}
				borderTopRadius="20px"
			/>
			<Container as={Stack} maxW={"1300px"} py={10} pt="100px">
				<Grid
					fontSize={"18px"}
					templateColumns="repeat(4, 1fr)"
					spacing={8}
					py={"50px"}
				>
					<GridItem colSpan={2} w="100%" h="10">
						<Stack align={"flex-start"} maxW="310px">
							<ListHeader>About us</ListHeader>
							<Text>
								A smart workspace is a digital environment that brings together
								all the content of workgroup members with their favorite tools.
							</Text>
						</Stack>
					</GridItem>

					<Stack align={"flex-start"}>
						<ListHeader>Sitemap</ListHeader>
						<Grid w="100%" templateColumns="repeat(2, 1fr)" rowGap={"20px"}>
							<Link href={"#"}>Big Transfer</Link>
							<Link href={"#"}>Personal</Link>
							<Link href={"#"}>Processes</Link>
							<Link href={"#"}>About</Link>
							<Link href={"#"}>Benefits</Link>
						</Grid>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Community</ListHeader>
						<Grid w="100%" templateColumns="repeat(2, 1fr)" rowGap={"20px"}>
							<Link href={"#"}>Facebook</Link>
							<Link href={"#"}>Behance</Link>
							<Link href={"#"}>Instagram</Link>
							<Link href={"#"}>Dribble</Link>
							<Link href={"#"}>LinkedIn</Link>
						</Grid>
					</Stack>
				</Grid>

				<Box pt={10}>
					<Flex
						align={"center"}
						_before={{
							content: '""',
							width: "100%",
							borderBottom: "1px solid",
							borderColor: "gray",
							flexGrow: 1,
						}}
					></Flex>
					<Flex py={5} justifyContent="space-between">
						<Text pt={6} fontSize={"18px"} textAlign={"center"}>
							2021 Halo Lab. All rights reserved
						</Text>
						<Text pt={6} fontSize={"18px"} textAlign={"center"}>
							English {<ChevronDownIcon />}
						</Text>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};
