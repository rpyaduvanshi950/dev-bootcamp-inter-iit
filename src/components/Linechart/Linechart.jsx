// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import './Linechart.css'
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Linechart = (props) => {
  

//   return(
//    <div className="line">
//     <div className="text">
//         <p style={{margin:'0 10px'}} >Chart Title</p>
//         <h2 style={{margin:'0 10px'}}>2,643</h2>
//         <p style={{margin:'10px 10px'}}>1.10% Since yesterday</p>
//     </div>
//     <div className="graph">
//        <Line data={props.data} />
//     </div>
//    </div>
//   );
// };

// export default Linechart;
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Linechart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Linechart = (props) => {
  // Chart options to make it responsive
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to stretch and resize based on its container
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="line">
      <div className="text">
        <p style={{ margin: '0 10px' }}>Chart Title</p>
        <h2 style={{ margin: '0 10px' }}>2,643</h2>
        <p style={{ margin: '10px 10px' }}>1.10% Since yesterday</p>
      </div>
      <div className="graph">
        <Line data={props.data} options={options} />
      </div>
    </div>
  );
};

export default Linechart;
