import React, { Component } from 'react'

import Chart, {Axis, Base, Line, Layers} from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';

const Graph = () =>
<Chart>
  <Axis vertical={true}
    count={3}
    ticks={true} />
  <Base width='small'/>
  <Layers>
    <Line values={[70, 0, 20, 100, 60]} />
  </Layers>
</Chart>

export default Graph
