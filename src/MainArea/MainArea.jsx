import React from 'react';
import './MainArea.css'; // Add CSS for header
import Dash from '../assets/DashBoard.png'
import Header from '../Header/Header';
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Linechart from '../Linechart/Linechart';
import BarComponent from '../Barchart/BarComponent';


const MainArea = () => {
  const Piedata = {
    labels: ['Group A', 'Group B', 'Group C'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [333, 333, 333],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        // label: 'Dataset 1',
        data: [4000, 3000, 2000, 2780, 1890],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };
  const Linedata = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [4000, 3000, 2000, 2780, 1890],
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.5)',
      },
    ],
  };
  const bardata = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        // label: 'Dataset 1',
        data: [7100, 5000, 6000, 3780, 4890],
        backgroundColor: '#703BE7',
      },
      {
        // label: 'Dataset 1',
        data: [3780,7500, 4890, 6000, 5500 ],
        backgroundColor: ' #87CEEB',
      },
    ],
  }
    return(
    
    <div className="body">
      <div className="firstrow">
        <Header />
        <Barchart data={data} />
      </div>
      <div className="middle">

        <Linechart data={Linedata} />
        <Linechart data={Linedata} />
        <Linechart data={Linedata} />
      </div>
      <div className="bottom">
        <BarComponent data={bardata} />
        <Piechart data={Piedata} />
      </div>
    </div>
    
  );
};

export default MainArea;
