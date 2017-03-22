import React, { Component } from 'react'
import GraphComponent from '../Charts/Graph'
import BarChart from '../Charts/BarChart'
import HorizontalBarChart from '../Charts/HorizontalBarChart'
import AppComponent from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Columns from 'grommet/components/Columns';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';

const AddChart = () =>
<AppComponent>
  <Split>
    <Box>sidebar</Box>
    <Box>
      <Tiles>
        <Tile>
          <BarChart></BarChart>
        </Tile>
        <Tile>
          <HorizontalBarChart></HorizontalBarChart>
        </Tile>
      </Tiles>
    </Box>
  </Split>
</AppComponent>

export default AddChart
