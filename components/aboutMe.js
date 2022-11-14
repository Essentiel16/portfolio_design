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
import Link from 'next/link';
import { playIcon, githubIcon, fileIcon } from "../components/svg";
import styles from "../styles/Home.module.css";

function AboutMe() {
  return (
    <Box
      padding={{ base: "110px 20px", md: "", lg: "110px 200px" }}
      bg="brand.dark"
    >
      {/* section 1 */}
      <Box id="about_section">
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
              Hello! My name is Abigail and I enjoy creating beautiful pages
              on the internet. My interest in web development started back in
              2017 when I create amazing designs with Canva — turns out that brought out my curiosity in lerarning HTML/CSS.
            </Text>

            <Text color="brand.gray" fontSize="20px" mt="12px">
              Fast-forward to today, and I’ve had the privilege of working at a
              devShop, a start-up, and a educational organization. My main focus these days is building
              accessible, inclusive products and digital experiences for a variety of clients.
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
      </Box>

      {/* section 2 */}
      <Box w="800px" margin="150px auto" id="experience_section">
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
              CRC
            </Tab>
            <Tab
              fontSize="16px"
              color="brand.gray"
              _focus={{ boxShadow: "none", color: "brand.green" }}
              fontWeight="400"
              pb="16px"
              py="20px"
            >
              Byteworks
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
                November 2020 - Present
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Manage front-end development of client sites. Use HTML, CSS (TailWind, Chakra, Boostrap, Styled Component), and JavaScript (ES6, NextJS, TypeScript, Vue, ReactJS) to develop UX.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Collaborate with backend developers to consume APIs, listen for and emit Web Socket events, and work with UI/UX designers to interpret and implement designs.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Contribute to sprint planning, product mapping, and feature scoping sessions to help with an accurate estimation of resources and timelines.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                	Performe manual and unit testing to ensure stability across a range of devices and browsers.
                  </Text>
                </Flex>

              </Box>
            </TabPanel>
            <TabPanel paddingTop="0px">
              <Text fontSize="24px" color="brand.white" fontWeight="600">
              Instructional Assistant
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
                July 2019 - June, 2020
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Performed administrative activities and support such as e-attendance, online assessment grading, and maintaining student records.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Maintained sensitivity towards students with additional needs, continually improving their development and confidence.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Cultivated close working relationships with students and provided technical support to teaching staff.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                Tutored students individually and in small groups for learning development and guide them in the programming language of choice.
                  </Text>
                </Flex>

              </Box>
            </TabPanel>
            <TabPanel paddingTop="0px">
              <Text fontSize="24px" color="brand.white" fontWeight="600">
              Application Developer (Internship)
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
                August 2017 - February 2018
              </Text>
              <Box>
                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Created standalone and payment applications for point-of-sales terminals like PAX and integrated them into various hosts like banks, and acquirers with C programming language.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Liaised with relevant parties using appropriate communication channels to develop Web applications for various institutions including banks and government using JavaScript, CSS, and HTML.
                  </Text>
                </Flex>

                <Flex mt="20px">
                  <Box paddingTop="5px">{playIcon}</Box>
                  <Text ml="10px" fontSize="16px" color="brand.gray">
                  Developed Embedded devices and solutions for product platforms and Smart card applications for both contact and contactless technology interfacing it with compatible POS terminals and deploying to different hosts and switches.
                  </Text>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Section 3 */}
      <Box id="work_section">
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
                  src="zhill.png"
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
                  Zhill website
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
                    Zhill Systems meets the business needs of emerging markets and help individuals, teams and organizations undergo successful agile and digital transformation and also sustain business agility.
                  </Text>
                </Box>

                <Flex justifyContent="flex-end" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    TypeScript
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Next JS
                  </Text>
                  {/* <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Atom
                  </Text> */}
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Tailwind css
                  </Text>
                </Flex>
                <Flex justifyContent="flex-end" mt="20px">
                  <Link a href="https://github.com/abigail-dev-build/zhill.git">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>

                  </Link>
                  {/* <Box className={styles.svg}>{hostingIcon}</Box> */}
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
                  NutAvailable
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
                    A web app for placing orders, checking out and getting the delivery date for the orders within an organization.
                  </Text>
                </Box>

                <Flex justifyContent="flex-start" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    TypeScript
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Tailwind css
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    NextJS
                  </Text>
                  {/* <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Hyper
                  </Text> */}
                </Flex>
                <Flex justifyContent="flex-start" mt="20px">
                  <Link a href="https://github.com/abigail-dev-build/miniEcommerce.git">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>
                  </Link>
                  {/* <Box className={styles.svg}>{hostingIcon}</Box> */}
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
                  src="nutsAvailable.png"
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
                  src="lms.png"
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
                  LMS by Enyata
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
                    This web app is a learning management system that caters for the students, tutors and admin having the overall oversight of the entire app.
                  </Text>
                </Box>

                <Flex justifyContent="flex-end" mt="40px">
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    NextJS
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Chakra
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    Redux
                  </Text>
                  <Text fontSize="13px" color="#A8B2D1" mr="10px">
                    React query
                  </Text>
                </Flex>
                {/* <Flex justifyContent="flex-end" mt="20px">
                  <Box className={styles.svg} mr="25px">
                    {githubIcon}
                  </Box>
                  <Box className={styles.svg}>{hostingIcon}</Box>
                </Flex> */}
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
            {/* <Text
              color="brand.green"
              fontSize="14px"
              fontWeight="400"
              textAlign="center"
            >
              View the archive
            </Text> */}
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
                      {/* <div>{hostingIcon}</div> */}
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text
                    mt="32px"
                    fontSize="18px"
                    fontWeight="800"
                    color="brand.white"
                    textAlign="left"
                    className={styles.title}
                  >
                    Mirene
                  </Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">
                    This is a data protection and privacy website that ensures compliance of strict protection rules to be followed while uploading a user details.
                  </Text>

                  <Flex mt="24px">
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Nextjs
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Styled components
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Reactquery
                    </Text>
                  </Flex>
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
                      {/* <div>{hostingIcon}</div> */}
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text
                    mt="32px"
                    fontSize="18px"
                    fontWeight="800"
                    color="brand.white"
                    textAlign="left"
                    className={styles.title}
                  >
                    Food ordering app
                  </Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">
                    Built a custom food ordering app for a geographic area that onboards various vendors within the area and diverse end users.
                  </Text>

                  <Flex mt="24px">
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Nextjs
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Chakra
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Redux
                    </Text>
                  </Flex>
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
                      {/* <div>{hostingIcon}</div> */}
                      <Box ml="20px">{githubIcon}</Box>
                    </Flex>
                  </Flex>
                  <Text
                    mt="32px"
                    fontSize="18px"
                    fontWeight="800"
                    color="brand.white"
                    textAlign="left"
                    className={styles.title}
                  >
                    Wallet
                  </Text>
                  <Text color="brand.white" fontSize="16px" mt="14px">
                    Simple application that enables deposit of e-cash and withdrawal as well as been able to check available balance.
                  </Text>

                  <Flex mt="24px">
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      Algolia
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      WordPress
                    </Text>
                    <Text mr="15px" fontSize="14px" color="brand.gray">
                      PHP
                    </Text>
                  </Flex>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* section 4 */}
      <Box w="800px" margin="150px auto" id="contact_section">
        <Text color="brand.green" fontSize="16px" textAlign="center">
          04. What&apos;s Next?
        </Text>
        <Text
          color="brand.white"
          fontSize="60px"
          fontWeight="700"
          textAlign="center"
        >
          Get In Touch
        </Text>
        <Text
          color="brand.gray"
          textAlign="center"
          fontSize="16px"
          w="550px"
          m="0 auto"
        >
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is
          always open. Whether you have a question, opportunities or
          just want to say hi, I&apos;ll always get back to you!
        </Text>
        <Flex justifyContent="center">
          <a href="mailto:oluwaabigail@gmail.com">
            <Button
              mt="60px"
              border="1px solid #64FFDA"
              bg="transparent"
              h="48px"
              fontWeight="400"
              padding="16px 24px"
              color="brand.green"
              fontSize="16px"
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "rgba(00, 255, 218, 0.1)" }}
            >
              Say Hello
            </Button>
          </a>
        </Flex>
      </Box>
      <a href="https://github.com/Essentiel16/portfolio_design">
        <Text
          fontSize="12px"
          color="brand.white"
          textAlign="center"
          _hover={{ color: "brand.green" }}
          cursor="pointer"
        >
          Built by Abigail Idowu
        </Text>
      </a>
    </Box>
  );
}

export default AboutMe;
