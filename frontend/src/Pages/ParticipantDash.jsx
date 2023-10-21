import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Avatar,
  VStack,
  Icon,
  Heading,
  Text
} from '@chakra-ui/react';
import { MdEvent, MdPerson, MdExitToApp, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ManageEvents from './ManageEvents';

export default function ParticipantDash() {
  const [showManageEvents, setShowManageEvents] = useState(false);

  const handleMyEventsClick = () => {
    setShowManageEvents(true);
  };

  return (
    <Flex minHeight="100vh" bg="gray.100">
      <Box w="250px" bg="white" p={4} shadow="md">
        <VStack spacing={6} align="stretch">
          <Avatar name="John Doe" src="/avatar.png" size="xl" />
          <Button
            colorScheme="black"
            size="lg"
            variant="outline"
            leftIcon={<Icon as={MdEvent} boxSize={6} />}
            _hover={{ bg: 'green.300' }}
            onClick={handleMyEventsClick}
          >
            My Events
          </Button>
          <Button
            colorScheme="black"
            size="lg"
            variant="outline"
            leftIcon={<Icon as={MdPerson} boxSize={6} />}
            _hover={{ bg: 'green.300' }}
          >
            <Link to="/UserEdit">Profile</Link>
          </Button>
          <Button
            colorScheme="black"
            size="lg"
            variant="outline"
            leftIcon={<Icon as={MdSettings} boxSize={6} />}
            _hover={{ bg: 'green.300' }}
          >
            Settings
          </Button>
          <Button
            colorScheme="red"
            size="lg"
            variant="solid"
            leftIcon={<Icon as={MdExitToApp} boxSize={6} />}
          >
            <Link to="/">Logout</Link>
          </Button>
        </VStack>
      </Box>
      <Box flex="1" p={8}>
        <Box bg="white" p={6} borderRadius="lg" shadow="lg">
          <Heading as="h1" size="xl" mb={4}>
            Welcome to Your Dashboard
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Here you can view and manage your events.
          </Text>
          {showManageEvents && <ManageEvents />}
          {/* Add your content here */}
        </Box>
      </Box>
    </Flex>
  );
}
