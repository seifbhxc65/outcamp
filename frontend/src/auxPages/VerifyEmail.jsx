import { Box, Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
 
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import Unav from '../Pages/Unav';

export default function VerifyEmail() {
  return (
    <Box>
      <Box>
        <Unav />
      </Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'sm'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={10}
        >
          <Center>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              Verify your Email
            </Heading>
          </Center>
          <Center
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}
          >
            We have sent code to your email
          </Center>
          <Center
            fontSize={{ base: 'sm', sm: 'md' }}
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'gray.400')}
          >
            username@mail.com
          </Center>
          <FormControl>
            <Center>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500',
              }}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
