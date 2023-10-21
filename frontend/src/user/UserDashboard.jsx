import { Box, Flex, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import Unav from '../Pages/Unav';
import HomeRando from '../images/HomeRando.jpg';
import beach from '../images/beach.jpg';
import river from '../images/river.jpg';
import {Link} from "react-router-dom"
const events = [
  {
    title: "Summer Camping Trip",
    date: "June 12-14, 2023",
    image: HomeRando,
  },
  {
    title: "Hiking and Nature Photography",
    date: "July 22, 2023",
    image: river,
  },
  {
    title: "Outdoor Yoga Retreat",
    date: "August 5-7, 2023",
    image: beach,
  },
  {
    title: "Kayaking Adventure",
    date: "September 3-5, 2023",
    image: river,
  },
  {
    title: "Fall Foliage Hike",
    date: "October 15, 2023",
    image: beach,
  },
  {
    title: "Winter Camping Trip",
    date: "December 10-12, 2023",
    image: river,
  },
  {
    title: "Snowshoeing Excursion",
    date: "January 14-15, 2023",
    image: river,
  },
  {
    title: "Ice Fishing Tournament",
    date: "February 18-19, 2023",
    image: river,
  },
  {
    title: "Spring Wildflowers Walk",
    date: "March 23, 2023",
    image: beach,
  },
  {
    title: "Birdwatching Expedition",
    date: "April 27-28, 2024",
    image: river,
  },
  {
    title: "Mountain Biking Adventure",
    date: "May 18-20, 2024",
    image: beach,
  },
];

export default function CampingWebsite() {
  return (
    <Box>
      <Box><Unav /></Box>
      <Box p={6}>
        <Heading as="h2" size="xl" mb={6}>
          Upcoming Events
        </Heading>
        <Stack spacing={6}>
          {[0, 4, 8].map((index) => (
            <Flex key={index} alignItems="center" bg="white" borderRadius="md" boxShadow="md" p={6} mb={6} justifyContent="space-between">
              <Box mr={6}>
                <Image src={events[index].image} alt="Event Image" borderRadius="md" objectFit="cover" w={64} h={48} mb={4} />
                <Heading as="h3" size="md" mb={1}>
                  {events[index].title}
                </Heading>
                <Text fontSize="lg" color="gray.500" mb={2}>
                  {events[index].date}
                </Text>
                <Button colorScheme="green" size="md" mr={4}>
                  <Link to="/ParticipationForm">
                  Participate
                  </Link>
                </Button>
                <Button colorScheme="green" size="md">
                  <Link to="/LearnMore">
                  Learn More
                  </Link>
                </Button>
              </Box>
              {events[index+1] && (
                <Box mr={6}>
                  <Image src={events[index+1].image} alt="Event Image" borderRadius="md" objectFit="cover" w={64} h={48} mb={4} />
                  <Heading as="h3" size="md" mb={1}>
                    {events[index+1].title}
                  </Heading>
                  <Text fontSize="lg" color="gray.500" mb={2}>
                    {events[index+1].date}
                  </Text>
                  <Button colorScheme="green" size="md" mr={4}>
                    Participate
                  </Button>
                  <Button colorScheme="green" size="md">
                    Learn More
                  </Button>
                </Box>
              )}
              {events[index+2] && (
                <Box mr={6}>
                  <Image src={events[index+2].image} alt="Event Image" borderRadius="md" objectFit="cover" w={64} h={48} mb={4} />
                  <Heading as="h3" size="md" mb={1}>
                    {events[index+2].title}
                  </Heading>
                  <Text fontSize="lg" color="gray.500" mb={2}>
                    {events[index+2].date}
                  </Text>
                  <Button colorScheme="green" size="md" mr={4}>
                    Participate
                  </Button>
                  <Button colorScheme="green" size="md">
                    Learn More
                  </Button>
                </Box>
              )}
              {events[index+3] && (
                <Box>
                  <Image src={events[index+3].image} alt="Event Image" borderRadius="md" objectFit="cover" w={64} h={48} mb={4} />
                  <Heading as="h3" size="md" mb={1}>
                    {events[index+3].title}
                  </Heading>
                  <Text fontSize="lg" color="gray.500" mb={2}>
                    {events[index+3].date}
                  </Text>
                  <Button colorScheme="green" size="md" mr={4}>
                    Participate
                  </Button>
                  <Button colorScheme="green" size="md">
                    Learn More
                  </Button>
                </Box>
              )}
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}