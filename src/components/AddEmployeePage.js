import React, { useState } from 'react';
import './styles/AddEmployeePage.css';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeCode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    department: '',
    dob: '',
    gender: '',
    qualification: '',
    salary: '',
    email: '',
    mobile: '',
    isHOD: false,
    hodName: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });
  
      if (response.ok) {
        navigate('/'); 
      } else {
        console.error('Failed to add employee. Status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="add-employee-container">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label htmlFor="employeeCode">Employee Code:</label>
          <input type="text" id="employeeCode" name="employeeCode" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input type="text" id="middleName" name="middleName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB:</label>
          <input type="date" id="dob" name="dob" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" name="qualification" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Monthly Salary (INR):</label>
          <input type="number" id="salary" name="salary" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="tel" id="mobile" name="mobile" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="isHOD">isHOD (Head of Department):</label>
          <input type="checkbox" id="isHOD" name="isHOD" checked={employeeData.isHOD} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="hodName">HOD Name:</label>
          <input type="text" id="hodName" name="hodName" value={employeeData.hodName} readOnly />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeePage;
