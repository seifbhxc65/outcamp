import { useState } from "react";
import { Flex, Box, Button, Image, Avatar, useColorMode, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from '../images/Logo.png'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Flex justifyContent="space-between" alignItems="center" px={4} py={2}>
      <Box>
        <HStack>
          <Box>
            <Image src={Logo} alt="Logo" w={60} h={48} mr={6} />
          </Box>
        </HStack>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onToggle}
        />

        <Drawer placement="right" onClose={onToggle} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <ChakraLink as={Link} to="/UserDashboard">Home</ChakraLink>
                <ChakraLink as={Link} to="/Login">Login</ChakraLink>
                <ChakraLink as={Link} to="/Signup">Sign up</ChakraLink>
               {/* <ChakraLink as={Link} to="/CreateEvent">Create Event</ChakraLink>
                <ChakraLink as={Link} to="/UserEdit">Profile</ChakraLink>*/}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <HStack>
          <Button onClick={() => window.location.reload()} variant="ghost" mr={8}>
            <Link to="/UserDashboard">
              Home
            </Link>
          </Button>
          <Button onClick={() => window.location.reload()} variant="ghost" mr={8}>
            <Link to="/Login">
              Login
            </Link>
          </Button>
          <Button onClick={() => window.location.reload()} variant="ghost" mr={8}>
            <Link to="/Signup">
              Sign up
            </Link>
          </Button>
       { /* <Button onClick={() => window.location.reload()} variant="ghost" mr={8}>
            <Link to="/CreateEvent">
              Create Event
            </Link>
          </Button>
          <Button onClick={() => window.location.reload()} variant="none" mr={8}>
            <Link to="/UserEdit">
              <Avatar src="https://bit.ly/sage-adebayo" size="md" mr={8} />
            </Link>
          </Button>*/}
          
        </HStack>
      </Box>
    </Flex>
  );
}
