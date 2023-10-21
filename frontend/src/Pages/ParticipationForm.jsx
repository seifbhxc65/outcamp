import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Grid,
  GridItem,
  Stack,
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

export default function ParticipationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    // submit form data to backend API or perform other actions
    console.log(data);
    setIsLoading(false);
    setShowConfirmationModal(false);
    toast.success("You have successfully registered for the event!"); // show success message
  };

  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={4}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        w="100%"
        maxW="500px"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Participate
        </Heading>

        <form onSubmit={handleSubmit((data) => setShowConfirmationModal(true))} style={{ width: "100%" }}>
          <Stack spacing={4} w="100%">
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
              <GridItem>
                <FormControl isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    {...register("firstName", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.firstName && "First Name is required"}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    {...register("lastName", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.lastName && "Last Name is required"}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>
            <FormControl isInvalid={errors.mobileNumber}>
              <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
              <Input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                {...register("mobileNumber", { required: true })}
              />
              <FormErrorMessage>
                {errors.mobileNumber && "Mobile Number is required"}
              </FormErrorMessage>
            </FormControl>
            {/* Add other recommended data inputs here */}
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
              <GridItem>
                <Button
                  w="100%"
                  colorScheme="teal"
                  isLoading={isLoading}
                  type="submit"
                >
                  Participate
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
          <ModalHeader>Confirm Participation</ModalHeader>
          <ModalBody>
            Are you sure you want to participate in this event?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit(onSubmit)}>
              Participate
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
