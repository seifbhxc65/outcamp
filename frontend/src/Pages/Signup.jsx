import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Text,
  
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Unav from './Unav';

export default function Signup() {
  return (
    <Box>
      <Unav />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('#ffffff', '#5b5f5d')}
      >
        <Box
          rounded={'lg'}
          bg={useColorModeValue('#ffffff', '#343a40')}
          boxShadow={'lg'}
          p={8}
          w={['90%', '80%', '70%', '60%']}
          maxW={'lg'}
        >
          <Box textAlign="center">
            <Heading fontSize={'4xl'} mb={5} color={useColorModeValue('#black', '#f7f7f7')}>
              Join our Adventure!
            </Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Input placeholder="First Name" size="md" mb={4} bg={useColorModeValue('#ffffff', '#f7f7f7')} />
            <Input placeholder="Last Name" size="md" mb={4} bg={useColorModeValue('#ffffff', '#f7f7f7')} />
            <Input placeholder="Email" size="md" mb={4} bg={useColorModeValue('#ffffff', '#f7f7f7')} />
            <Input
              placeholder="Password"
              size="md"
              type="password"
              mb={4}
              bg={useColorModeValue('#ffffff', '#f7f7f7')}
            />
            <Button colorScheme="green" size="md" width="100%" bg={useColorModeValue('#68d391', '#48bb78')} _hover={{ bg: useColorModeValue('#48bb78', '#68d391') }}>
             <Link to="/SignupRole">Sign Up</Link> 
            </Button>
            <Text mt={4} textAlign="center">
              Already have an account? <Link mb={4} to="/login">Login</Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}