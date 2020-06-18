import React from 'react';
import Chart from './Chart';
import Chart2 from './Chart2';
import './App.css';

const gaming = [
  {
    year: '2012',
    mobile: 18,
    pc: 37,
    console: 45,
  },
  {
    year: '2013',
    mobile: 23,
    pc: 38,
    console: 39,
  },
  {
    year: '2014',
    mobile: 29,
    pc: 36,
    console: 35,
  },
];

function App() {
  return (
    <div className='App'>
      <Chart data={gaming} categories={['mobile', 'pc', 'console']} />
      <Chart2 data={gaming} categories={['mobile', 'pc', 'console']} />
    </div>
  );
}

export default App;
