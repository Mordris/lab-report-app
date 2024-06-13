import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnicianPage from './pages/TechnicianPage';
import ReportPage from './pages/ReportPage';
import ReportDetails from './components/ReportDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technicians" element={<TechnicianPage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/reports/:id" element={<ReportDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
