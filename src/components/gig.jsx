import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Card1 from "../assets/card1.svg";
import Card2 from "../assets/card2.svg";
import Card3 from "../assets/card3.svg";

export const Gig = () => {
	return (
		<Box my="100px" maxW={"1300px"} mx="auto">
			<Text
				mb="100px"
				fontWeight={"500"}
				fontSize="44px"
				color={"#0a033c"}
				maxW={"500px"}
				textAlign="center"
				lineHeight={"1"}
				mx="auto"
			>
				Work even more efficiently with Gig Share
			</Text>

			<HStack spacing="24px">
				<VStack spacing="24px" bg="white" borderRadius={"30px"} p="50px">
					<Flex justifyContent="center" w="80px" h="80px" bg="#4c4e8e">
						<Image src={Card1} />
					</Flex>

					<Text
						fontWeight={"500"}
						fontSize="22px"
						color={"#0a033c"}
						textAlign="center"
					>
						Fast switching between different tools
					</Text>
					<Text
						fontWeight={"300"}
						fontSize="18px"
						color={"#0a033c"}
						textAlign="center"
					>
						You can download documents in different file formats, import files
						to Evernote
					</Text>
				</VStack>
				<VStack spacing="24px" bg="white" borderRadius={"30px"} p="50px">
					<Flex justifyContent="center" w="80px" h="80px" bg="#4c4e8e">
						<Image src={Card2} />
					</Flex>

					<Text
						fontWeight={"500"}
						fontSize="22px"
						color={"#0a033c"}
						textAlign="center"
						lineHeight={1}
					>
						Sending
					</Text>
					<Text
						fontWeight={"500"}
						fontSize="22px"
						color={"#0a033c"}
						textAlign="center"
						lineHeight={1}
					>
						Sending large files safely
					</Text>
					<Text
						fontWeight={"300"}
						fontSize="18px"
						color={"#0a033c"}
						textAlign="center"
					>
						Application lets users preview PDF documents on a range of devices
						and supports password protection
					</Text>
				</VStack>
				<VStack spacing="24px" bg="white" borderRadius={"30px"} p="50px">
					<Flex justifyContent="center" w="80px" h="80px" bg="#4c4e8e">
						<Image src={Card3} />
					</Flex>

					<Text
						fontWeight={"500"}
						fontSize="22px"
						color={"#0a033c"}
						textAlign="center"
					>
						Make materials available to loved ones
					</Text>
					<Text
						fontWeight={"300"}
						fontSize="18px"
						color={"#0a033c"}
						textAlign="center"
					>
						The app has improved support for popular PDF extensions such asFill
						and Sign
					</Text>
				</VStack>
			</HStack>
		</Box>
	);
};