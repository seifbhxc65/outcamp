import { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack, Input } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom"
import HomeRando from '../images/HomeRando.jpg';
export default function LearnMorePage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Perform comment submission logic here
    console.log("Submitted comment:", comment);
    setComment("");
  };

  return (
    <Box p={6}>
      <Heading as="h2" size="xl" mb={6}>
        Summer Camping Trip
      </Heading>
      <Box mb={6}>
        <Image src={HomeRando} alt="Event Image" borderRadius="md" objectFit="cover" w="100%" h={48} />
      </Box>
      <Text fontSize="lg" color="gray.500" mb={4}>
        June 12-14, 2023
      </Text>
      <Text mb={6}>
        Description of the summer camping trip event.
      </Text>
      <Stack direction="row" spacing={4} mb={6}>
        <Text>Rate this event:</Text>
        <Stack direction="row" spacing={1}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Button
              key={value}
              size="sm"
              colorScheme={value <= rating ? "green" : "gray"}
              onClick={() => handleRatingChange(value)}
            >
              <StarIcon boxSize={4} />
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4} mb={6}>
        <Input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCommentSubmit();
            }
          }}
        />
        <Button colorScheme="green" size="md" onClick={handleCommentSubmit}>
          Submit
        </Button>
      </Stack>
      <Button colorScheme="green" size="md">
        <Link to="/ParticipationForm">Participate</Link>
      </Button>
    </Box>
  );
}
