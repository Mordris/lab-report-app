import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Button } from '@mantine/core';

const HomePage = () => {
  return (
    <Box>
      <Text>Welcome to the Hospital Management System</Text>
      <Button component={Link} to="/technicians">Technicians</Button>
      <Button component={Link} to="/reports">Reports</Button>
    </Box>
  );
};

export default HomePage;
