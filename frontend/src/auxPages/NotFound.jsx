import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Center
      w="full"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="gray.100"
    >
      <Box
        maxW="md"
        mx="auto"
        px="4"
        py="8"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
      >
        <Heading size="2xl" textAlign="center" color="gray.700">
          404 Not Found
        </Heading>
        <Text mt="4" fontSize="lg" color="gray.600" textAlign="center">
          Sorry, the page you're looking for doesn't exist.
        </Text>
        <Box mt="8" display="flex" justifyContent="center">
          <Button as={Link} to="/" colorScheme="teal" size="lg">
            Go back to homepage
          </Button>
        </Box>
      </Box>
    </Center>
  );
}