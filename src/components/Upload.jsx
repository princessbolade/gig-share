import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

export const Upload = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="70px"
      w={"252px"}
      mx="auto"
      h="230px"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='white' stroke-width='1' stroke-dasharray='22%2c 11%2c 10%2c 11' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
        borderRadius: "30px",
      }}
    >
      <VStack
        w={"232px"}
        mx="auto"
        h="210px"
        bg="#7c8490"
        borderRadius="30px"
        alignItems="center"
        justifyContent="center"
      >
        <AddIcon
          w={"60px"}
          h={"60px"}
          bg="white"
          borderRadius={"100%"}
          p="18px"
        />
        <Text fontWeight={"500"} fontSize="18px" color={"white"}>
          Add your files
        </Text>
        <Text fontWeight={"300"} fontSize="15px" color={"white"}>
          Up to 20GB
        </Text>
      </VStack>
    </Flex>
  );
};
