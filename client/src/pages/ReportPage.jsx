import React, { useState } from 'react';
import { Button } from '@mantine/core';
import ReportList from '../components/ReportList';
import ReportForm from '../components/ReportForm';

const ReportPage = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <h1>Reports</h1>
      <Button onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancel' : 'Add Report'}
      </Button>
      {isAdding && <ReportForm onClose={() => setIsAdding(false)} />}
      <ReportList />
    </div>
  );
};

export default ReportPage;
