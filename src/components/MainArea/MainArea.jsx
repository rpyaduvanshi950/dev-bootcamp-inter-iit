import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainArea.css';
import Header from '../Header/Header';
// import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Linechart from '../Linechart/Linechart';
import BarComponent from '../Barchart/BarComponent';

const MainArea = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your Polygon.io API key
  const API_KEY = '5j9Hsbe4BF_SeZ4dgjY00IdyIznZGTnz';

  useEffect(() => {
    // Fetch stock data when the component mounts
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-02-10?adjusted=true&sort=asc&apiKey=${API_KEY}`
        );
        // Transform the data as needed for your charts
        const formattedData = response.data.results.map((item) => ({
          date: new Date(item.t).toLocaleDateString(),
          close: item.c,
        }));
        setStockData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Prepare data for charts
  // Generate random data for the pie chart
  const getRandomData = (num) => {
    return Array.from({ length: num }, () => Math.floor(Math.random() * 1000) + 100);
  };
  
  const getRandomColors = (num) => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
    return colors;
  };
  
  const pieData = {
    labels: Array.from({ length: 7 }, (_, i) => `Category ${i + 1}`),
    datasets: [
      {
        label: 'Random Data',
        data: getRandomData(7),
        backgroundColor: getRandomColors(7),
      },
    ],
  };
  

  const lineData = {
    labels: stockData.map((item) => item.date),
    datasets: [
      {
        label: 'Stock Prices',
        data: stockData.map((item) => item.close),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.5)',
        fill: false,
      },
    ],
  };

  return (
    <div className="body">
      <div className="firstrow">
        <Header />
        {/* Use Linechart to display stock prices */}
        <BarComponent data={lineData} />
      </div>
      <div className="middle">
        <Linechart data={lineData} />
        <Linechart data={lineData} />
        <Linechart data={lineData} />
        {/* Placeholder BarComponent */}
      </div>
      <div className="bottom">
        <BarComponent data={lineData} />
        {/* Use Piechart for example, this can be changed based on your needs */}
        <Piechart data={pieData} />
      </div>
    </div>
  );
};

export default MainArea;
