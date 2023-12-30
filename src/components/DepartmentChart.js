import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './styles/DepartmentChart.css';

const data = [
  { name: 'Dept A', employees: 24 },
  { name: 'Dept B', employees: 13 },
  { name: 'Dept C', employees: 15 },
  { name: 'Dept D', employees: 59 },
  { name: 'Dept E', employees: 17 },
  { name: 'Dept F', employees: 30 },
  { name: 'Dept F', employees: 61 }

];

const DepartmentChart = () => {
  return (
    <div className="department-chart-container">
      <h2 className="department-chart-title">Department wise employee count</h2>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="employees" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DepartmentChart;
