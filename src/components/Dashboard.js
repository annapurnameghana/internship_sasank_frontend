import React, { useState } from 'react';
import './styles/Dashboard.css';
import DepartmentChart from './DepartmentChart';
import EmployeeTable from './EmployeeTable';
import GenderChart from './GenderChart';
import DashboardRow from './DashboardRow';

const Dashboard = () => {
  // Sample initial state for employees
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', userName: 'john.doe', age: 30, salary: 50000 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', userName: 'jane.doe', age: 25, salary: 48000 },
    { id: 3, firstName: 'Jan', lastName: 'Done', userName: 'jan.done', age: 45, salary: 68000 },
    { id: 3, firstName: 'Jan', lastName: 'Done', userName: 'jan.done', age: 45, salary: 68000 },
    { id: 3, firstName: 'Jan', lastName: 'Done', userName: 'jan.done', age: 45, salary: 68000 },
    { id: 3, firstName: 'Jan', lastName: 'Done', userName: 'jan.done', age: 45, salary: 68000 }
    // ... other employees
  ]);

  // Handler for adding a new employee
  const handleAdd = () => {
    console.log('Add new employee');
    // Logic to add a new employee
  };

  // Handler for editing an existing employee
  const handleEdit = (employeeId) => {
    console.log(`Edit employee with ID: ${employeeId}`);
    // Logic to edit an employee
  };

  return (
    <div className="dashboard">
      <DashboardRow />
      <div className="dashboard-row">
        <DepartmentChart />
      </div>
        {/* Wrap EmployeeTable and GenderChart in a flex container */}
        <div className="dashboard-row">
            <EmployeeTable employees={employees} onAdd={handleAdd} onEdit={handleEdit} />
            <GenderChart />
       </div>
      </div>
    
  );
};

export default Dashboard;
