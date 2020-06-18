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
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { olimpicMedals as data } from './data';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(
  legendLabelBase
);
console.log(data);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      cat: ['gold', 'silver', 'bronze'],
    };
  }

  handle = () => {
    this.setState({
      cat: ['gold', 'silver'],
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
          {this.state.cat.map((category) => (
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
        <button onClick={this.handle}>Change Category</button>
      </Paper>
    );
  }
}
