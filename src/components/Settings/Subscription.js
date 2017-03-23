import React from 'react'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'

const Subscription = () =>
<Columns>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>Starter</Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>Standard</Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>Premium</Box>
</Columns>

export default Subscription
