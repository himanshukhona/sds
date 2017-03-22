import React, { Component } from 'react'

import Chart, {Axis, Base, Line, Layers, Grid, Bar} from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';

const HorizontalBarChart = () =>
<Chart>
  <Axis vertical={true}
    count={3}
    ticks={true} />
  <Base width='small' height='small'/>
  <Layers>
    <Bar values={[45, 25, 60, 12, 35, , 10, 45, 60, 85, 70, 20]}
        colorIndex='graph-2'
        activeIndex={11}
        vertical={true}/>
    <Grid columns={2} rows={2} />
  </Layers>
  <Axis
    count={3}
    ticks={true} />
</Chart>

export default HorizontalBarChart;
