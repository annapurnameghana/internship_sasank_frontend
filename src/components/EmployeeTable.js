import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/EmployeeTable.css';

const EmployeeTable = ({ employees }) => {
  let navigate = useNavigate();

  // Mock function for edit action - replace with actual implementation
  const handleEdit = (employeeId) => {
    console.log(`Edit employee with ID: ${employeeId}`);
    // Put here the logic to navigate to the edit employee page or to open an edit form
  };

  // Function to navigate to the Add Employee page
  const handleAdd = () => {
    navigate('/add-employee');
  };

  return (
    <div>
      <button onClick={handleAdd} className="add-button">Add Employee</button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.userName}</td>
              <td>{employee.age}</td>
              <td>{employee.salary.toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(employee.id)} className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
