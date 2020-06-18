import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Stack, EventTracker } from '@devexpress/dx-react-chart';
import { Typography } from '@material-ui/core';

const AccountingSummaryChart = ({ data, categories }) => {
  const [cat, setCat] = useState(categories);

  const handle = () => {
    setCat(['mobile', 'pc', 'xbox', 'play']);
  };

  return (
    <Paper style={{ position: 'relative' }}>
      <h1>Function Component</h1>
      <Chart data={data} height={400}>
        <ValueScale name='price' />

        <ArgumentAxis />
        <ValueAxis scaleName='price' />

        {cat.map((category) => (
          <BarSeries
            key={category}
            name={category}
            valueField={category}
            argumentField='year'
            scaleName='price'
          />
        ))}
        <EventTracker />
        <Tooltip />
        <Stack
          stacks={[
            {
              series: cat.map((category) => category),
            },
          ]}
        />
        <Legend position={'right'} />
      </Chart>
      <button onClick={handle}>Change Category</button>
    </Paper>
  );
};

export default AccountingSummaryChart;

//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
