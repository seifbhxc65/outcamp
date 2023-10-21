import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  UnorderedList,
  ListItem,
  Button,
  IconButton,
  Image,
} from '@chakra-ui/react';

import beach from '../images/beach.jpg';
import river from '../images/river.jpg';
import HomeRando from '../images/HomeRando.jpg';

import { FaStar, FaRegStar, FaTrash, FaEdit } from 'react-icons/fa';

function ManageEvents() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Summer Camping Trip ', image: beach, rating: 3 },
    { id: 2, name: 'Camping', image: river, rating: 5 },
    { id: 3, name: 'Hiking and Nature Photography', image: HomeRando, rating: 5 },
    { id: 4, name: 'Outdoor Yoga Retreat', image: HomeRando, rating: 3 },
  ]);

  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  const handleModifyEvent = (eventId) => {
    // Placeholder implementation, replace with your own logic
    console.log(`Modify event with ID: ${eventId}`);
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const starSize = 8; // Adjust the size as needed

    return (
      <Box display="flex" alignItems="center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} size={starSize} color="gold" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={fullStars + index} size={starSize} color="gray.300" />
        ))}
      </Box>
    );
  };

  return (
    <Box bg="gray.100" py={8}>
      <Box maxW="container.lg" mx="auto" bg="white" borderRadius="xl" boxShadow="md" p={6}>
        <Heading as="h1" size="xl" mb={6}>
          Manage Events
        </Heading>
        <UnorderedList>
          {events.map((event) => (
            <ListItem key={event.id} py={4} borderBottomWidth="1px">
              <HStack justifyContent="space-between" alignItems="center" w="100%">
                <Box display="flex" alignItems="center">
                  <Image src={event.image} alt={event.name} boxSize={12} borderRadius="full" mr={4} />
                  <Box>
                    <Heading as="h2" size="md">
                      {event.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      Event details...
                    </Text>
                  </Box>
                </Box>
                <HStack>
                  {renderRatingStars(event.rating)}
                  <IconButton
                    aria-label="Modify event"
                    icon={<FaEdit />}
                    onClick={() => handleModifyEvent(event.id)}
                    colorScheme="teal"
                    variant="ghost"
                  />
                  <IconButton
                    aria-label="Delete event"
                    icon={<FaTrash />}
                    onClick={() => handleDeleteEvent(event.id)}
                    colorScheme="red"
                    variant="ghost"
                  />
                </HStack>
              </HStack>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default ManageEvents;
