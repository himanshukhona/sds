import React, { Component } from 'react'
import GraphComponent from '../Charts/Graph'
import Columns from 'grommet/components/Columns';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
//import AddChart from './AddChart';

const Dashboard = () =>
<div>
<Box align='center'>
  <h1>Dashboard</h1>
  <Tiles>
    <Tile>
    <GraphComponent></GraphComponent>
    </Tile>
    <Tile>
    Add a Custom Chart
    
    </Tile>
  </Tiles>
</Box>
<Box align='center'>
  <h1>Popular</h1>
  <Tiles>
    <Tile>
      <GraphComponent></GraphComponent>
    </Tile>
    <Tile>
      <GraphComponent></GraphComponent>
    </Tile>
  </Tiles>
</Box>
</div>

export default Dashboard
