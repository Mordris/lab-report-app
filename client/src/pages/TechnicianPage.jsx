import React, { useState } from 'react';
import { Button } from '@mantine/core';
import TechnicianList from '../components/TechnicianList';
import TechnicianForm from '../components/TechnicianForm';

const TechnicianPage = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <h1>Technicians</h1>
      <Button onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancel' : 'Add Technician'}
      </Button>
      {isAdding && <TechnicianForm onClose={() => setIsAdding(false)} />}
      <TechnicianList />
    </div>
  );
};

export default TechnicianPage;
