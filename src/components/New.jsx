import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../data.json';

const SeverityPieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const severityCounts = data.reduce((acc, curr) => {
      const proto = curr.alert && curr.proto ? curr.proto : 'Unknown';
      acc[proto] = (acc[proto] || 0) + 1;
      return acc;
    }, {});

    const formattedData = Object.keys(severityCounts).map((key, index) => ({
      name: key,
      value: severityCounts[key],
      fill: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
    }));

    setChartData(formattedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie dataKey="value" data={chartData} nameKey="name" cx="50%" cy="50%" outerRadius={150} label />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SeverityPieChart;
