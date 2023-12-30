import React from 'react';
import TotalEmployees from './TotalEmployees';
import './styles/DashboardRow.css'; // This file should contain the .dashboard-row and .info-container styles

const DashboardRow = () => {
  // Mock data, replace with real data
  const totalEmployees = 856;
  const percentageChange = 10.0;

  return (
    <div className="dashboard-row">
      <TotalEmployees count={totalEmployees} percentageChange={percentageChange} />
      <div className="info-container">
        {/* Additional content goes here */}
      </div>
      <div className="info-container">
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default DashboardRow;
