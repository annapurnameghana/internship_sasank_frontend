// src/components/GenderChart.js
import React from 'react';
import './styles/GenderChart.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 }
  // ... add other genders if necessary
];

const COLORS = ['#0088FE', '#FFBB28'];

const GenderChart = () => {
  return (
    <div className="gender-chart">
      <h2>Gender Distribution</h2>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={100}
          cy={100}
          outerRadius={70}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default GenderChart;
