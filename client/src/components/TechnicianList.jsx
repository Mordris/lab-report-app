import React from 'react';
import { useGetTechniciansQuery } from '../features/technicians/techniciansApi';
import TechnicianItem from './TechnicianItem';
import { Box, Loader } from '@mantine/core';

const TechnicianList = () => {
  const { data: technicians, error, isLoading } = useGetTechniciansQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading technicians</div>;
  }

  return (
    <Box>
      {technicians.map((technician) => (
        <TechnicianItem key={technician._id} technician={technician} />
      ))}
    </Box>
  );
};

export default TechnicianList;
