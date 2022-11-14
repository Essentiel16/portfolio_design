import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../svg';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import { NavLink } from 'react-bootstrap';

function Navigation() {
  return (
    <Box h="100px" paddingY="20px" bg="brand.dark">
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about_section">
            <Flex padding="10px" cursor="pointer">
             <Text color="brand.green">01.</Text>
             <Text color="brand.white" ml="5px">About</Text>
           </Flex>
            </Nav.Link>
            <NavLink href="#experience_section">
            <Flex padding="10px" cursor="pointer">
           <Text color="brand.green">02.</Text>
             <Text ml="5px" color="brand.white">Experience</Text>
           </Flex>
            </NavLink>
            <NavLink href="#work_section">
            <Flex padding="10px" cursor="pointer">
           <Text color="brand.green">03.</Text>
             <Text ml="5px" color="brand.white">Work</Text>
           </Flex>
            </NavLink>
            <NavLink href="#contact_section">
            <Flex padding="10px" cursor="pointer">
           <Text color="brand.green">04.</Text>
             <Text ml="5px" color="brand.white">Contact</Text>
           </Flex>
            </NavLink>
            <Nav.Link>
            <Box ml="15px" cursor="pointer">
            <Button color="brand.green" border="1px solid #64FFDA" fontWeight="500" fontSize="14px" padding="12px 16px" borderRadius="4px"  h="40px" _focus={{ boxShadow: 'none' }} _hover={{ bg: 'rgba(00, 255, 218, 0.1)'}} _active={{ bg: 'none'}} bg="transparent">Resume</Button>
          </Box>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Box>
  );
}

export default Navigation;
