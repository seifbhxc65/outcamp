import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  IconButton,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  Image,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Organizers() {
  const [organizers, setOrganizers] = useState([
    { id: 1, name: 'fedi', email: 'fedi@gmail.com', avatar: 'https://i.pravatar.cc/40', rating: 1 },
    { id: 2, name: 'aziz', email: 'aziz@gmail.com', avatar: 'https://i.pravatar.cc/40', rating: 5 },
    { id: 3, name: 'seif', email: 'seif@gmail.com', avatar: 'https://i.pravatar.cc/40', rating: 5 },
    { id: 4, name: 'houssein', email: 'houssein@gmail.com', avatar: 'https://i.pravatar.cc/40', rating: 4 },
    { id: 5, name: 'iskander', email: 'iskander@gmail.com', avatar: 'https://i.pravatar.cc/40', rating:2 },
    { id: 6, name: 'bechahed', email: 'bechahed@gmail.com', avatar: 'https://i.pravatar.cc/40', rating: 4},
  ]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const toast = useToast();

  const handleRemoveOrganizer = (organizerId) => {
    setOrganizers(organizers.filter(organizer => organizer.id !== organizerId));
    setSelectedOrganizer(null);
    setIsDeleteAlertOpen(false);
    toast({
      title: 'Organizer removed',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDeleteClick = (organizer) => {
    setSelectedOrganizer(organizer);
    setIsDeleteAlertOpen(true);
  };

  const handleDeleteAlertClose = () => {
    setSelectedOrganizer(null);
    setIsDeleteAlertOpen(false);
  };

  const filteredOrganizers = organizers.filter(organizer => organizer.name.toLowerCase().includes(search.toLowerCase())).filter(organizer => filter === 'all' ? true : organizer.rating >= parseInt(filter));

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const starSize = 10;

    return (
      <Box display="flex" alignItems="center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} size={starSize} color="green" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStar key={fullStars + index} size={starSize} color="green" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={fullStars + halfStars + index} size={starSize} color="gray.300" />
        ))}
      </Box>
    );
  };

  return (
    <Box bg="gray.100" py={8}>
      <Box maxW="container.lg" mx="auto" bg="white" borderRadius="xl" boxShadow="md" p={6}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
          <Heading as="h1" size="xl">Users</Heading>
          <Box display="flex" alignItems="center">
            <InputGroup w="auto" mr={4}>
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
              <Input type="text" value={search} onChange={handleSearchChange} placeholder="Search by name" />
            </InputGroup>
            <Select value={filter} onChange={handleFilterChange} w="auto">
              <option value="all">All</option>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </Select>
          </Box>
        </Box>
        <UnorderedList>
          {filteredOrganizers.map(organizer => (
            <ListItem key={organizer.id} py={4} borderBottomWidth="1px">
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Image src={organizer.avatar} alt={organizer.name} boxSize={12} borderRadius="full" mr={4} />
                  <Box>
                    <Heading as="h2" size="md">{organizer.name}</Heading>
                    <Text fontSize="sm" color="gray.500">{organizer.email}</Text>
                    <Text fontSize="xs" color="gray.500">{renderRatingStars(organizer.rating)}</Text>
                  </Box>
                </Box>
                <IconButton
                  aria-label="Remove organizer"
                  icon={<DeleteIcon />}
                  onClick={() => handleDeleteClick(organizer)}
                  colorScheme="red"
                  variant="ghost"
                />
              </Box>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <AlertDialog isOpen={isDeleteAlertOpen} onClose={handleDeleteAlertClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Delete Organizer</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete {selectedOrganizer && selectedOrganizer.name}?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleDeleteAlertClose}>Cancel</Button>
            <Button colorScheme="green" ml={3} onClick={() => handleRemoveOrganizer(selectedOrganizer.id)} autoFocus>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
}

export default Organizers;