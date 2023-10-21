import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
/*import bgimg from '../images/bgimg.jpg';*/
import Unav from './Unav';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box /* backgroundImage={bgimg}*/   backgroundSize="cover"
    backgroundPosition="center"
    height="100vh"
    
    
    >
      <Box>
        <Unav />
      </Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack
          spacing={8}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={6}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'lg'}
          boxShadow={'lg'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack mt={6} direction={{ base: 'column', sm: 'row' }} justify={'space-between'} align={'center'}>
              <Checkbox colorScheme="green">Remember me</Checkbox>
              <Link to="/ResetPassword" color={'green.400'}>Forgot password?</Link>
            </Stack>
            <Button mt={8} colorScheme="green" size="md" width="100%">
              Sign in
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
