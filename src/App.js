import "./App.css";
import { Box, Image } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Process } from "./components/process";
import { Gig } from "./components/gig";
import { Share } from "./components/share";
import { Footer } from "./components/footer";
import Footer3 from "./assets/footer3.svg";
import hero3 from "./assets/hero3.svg";
import hero1 from "./assets/hero1.svg";
import { MotionBox } from "./components/framer";

function App() {
	return (
		<Box bg="#f2f2f2" minH="100vh" overflowX="hidden" p="20px">
			<Header />
			<Process />
			<Gig />
			<Share />
			<Footer />
			<Image
				bottom={"10%"}
				right={"0"}
				position="absolute"
				src={Footer3}
				borderLeftRadius="30px"
			/>
			<MotionBox
				layout="position"
				top={"5%"}
				width="150px"
				height="150px"
				position="absolute"
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						opacity: "1",
						left: "calc(100vw - 150px)",
					},
					hidden: {
						opacity: "0",
						left: "102%",
					},
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					default: { duration: 0.9 },
					delay: 0.1,
				}}
			>
				<Image src={hero3} borderLeftRadius="30px" />
			</MotionBox>
			<MotionBox
				layout
				top={"5%"}
				left={"0"}
				position="absolute"
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						opacity: "1",
						left: "0",
					},
					hidden: {
						opacity: "0",
						left: "-50px",
					},
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					default: { duration: 0.9 },
					delay: 0.1,
				}}
			>
				<Image src={hero1} borderRightRadius="30px" />
			</MotionBox>
		</Box>
	);
}

export default App;
