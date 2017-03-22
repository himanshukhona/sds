import React, { Component } from 'react'

import Chart, {Axis, Base, Line, Layers, Grid} from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';

const Graph = () =>
<Chart>
  <Axis vertical={true}
    count={3}
    ticks={true} />
  <Base width='small' height='small'/>
  <Layers>
    <Line values={[70, 0, 20, 100, 60]} />
    <Grid columns={2} rows={2} />
  </Layers>
  <Axis
    count={3}
    ticks={true} />
</Chart>

export default Graph
