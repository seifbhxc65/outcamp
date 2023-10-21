import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  Text,
  Stack,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { RiDashboardLine, RiCalendarLine, RiUserLine, RiFileListLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Organizers from './Organizers';
import ManageEvents from './Events'; // Import the ManageEvents component

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' }
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      date: '2023-05-01',
      total: 100
    },
    {
      id: 2,
      customer: 'Jane Smith',
      date: '2023-05-02',
      total: 200
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      date: '2023-05-03',
      total: 300
    }
  ]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Flex
        bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
        minHeight="100vh"
        color={colorMode === 'light' ? 'gray.800' : 'white'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          w={{ base: '100%', md: '20%' }}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          borderRight={{ md: '1px solid' }}
          borderColor={{ md: colorMode === 'light' ? 'gray.200' : 'gray.700' }}
          p={4}
        >
          <IconButton
            display={{ base: 'inline-flex', md: 'none' }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            onClick={handleDrawerOpen}
            mb={2}
          />
          <Avatar
            name="Admin"
            src="https://bit.ly/dan-abramov"
            mb={4}
          />
          <Text fontWeight="bold" mb={2}>
            Admin
          </Text>
          
          
          <Stack spacing={2}>
            <Button variant="ghost" leftIcon={<RiDashboardLine />}><Link to='/Admin/Dashboard'>Dashboard</Link></Button>
            <Button variant="ghost" leftIcon={<RiCalendarLine />} onClick={() => setActiveComponent('events')}>Events</Button> {/* Update the onClick handler */}
            <Button variant="ghost" leftIcon={<RiUserLine />} onClick={() => setActiveComponent('organizers')}>Users</Button>
            <Button variant="ghost" leftIcon={<RiFileListLine />}><Link to='/Admin/Requests'>Requests</Link></Button>
          </Stack>
        </Box>
        <Box w={{ base: '100%', md: '80%' }} p={4}>
          {activeComponent === 'organizers' && <Organizers />}
          {activeComponent === 'events' && <ManageEvents />} {/* Render ManageEvents when activeComponent is 'events' */}
        </Box>
      </Flex>
    </>
  );
}
