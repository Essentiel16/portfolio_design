import React from "react";
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  chakra,
  Button,
} from "@chakra-ui/react";
import { playIcon, githubIcon, hostingIcon, fileIcon } from "../components/svg";
import styles from "../styles/Home.module.css";

function AboutMe() {
  return (
    <Box
      padding={{ base: "110px 20px", md: "", lg: "110px 200px" }}
      bg="brand.dark"
    >
      {/* section 1 */}
      <Flex cursor="pointer">
        <Text
          color="brand.green"
          fontSize={{ base: "20px", md: "", lg: "32px" }}
          fontWeight="500"
        >
          01.
        </Text>
        <Text
          ml="10px"
          color="brand.white"
          fontSize={{ base: "20px", md: "", lg: "32px" }}
          fontWeight="700"
        >
          About Me
        </Text>
        <Box
          borderBottom="1px solid #8893AF"
          w={{ base: "180px", md: "200px", lg: "300px" }}
          h="1px"
          mt="25px"
          ml="20px"
        />
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={7} mt="35px">
          <Text color="brand.gray" fontSize="20px">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </Text>

          <Text color="brand.gray" fontSize="20px" mt="12px">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </Text>

          <Text color="brand.gray" fontSize="20px" mt="12px">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </Text>

          <Text color="brand.gray" fontSize="20px" mt="12px">
            Here are a few technologies I’ve been working with recently:
          </Text>

          <Box w="300px" mt="12px">
            <Flex d="flex" justifyContent="space-between">
              <Flex>
                <Box paddingTop="5px">{playIcon}</Box>
                <Text ml="10px" fontSize="14px" color="brand.gray">
                  JavaScript (ES6+)
                </Text>
              </Flex>
              <Flex>
                <Box paddingTop="5px">{playIcon}</Box>
                <Text ml="10px" fontSize="14px" color="brand.gray">
                  TypeScript
                </Text>
              </Flex>
            </Flex>

            <Flex d="flex" mt="8px" justifyContent="space-between">
              <Flex>
                <Box paddingTop="5px">{playIcon}</Box>
                <Text ml="10px" fontSize="14px" color="brand.gray">
                  React
                </Text>
              </Flex>
              <Flex marginRight="26px">
                <Box paddingTop="5px">{playIcon}</Box>
                <Text ml="10px" fontSize="14px" color="brand.gray">
                  Nextjs
                </Text>
              </Flex>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          colSpan={5}
          mt="35px"
          paddingLeft="50px"
          zIndex="50"
          pos="relative"
        >
          <Box
            h="330px"
            w="300px"
            zIndex="40"
            borderRadius="4px"
            transition="opacity 500ms linear 0s"
            backgroundColor="rgb(232, 232, 232)"
            inset="0px"
            _hover={{
              h: "360px",
              w: "360px",
            }}
            className={styles.imgWrapper}
          >
            <Image
              src="portfolio_image-removebg-preview 1.jpeg"
              alt=""
              h="100%"
              w="100%"
              objectFit="cover"
              className={styles.img}
            />
          </Box>
          <Box
            border="2px solid #64FFDA"
            h="330px"
            w="300px"
            pos="absolute"
            bottom="28%"
            left="16%"
            borderRadius="4px"
            zIndex="-1"
          />
        </GridItem>
      </Grid>

      {/* section 2 */}
      <Box w="800px" margin="150px auto">
        <Flex cursor="pointer">
          <Text
            color="brand.green"
            fontSize={{ base: "20px", md: "", lg: "32px" }}
            fontWeight="500"
          >
            02.
          </Text>
          <Text
            ml="10px"
            color="brand.white"
            fontSize={{ base: "20px", md: "", lg: "32px" }}
            fontWeight="700"
          >
            Where I&apos;ve worked
          </Text>
          <Box
            borderBottom="1px solid #8893AF"
            w={{ base: "180px", md: "200px", lg: "300px" }}
            h="1px"
            mt="25px"
            ml="20px"
          />
        </Flex>

        <Tabs orientation="vertical" mt="50px">
          <TabList>
            <Tab
              fontSize="16px"
              color="brand.gray"
              _focus={{ boxShadow: "none", color: "brand.green" }}
              fontWeight="400"
              pb="16px"
              py="20px"
            >
              Enyata
            </Tab>
            <Tab
              fontSize="16px"
              color="brand.gray"
              _focus={{ boxShadow: "none", color: "brand.green" }}
              fontWeight="400"
              pb="16px"
              py="20px"
            >
              Two
            </Tab>
            <Tab
              fontSize="16px"
              color="brand.gray"
              _focus={{ boxShadow: "none", color: "brand.green" }}
              fontWeight="400"
              pb="16px"
              py="20px"
            >
              Three
            </Tab>
          </TabList>

          <TabPanels maxW="700px">
            <TabPanel paddingTop="0px">
              <Text fontSize="24px" color="brand.white" fontWeight="600">
                Engineer <chakra.span color="brand.green">@ Enyata</chakra.span>
              </Text>
              <Text
                fontSize="16px"
                color="brand.gray"
                fontWeight="400"
                mt="4px"
              >
                April 2021 - Present
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </Text>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel paddingTop="0px">
              <Text fontSize="24px" color="brand.white" fontWeight="600">
                Social Media Strategist{" "}
                <chakra.span color="brand.green">
                  @ Professor Iya Abubakar Community Resource Center
                </chakra.span>
              </Text>
              <Text
                fontSize="16px"
                color="brand.gray"
                fontWeight="400"
                mt="4px"
              >
                August 2020 - June, 2021
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </Text>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel paddingTop="0px">
              <Text fontSize="24px" color="brand.white" fontWeight="600">
                Intern{" "}
                <chakra.span color="brand.green">
                  @ Byteswork Embedded Systems Limited
                </chakra.span>
              </Text>
              <Text
                fontSize="16px"
                color="brand.gray"
                fontWeight="400"
                mt="4px"
              >
                April 2017 - 2018
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
                    Prismic, and Netlify
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </Text>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Section 3 */}
      <Box>
        <Flex cursor="pointer">
          <Text
            color="brand.green"
            fontSize={{ base: "20px", md: "", lg: "32px" }}
            fontWeight="500"
          >
            03.
          </Text>
          <Text
            ml="10px"
            color="brand.white"
            fontSize={{ base: "20px", md: "", lg: "32px" }}
            fontWeight="700"
          >
            Some things I&apos; built
          </Text>
          <Box
            borderBottom="1px solid #8893AF"
            w={{ base: "180px", md: "200px", lg: "300px" }}
            h="1px"
            mt="25px"
            ml="20px"
          />
        </Flex>
        {/* first featured project */}
        <Box mt="40px">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={7}>
              <Box
                w="579px"
                h="362px"
                bg="brand.white"
                borderRadius="4px"
                zIndex="1"
                pos="relative"
              >
                <Image
                  src="img_rmv.png"
                  alt=""
                  h="100%"
                  w="100%"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={5}>
              <Box pos="relative" zIndex="2" right="20%">
                <Text color="brand.green" fontSize="13px" textAlign="right">
                  Featured Project
                </Text>
                <Text
                  color="brand.white"
                  fontSize="28px"
                  textAlign="right"
                  fontWeight="600"
                  mb="16px"
                >
                  Project Name
                </Text>
                <Box
                  w="495px"
                  minH="122px"
                  bg="#112340"
                  borderRadius="4px"
                  boxShadow="0 10px 30px -15px navyShadow"
                  padding="25px"
                >
                  <Text color="brand.gray" textAlign="right" fontSize="16px">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace,
                    Package Control, Atom Package Manager, and npm.
                  </Text>
                </Box>

                <Flex justifyContent="flex-end" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    VS Code
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Sublime Text
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Atom
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Hyper
                  </Text>
                </Flex>
                <Flex justifyContent="flex-end" mt="20px">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>
                  <Box className={styles.svg}>{hostingIcon}</Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* second featured project */}

        <Box mt="100px">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={5}>
              <Box pos="relative" zIndex="2">
                <Text color="brand.green" fontSize="13px" textAlign="left">
                  Featured Project
                </Text>
                <Text
                  color="brand.white"
                  fontSize="28px"
                  textAlign="left"
                  fontWeight="600"
                  mb="16px"
                >
                  Project Name
                </Text>
                <Box
                  w="495px"
                  minH="122px"
                  bg="#112340"
                  borderRadius="4px"
                  boxShadow="0 10px 30px -15px navyShadow"
                  padding="25px"
                >
                  <Text color="brand.gray" textAlign="left" fontSize="16px">
                    A web app for visualizing personalized Spotify data. View
                    your top artists, top tracks, recently played tracks, and
                    detailed audio information about each track. Create and save
                    new playlists of recommended tracks based on your existing
                    playlists and more.
                  </Text>
                </Box>

                <Flex justifyContent="flex-start" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    VS Code
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Sublime Text
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Atom
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Hyper
                  </Text>
                </Flex>
                <Flex justifyContent="flex-start" mt="20px">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>
                  <Box className={styles.svg}>{hostingIcon}</Box>
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={7}>
              {/* gridColumn="1 / 8" */}
              <Box
                w="579"
                h="362"
                bg="brand.white"
                borderRadius="4px"
                zIndex="1"
                pos="relative"
                // gridarea="1 / 6 / -1 / -1"
              >
                <Image
                  src="img_rmv.png"
                  alt=""
                  h="100%"
                  w="100%"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* third featured project */}
        <Box mt="130px">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={7}>
              <Box
                w="579px"
                h="362px"
                bg="brand.white"
                borderRadius="4px"
                zIndex="1"
                pos="relative"
              >
                <Image
                  src="img_rmv.png"
                  alt=""
                  h="100%"
                  w="100%"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={5}>
              <Box pos="relative" bottom="60px" right="20%" zIndex="2">
                <Text color="brand.green" fontSize="13px" textAlign="right">
                  Featured Project
                </Text>
                <Text
                  color="brand.white"
                  fontSize="28px"
                  textAlign="right"
                  fontWeight="600"
                  mb="16px"
                >
                  Project Name
                </Text>
                <Box
                  w="495px"
                  minH="122px"
                  bg="#112340"
                  borderRadius="4px"
                  boxShadow="0 10px 30px -15px navyShadow"
                  padding="25px"
                >
                  <Text color="brand.gray" textAlign="right" fontSize="16px">
                    Having struggled with understanding how the Spotify OAuth
                    flow works, I made the course I wish I could have had.
                    Unlike tutorials that only cover a few concepts and leave
                    you with half-baked GitHub repositories, this course covers
                    everything from explaining the principles of REST APIs to
                    implementing Spotify&apos;s OAuth flow and fetching API data
                    in a React app. By the end of the course, you’ll have an app
                    deployed to the internet you can add to your portfolio.
                  </Text>
                </Box>

                <Flex justifyContent="flex-end" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    VS Code
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Sublime Text
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Atom
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Hyper
                  </Text>
                </Flex>
                <Flex justifyContent="flex-end" mt="20px">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>
                  <Box className={styles.svg}>{hostingIcon}</Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box mt="200px">
          <Box>
            <Text
              color="brand.white"
              fontSize="32px"
              fontWeight="700"
              textAlign="center"
            >
              Other Noteworthy Projects
            </Text>
            <Text
              color="brand.green"
              fontSize="14px"
              fontWeight="400"
              textAlign="center"
            >
              View the archive
            </Text>
          </Box>
          <Box mt="40px">
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
              <GridItem colSpan={4}>
                <Box
                  h="304px"
                  w="323px"
                  bg="brand.lightNavy"
                  padding="32px 28px"
                  className={styles.projectCard}
                >
                  <Flex justifyContent="space-between">
                    <Box>{fileIcon}</Box>
                    <Flex d="flex" justifyContent="space-between">
                      <div>{hostingIcon}</div>
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text mt="32px" fontSize="18px" fontWeight="800" color="brand.white" textAlign="left" className={styles.title}>Integrating Algolia Search with WordPress Multisite</Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">Building a custom multisite compactible Wordpress plugin to build global search with Algolia</Text>

                  <Flex mt="24px"><Text mr="15px" fontSize="14px" color="brand.gray">Algolia</Text><Text mr="15px" fontSize="14px" color="brand.gray">WordPress</Text><Text mr="15px" fontSize="14px" color="brand.gray">PHP</Text></Flex>
                </Box>
              </GridItem>
              <GridItem colSpan={4}>
                 <Box
                  h="304px"
                  w="323px"
                  bg="brand.lightNavy"
                  padding="32px 28px"
                  className={styles.projectCard}
                >
                  <Flex justifyContent="space-between">
                    <Box>{fileIcon}</Box>
                    <Flex d="flex" justifyContent="space-between">
                      <div>{hostingIcon}</div>
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text mt="32px" fontSize="18px" fontWeight="800" color="brand.white" textAlign="left" className={styles.title}>Integrating Algolia Search with WordPress Multisite</Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">Building a custom multisite compactible Wordpress plugin to build global search with Algolia</Text>

                  <Flex mt="24px"><Text mr="15px" fontSize="14px" color="brand.gray">Algolia</Text><Text mr="15px" fontSize="14px" color="brand.gray">WordPress</Text><Text mr="15px" fontSize="14px" color="brand.gray">PHP</Text></Flex>
                </Box>
              </GridItem>
              <GridItem colSpan={4}>
                 <Box
                  h="304px"
                  w="323px"
                  bg="brand.lightNavy"
                  padding="32px 28px"
                  className={styles.projectCard}
                >
                  <Flex justifyContent="space-between">
                    <Box>{fileIcon}</Box>
                    <Flex d="flex" justifyContent="space-between">
                      <div>{hostingIcon}</div>
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text mt="32px" fontSize="18px" fontWeight="800" color="brand.white" textAlign="left" className={styles.title}>Integrating Algolia Search with WordPress Multisite</Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">Building a custom multisite compactible Wordpress plugin to build global search with Algolia</Text>

                  <Flex mt="24px"><Text mr="15px" fontSize="14px" color="brand.gray">Algolia</Text><Text mr="15px" fontSize="14px" color="brand.gray">WordPress</Text><Text mr="15px" fontSize="14px" color="brand.gray">PHP</Text></Flex>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* section 4 */}
      <Box w="800px" margin="150px auto">
        <Text color="brand.green" fontSize="16px" textAlign="center">04. What&apos;s Next?</Text>
        <Text color="brand.white" fontSize="60px" fontWeight="700" textAlign="center">Get In Touch</Text>
        <Text color="brand.gray" textAlign="center" fontSize="16px" w="550px" m="0 auto">Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</Text>
<Flex justifyContent="center">
        <a href="mailto:oluwaabigail@gmail.com"><Button mt="60px" border="1px solid #64FFDA" bg="transparent" h="48px" fontWeight="400" padding="16px 24px" color="brand.green" fontSize="16px" _focus={{ bg: 'transparent' }} _hover={{ bg: 'rgba(00, 255, 218, 0.1)'}}>Say Hello</Button></a>

</Flex>
      </Box>

      {/* footer */}
      <Text fontSize="12px" color="brand.white" textAlign="center" _hover={{ color: 'brand.green' }} cursor="pointer">Built by Abigail Idowu</Text>
      {/* put the github link */}
    </Box>
  );
}

export default AboutMe;
