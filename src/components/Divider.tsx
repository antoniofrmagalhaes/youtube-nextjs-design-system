import React from 'react'
import { Grid, Divider as ChakraDivider } from '@chakra-ui/core'

const Divider: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
      <ChakraDivider margin={6} />
      <ChakraDivider margin={6} />
    </Grid>
  )
}

export default Divider
