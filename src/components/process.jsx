import { Box, Flex, Image, StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Niches from "../assets/photoroom.png";
import HomenGarden from "../assets/HomenGarden.svg";
import Marriot from "../assets/Marriot.svg";
import dots from "../assets/dots.svg";

import Living from "../assets/Living.svg";
import bookMyShow from "../assets/bookMyShow.svg";

export const Process = () => {
	return (
		<Box maxWidth="1300px" mx="auto" my="100px">
			<Flex alignItems="center" justifyContent={"space-between"}>
				<VStack
					px="20px"
					flex={1}
					divider={<StackDivider border={"1px dashed black"} />}
				>
					<Flex justifyContent={"space-between"} alignItems="center" py="50px">
						<Text
							fontWeight={"600"}
							fontSize="44px"
							color={"#0a033c"}
							lineHeight="1"
						>
							Your best processes
						</Text>
						<Text
							fontWeight={"300"}
							fontSize="18px"
							color={"#0a033c"}
							lineHeight="1.6"
						>
							It’s a smart workspace where teams, tools and content come
							workspace together.
						</Text>
					</Flex>
					<Flex w="100%" justifyContent={"space-between"} pt="20px">
						<Image src={Living} />
						<Image src={HomenGarden} />
						<Image src={bookMyShow} />
						<Image src={Marriot} />
					</Flex>
				</VStack>
				<Image src={dots} mr="3px" ml="10px" />
				<Image borderRadius={"30px"} src={Niches} />
			</Flex>
		</Box>
	);
};
