import { HStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./index.css";
import Card1 from "../assets/card1.svg";
import Card2 from "../assets/card2.svg";
import Card3 from "../assets/card3.svg";
import { MotionBox } from "./framer";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { GigCard } from "./gigCard";

export const Gig = () => {
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

  const variants = {
    mainBox: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
    secBox: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.4,
        },
      },
    },
  };
  return (
    <MotionBox ref={ref} my="100px" maxW={"1300px"} mx="auto">
      <MotionBox
        initial="hidden"
        animate={controls}
        variants={variants.mainBox}
      >
        <Text
          className="fontR"
          mb="60px"
          fontWeight={"600"}
          fontSize="44px"
          color={"#0a033c"}
          maxW={"550px"}
          textAlign="center"
          lineHeight={"1"}
          mx="auto"
        >
          Work even more efficiently with Gig Share
        </Text>
      </MotionBox>

      <MotionBox initial="hidden" animate={controls} variants={variants.secBox}>
        <HStack spacing="24px">
          <GigCard
            icon={Card1}
            firstText={`Fast switching \n between different tools`}
            secondText="You can download documents in different file formats, import files to
				Evernote"
          />
          <GigCard
            icon={Card2}
            firstText={`	Sending \n large files safely`}
            secondText={`	Application lets users preview PDF documents on a range of devices \n and supports password protection`}
          />
          <GigCard
            icon={Card3}
            firstText={`	Make materials \n available to loved ones`}
            secondText={`	The app has improved support for popular PDF extensions such as Fill and Sign`}
          />
        </HStack>
      </MotionBox>
    </MotionBox>
  );
};
