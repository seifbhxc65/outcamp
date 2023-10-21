import React, { useState } from 'react';
import { Box, Heading, Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SignupRole() {
  const [role, setRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Box p="6" bg="gray.100" borderRadius="md" boxShadow="md" width="400px">
        <Heading as="h1" size="xl" mb="4" textAlign="center">
          Choose Your Role
        </Heading>
        <Stack spacing="4">
          <Button
            variant={role === 'organizer' ? 'solid' : 'outline'}
            colorScheme="green"
            onClick={() => handleRoleChange('organizer')}
            width="100%"
          >
            Organizer
          </Button>
          <Button
            variant={role === 'participant' ? 'solid' : 'outline'}
            colorScheme="green"
            onClick={() => handleRoleChange('participant')}
            width="100%"
          >
            Participant
          </Button>
        </Stack>
        {role && (
          <Button
            onClick={handleOpenModal}
            width="100%"
            mt="4"
            colorScheme="green"
          >
            {role === 'organizer' ? 'Organizer Dashboard' : 'Participant Dashboard'}
          </Button>
        )}

        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{role === 'organizer' ? 'Organizer Dashboard' : 'Participant Dashboard'}</ModalHeader>
            <ModalBody>
              {/* Add the content of the modal body here */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3}>
                <Link to={role === 'organizer' ? '/OrganizerDash' : '/ParticipantDash'}>
                  Go to Dashboard
                </Link>
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
