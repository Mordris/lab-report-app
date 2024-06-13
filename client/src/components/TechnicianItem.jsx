import React, { useState } from 'react';
import { useDeleteTechnicianMutation } from '../features/technicians/techniciansApi';
import TechnicianForm from './TechnicianForm';
import { Box, Button, Text } from '@mantine/core';

const TechnicianItem = ({ technician }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteTechnician] = useDeleteTechnicianMutation();

  const handleDelete = async () => {
    await deleteTechnician(technician._id);
  };

  return (
    <Box>
      {isEditing ? (
        <TechnicianForm technician={technician} onClose={() => setIsEditing(false)} />
      ) : (
        <Box>
          <Text>{`${technician.name} ${technician.surname} (ID: ${technician.hospitalID})`}</Text>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button color="red" onClick={handleDelete}>Delete</Button>
        </Box>
      )}
    </Box>
  );
};

export default TechnicianItem;
