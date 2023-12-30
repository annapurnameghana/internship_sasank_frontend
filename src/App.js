import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddEmployeePage from './components/AddEmployeePage';
import SideMenu from './components/SideMenu'; // Import the SideMenu component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <SideMenu /> {/* Render the SideMenu alongside the main content */}
        <div className="main-content">
          {/* Links for navigation (Optional) */}

          <Routes>
            <Route path="/add-employee" element={<AddEmployeePage />} />
            
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
