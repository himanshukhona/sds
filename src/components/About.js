import React, { Component } from 'react'
import AppComponent from 'grommet/components/App';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import GraphComponent from './Charts/Graph'
import Section from 'grommet/components/Section';

const About = () =>
<AppComponent>
  <Box>
    <Columns>
      <Box>
        <GraphComponent></GraphComponent>
      </Box>
      <Box>
      <Section>
        Get the best out of Retails
      </Section>
      </Box>
    </Columns>
  </Box>
  <Box>
    The product has changed the way we look at sales.
  </Box>
</AppComponent>

export default About
