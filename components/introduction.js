import React from 'react';
import { Box, Text, chakra, Button, GridItem , Grid} from '@chakra-ui/react';
import { useRouter } from 'next/router';

function Introduction() {
  const router = useRouter();
  return (
   <Box bg="brand.dark" padding={{base: "0 20px", md: "", lg: "0 150px 64px 150px" }}>
    <Box pt={{ base: "40px", md: "65px", lg: "80px" }}>
      <Text color="brand.green" fontWeight="400" fontSize="18px">Hi, I am</Text>
      <Text color="brand.white" fontSize={{ base: '40px', md: '40px', lg: '80px' }} mt="16px" fontWeight='700'>Abigail</Text>
      <Text color="brand.gray" fontSize={{ base: '40px', md: '40px', lg: '80px' }} fontWeight='700'>I build things for the web.</Text>
      <Text color="brand.gray" w={{ base: "", md: "", lg: "560px" }} fontSize="18px" mt="16px" fontWeight="400">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <chakra.span color="brand.green" cursor="pointer" _hover={{ textDecoration: 'underline' }} onClick={() => router.push('https://enyata.com/')}>Enyata</chakra.span></Text>

      <Button mt="60px" border="1px solid #64FFDA" bg="transparent" h="48px" fontWeight="400" padding="16px 24px" color="brand.green" fontSize="16px" _focus={{ bg: 'transparent' }} _hover={{ bg: 'rgba(00, 255, 218, 0.1)'}}>Hello</Button>
    </Box>
   </Box>
  )
}

export default Introduction;
