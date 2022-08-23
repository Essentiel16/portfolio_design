import React from 'react';
import Head from 'next/head';
import { Box, Text, chakra, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Typewriter from "typewriter-effect";

function Introduction() {
  const router = useRouter();
  return (
   <Box bg="brand.dark" padding={{base: "0 20px", md: "", lg: "0 150px 64px 150px" }}>
      <Head>
    <title>Abigail Idowu</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" type="image/svg" href="logo.svg" />
  </Head>
    <Box pt={{ base: "40px", md: "65px", lg: "80px" }}>
      <Text color="brand.green" fontWeight="400" fontSize="18px">Hi, I am</Text>
      <Text color="brand.white" fontSize={{ base: '40px', md: '40px', lg: '80px' }} mt="16px" fontWeight='700'>Abigail</Text>
      <Text color="brand.gray" fontSize={{ base: '40px', md: '40px', lg: '80px' }} fontWeight='700'>
      {<Typewriter
          options={{
            strings: [
              "I build things for the web.",
              "I write well designed, efficient code.",
              "I create website interfaces by using standard HTML/CSS practices",
              "I integrate data from various back-end services and databases",
            ],
            autoStart: true,
            loop: true,
          }}
        />}
      </Text>
      <Text color="brand.gray" w={{ base: "", md: "", lg: "560px" }} fontSize="18px" mt="16px" fontWeight="400">I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <chakra.span color="brand.green" cursor="pointer" _hover={{ textDecoration: 'underline' }} onClick={() => router.push('https://enyata.com/')}>Enyata</chakra.span></Text>
  

      <Button mt="60px" border="1px solid #64FFDA" bg="transparent" h="48px" fontWeight="400" padding="16px 24px" color="brand.green" fontSize="16px" _focus={{ bg: 'transparent' }} _hover={{ bg: 'rgba(00, 255, 218, 0.1)'}}>Hello</Button>
    </Box>
   </Box>
  )
}

export default Introduction;
