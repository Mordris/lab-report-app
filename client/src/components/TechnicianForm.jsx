import React, { useState } from 'react';
import { useCreateTechnicianMutation, useUpdateTechnicianMutation } from '../features/technicians/techniciansApi';
import { TextInput, Button, Box } from '@mantine/core';

const TechnicianForm = ({ technician = {}, onClose }) => {
  const [name, setName] = useState(technician.name || '');
  const [surname, setSurname] = useState(technician.surname || '');
  const [hospitalID, setHospitalID] = useState(technician.hospitalID || '');

  const [createTechnician] = useCreateTechnicianMutation();
  const [updateTechnician] = useUpdateTechnicianMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (technician._id) {
      await updateTechnician({ id: technician._id, name, surname, hospitalID });
    } else {
      await createTechnician({ name, surname, hospitalID });
    }
    onClose();
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Surname"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <TextInput
          label="Hospital ID"
          placeholder="Hospital ID"
          value={hospitalID}
          onChange={(e) => setHospitalID(e.target.value)}
          required
        />
        <Button type="submit" mt="md">
          {technician._id ? 'Update Technician' : 'Create Technician'}
        </Button>
      </form>
    </Box>
  );
};

export default TechnicianForm;
