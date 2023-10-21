import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function EventBox({ event }) {
  const { title, date, image } = event;

  return (
    <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
      <Image src={image} alt="Event Image" borderRadius="md" objectFit="cover" w="100%" h={48} mb={4} />
      <Heading as="h3" size="md" mb={1}>
        {title}
      </Heading>
      <Text fontSize="lg" color="gray.500" mb={2}>
        {date}
      </Text>
      <Button colorScheme="orange" size="md" mr={4} leftIcon={<FaCheck />}>
        Join Now
      </Button>
      <Button colorScheme="green" size="md" leftIcon={<FaArrowRight />}>
        Explore
      </Button>
    </Box>
  );
}