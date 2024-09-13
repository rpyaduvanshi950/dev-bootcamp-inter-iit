import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for the Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarComponent = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom width/height
    plugins: {
      legend: {
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: '',
    //   },
    },
  };

  return (
    <div style={{ width: '500px', height: '330px', textAlign:'center' }}> {/* Adjust the width here */}
    <h2 style={{padding:'10px',margin:'0'}}>Chart Title</h2>
      <Bar data={data} options={options} width={600} height={400} />
    </div>
  );
};

export default BarComponent;
