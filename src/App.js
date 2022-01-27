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
      <Image
        top={"5%"}
        right={"0"}
        position="absolute"
        src={hero3}
        borderLeftRadius="30px"
      />
      <Image
        top={"5%"}
        left={"0"}
        position="absolute"
        src={hero1}
        borderRightRadius="30px"
      />
    </Box>
  );
}

export default App;
