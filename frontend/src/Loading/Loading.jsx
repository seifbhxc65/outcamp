import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Center
      w="full"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.100"
    >
      <Box
        w="200px"
        h="200px"
        borderRadius="full"
        bgGradient="linear(to-r, teal.500,green.500)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
      >
        <Spinner size="xl" color="white" />
      </Box>
      <Text mt="6" fontSize="xl" fontWeight="bold" color="gray.700">
        Loading...
      </Text>
    </Center>
  );
}