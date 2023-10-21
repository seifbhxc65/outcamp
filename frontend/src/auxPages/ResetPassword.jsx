import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    useColorModeValue,
    Text
    } from '@chakra-ui/react';
    import {Link} from 'react-router-dom';
    import Unav from '../Pages/Unav';
    
    export default function ResetPassword() {
    return (
    <Box>
    <Unav />
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('#f9f7f1', '#5b5f5d')}
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
    <Heading fontSize={'4xl'} mb={5} color={useColorModeValue('#383838', '#f7f7f7')}>
    Reset Password
    </Heading>
    </Box>
    <Box my={4} textAlign="left">
    <Input placeholder="Email" size="md" mb={4} bg={useColorModeValue('#ffffff', '#f7f7f7')} />
    <Button colorScheme="green" size="md" width="100%" bg={useColorModeValue('#68d391', '#48bb78')} _hover={{ bg: useColorModeValue('#48bb78', '#68d391') }}>
    Reset Password
    </Button>
    <Text mt={4} textAlign="center">
    Remembered your password? <Link to="/login">Login</Link>
    </Text>
    </Box>
    </Box>
    </Flex>
    </Box>
    );
    }