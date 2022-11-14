import Navigation from "../components/navigation/navigation";
import { Box } from "@chakra-ui/react";
import Introduction from "../components/introduction";
import AboutMe from "../components/aboutMe";
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import {
  InstagramIcon,
  githubIcon,
  twitterIcon,
  linkedInIcon,
} from "../components/svg";

const Home = () => {
  const router = useRouter();
  return (
    <Box>
      <Navigation />
      <Box
        ariaOrientation="left"
        width="40px"
        display={{ base: "none", lg: "block" }}
        position="fixed"
        bottom="0px"
        left="40px"
        right="auto"
        zIndex="10"
      >
       <a href="https://github.com/abigail-dev-build"><Box pb="30px" className={styles.svg}>{githubIcon}</Box></a>
        <a href="https://www.instagram.com/mz_herbie/"><Box pb="30px" className={styles.svg} >{InstagramIcon}</Box></a>
        <a href="https://twitter.com/folarin_abigail"><Box pb="30px" className={styles.svg}>{twitterIcon}</Box></a>
        <a href="https://www.linkedin.com/in/abigail-idowu-515995168/"><Box pb="30px" className={styles.svg} >{linkedInIcon}</Box></a>
        <Box h="100px" w="1px" border="1px solid #8893AF" ml="8px" />
      </Box>

      <Box
        orientation="right"
        width="40px"
        position="fixed"
        bottom="0px"
        left="auto"
        right="20px"
        zIndex="10"
      >
        <Box
          className={styles.sideEmail}
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          mb="100px"
          mr="40px"
        >
          <a
            href="mailto:oluwaabigail@gmail.com"
            style={{ color: "#8893AF" }}
          >
            oluwaabigail@gmail.com
          </a>
        </Box>
        <Box h="100px" w="1px" border="1px solid #8893AF" mr="8px" />
      </Box>
      <Introduction />
      <AboutMe />
    </Box>
  );
};

export default Home;
