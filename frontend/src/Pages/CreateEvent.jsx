import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Select,
  Button,
  Grid,
  GridItem,
  Stack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unav from "./Unav";

export default function CreateEvent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    // submit form data to backend API or perform other actions
    console.log(data);
    setIsLoading(false);
    setShowConfirmationModal(false);
    toast.success("Event created successfully!"); // show success message
  };

  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      

      <Box
        mt={8}
        p={4}
        bg="gray.50"
        borderRadius="md"
        boxShadow="none"
        w={{ base: "90%", md: "80%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        
      >
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Create Event
        </Heading>

        <form onSubmit={handleSubmit((data) => setShowConfirmationModal(true))} style={{ width: "100%" }} >
          <Stack spacing={4} w={{ base: "100%", md: "80%" }} transform="translateX(100px)">
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter event title"
                {...register("title", { required: true })}
              />
              <FormErrorMessage>
                {errors.title && "Title is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter event description"
                {...register("description", { required: false })}
              />
              <FormErrorMessage>
                {errors.description && "Description is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                type="date"
                id="date"
                name="date"
                {...register("date", { required: true })}
              />
              <FormErrorMessage>
                {errors.date && "Date is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Input
                type="time"
                id="time"
                name="time"
                {...register("time", { required: true })}
              />
              <FormErrorMessage>
                {errors.time && "Time is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.location}>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                type="text"
                id="location"
                name="location"
                placeholder="Enter event location"
                {...register("location", { required: true })}
              />
              <FormErrorMessage>
                {errors.location && "Location is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.category}>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Select
                id="category"
                name="category"
                {...register("category", { required: true })}
              >
                <option value="music">hiking</option>
                <option value="art">camping</option>
                <option value="other">Other</option>
                
              </Select>
              <FormErrorMessage>
                {errors.category && "Category is required"}
              </FormErrorMessage>
            </FormControl>

            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
              <GridItem>
                <Button
                  w="100%"
                  colorScheme="teal"
                  isLoading={isLoading}
                  type="submit"
                >
                  Create Event
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  w="100%"
                  colorScheme="gray"
                  onClick={() => window.location.reload()}
                >
                  Clear Form
                </Button>
              </GridItem>
            </Grid>
          </Stack>
        </form>
      </Box>

      <ToastContainer />

      <Modal isOpen={showConfirmationModal} onClose={() => setShowConfirmationModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Event Creation</ModalHeader>
          <ModalBody>
            Are you sure you want to create this event?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit(onSubmit)}>
              Create
            </Button>
            <Button colorScheme="gray" onClick={() => setShowConfirmationModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}