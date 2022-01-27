import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import "./index.css";
import HomenGarden from "../assets/HomenGarden.svg";
import Marriot from "../assets/Marriot.svg";
import Living from "../assets/Living.svg";
import bookMyShow from "../assets/bookMyShow.svg";

export const Process = () => {
  const [isGraphActive, setIsGraphActive] = React.useState(0);
  return (
    <Box maxWidth="1300px" mx="auto" my="100px">
      <Flex alignItems="center" justifyContent={"space-between"}>
        <VStack px="20px" flex={1}>
          <Flex justifyContent={"space-between"} alignItems="center" py="50px">
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
          </Flex>
          <Box className="dashed-line"></Box>
          <Flex w="100%" justifyContent={"space-between"} pt="20px">
            <Image src={Living} />
            <Image src={HomenGarden} />
            <Image src={bookMyShow} />
            <Image src={Marriot} />
          </Flex>
        </VStack>

        <Box className="processes__col mod--2" style={{ opacity: 1 }}>
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
                  <Image
                    id="w__graph-1"
                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303365fe5e0412_graph_part-01.svg"
                    loading="lazy"
                    data-graph="part1"
                    alt=""
                    className="graph__part"
                    onMouseOver={() => setIsGraphActive(1)}
                    onMouseOut={() => setIsGraphActive(0)}
                  />
                  <Image
                    id="w__graph-2"
                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033fe7a5e0413_graph_part-03.svg"
                    loading="lazy"
                    data-graph="part2"
                    alt=""
                    className="graph__part"
                    onMouseOver={() => setIsGraphActive(2)}
                    onMouseOut={() => setIsGraphActive(0)}
                  />
                  <Image
                    id="w__graph-3"
                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303332975e0411_graph_part-04.svg"
                    loading="lazy"
                    data-graph="part3"
                    alt=""
                    className="graph__part"
                    onMouseOver={() => setIsGraphActive(3)}
                    onMouseOut={() => setIsGraphActive(0)}
                  />
                  <Image
                    id="w__graph-4"
                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303304115e0410_graph_part-02.svg"
                    loading="lazy"
                    data-graph="part4"
                    alt=""
                    className="graph__part"
                    onMouseOver={() => setIsGraphActive(4)}
                    onMouseOut={() => setIsGraphActive(0)}
                  />
                  <Image
                    id="w__graph-5"
                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30335e2f5e0414_graph_part-05.svg"
                    loading="lazy"
                    data-graph="part5"
                    alt=""
                    className="graph__part"
                    onMouseOver={() => setIsGraphActive(5)}
                    onMouseOut={() => setIsGraphActive(0)}
                  />
                </Box>
              </Box>
              <Box className="graph__col mod--2">
                <UnorderedList className="graph__list">
                  <ListItem
                    id="graph__list-item-1"
                    className="graph__list-item"
                  >
                    <Box className="graph__list-dot">
                      <Box
                        data-graph="dot4"
                        className={`graph__list-dot-border ${
                          isGraphActive === 4 && "active"
                        }`}
                      ></Box>
                    </Box>
                    <Box className="graph__list-txt font">Engineering</Box>
                    <Box className="graph__list-numb fontR">23%</Box>
                  </ListItem>
                  <ListItem
                    id="graph__list-item-2"
                    className="graph__list-item"
                  >
                    <Box className="graph__list-dot mod--2">
                      <Box
                        data-graph="dot3"
                        className={`graph__list-dot-border mod--2 ${
                          isGraphActive === 3 && "active"
                        }`}
                      ></Box>
                    </Box>
                    <Box className="graph__list-txt font">Finance</Box>
                    <Box className="graph__list-numb fontR">17%</Box>
                  </ListItem>
                  <ListItem
                    id="graph__list-item-3"
                    className="graph__list-item"
                  >
                    <Box className="graph__list-dot mod--3">
                      <Box
                        data-graph="dot2"
                        className={`graph__list-dot-border mod--3 ${
                          isGraphActive === 2 && "active"
                        }`}
                      ></Box>
                    </Box>
                    <Box className="graph__list-txt font">Art</Box>
                    <Box className="graph__list-numb fontR">13%</Box>
                  </ListItem>
                  <ListItem
                    id="graph__list-item-4"
                    className="graph__list-item"
                  >
                    <Box className="graph__list-dot mod--4">
                      <Box
                        data-graph="dot1"
                        className={`graph__list-dot-border mod--4 ${
                          isGraphActive === 1 && "active"
                        }`}
                      ></Box>
                    </Box>
                    <Box className="graph__list-txt font">Social</Box>
                    <Box className="graph__list-numb fontR">12%</Box>
                  </ListItem>
                  <ListItem
                    id="graph__list-item-5"
                    className="graph__list-item"
                  >
                    <Box className="graph__list-dot mod--5">
                      <Box
                        data-graph="dot5"
                        className={`graph__list-dot-border mod--5 ${
                          isGraphActive === 5 && "active"
                        }`}
                      ></Box>
                    </Box>
                    <Box className="graph__list-txt font">Design</Box>
                    <Box className="graph__list-numb fontR">99%</Box>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
          <Box className="processes__bg-wrap mod--1">
            <Image
              src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
              loading="lazy"
              alt=""
              className="processes__bg mod--1"
            />
          </Box>
          <Box className="processes__bg-wrap mod--2">
            <Image
              src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033f48e5e03f4_processes_illustr.svg"
              loading="lazy"
              alt=""
              className="processes__bg mod--2"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
