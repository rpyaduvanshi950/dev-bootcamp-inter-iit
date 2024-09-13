import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = (props) => {

  return(
    <div className="pie" style={{width:'300px',  border:'3px solid rgba(0, 0, 0, 0.05)',padding:'0 50px'}}>
      <div className="text2" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center '}}>
        <h2>Chart title</h2>
        <p>1.10% Since yesterday</p>
      </div>
        <Pie data={props.data}/>
    </div> 
);
};

export default Piechart;
 