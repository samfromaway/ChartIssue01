import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { olimpicMedals as data } from './data';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      category: ['gold', 'silver', 'bronze'],
    };
  }

  handle = () => {
    this.setState({
      category: ['gold', 'silver'],
    });
  };

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <h1>Class Component</h1>
          <ArgumentAxis />
          <ValueAxis />
          {this.state.category.map((category) => (
            <BarSeries
              key={category}
              name={category}
              valueField={category}
              argumentField='country'
              color='#ffd700'
            />
          ))}

          <Animation />
          <Legend />
          <Title text='Olimpic Medals in 2008' />
          <Stack />
        </Chart>{' '}
        <button onClick={this.handle}>Remove Bronze Category</button>
      </Paper>
    );
  }
}
