import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../data.json';

const AlertBarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const alertCounts = data.reduce((acc, curr) => {
      const signature = curr.alert && curr.alert.signature ? curr.alert.signature.split(' ')[3] : 'Unknown';
      acc[signature] = (acc[signature] || 0) + 1;
      return acc;
    }, {});

    const formattedData = Object.keys(alertCounts).map(key => ({
      name: key,
      count: alertCounts[key],
    }));

    setChartData(formattedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AlertBarChart;


