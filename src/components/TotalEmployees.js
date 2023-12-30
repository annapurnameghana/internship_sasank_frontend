import React from 'react';
import './styles/TotalEmployees.css'; // Make sure the path to your CSS file is correct

const TotalEmployees = ({ count, percentageChange }) => {
  // Determine the color and symbol for the percentage change dynamically
  const changeSymbol = percentageChange >= 0 ? '🔼' : '🔽';
  const changeColorClass = percentageChange >= 0 ? 'positive' : 'negative';

  return (
    <div className="total-employees-container">
      <div className="total-employees-header">Total Employees</div>
      <div className="total-employees-count">{count}</div>
      <div className="total-employees-description">Employees</div>
      <div className={`total-employees-change ${changeColorClass}`}>
        {changeSymbol} {Math.abs(percentageChange)}%
      </div>
    </div>
  );
};

export default TotalEmployees;
