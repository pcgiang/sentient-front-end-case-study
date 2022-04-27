import * as React from 'react';
import { Box, Typography, Button} from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 10,
  }
}

export default function Customer() {
  return (
    <Box sx={{...styles.container}}>
      <Typography variant='h5'> Customers </Typography>
      <Typography variant= 'h7'> Our partners that use our services </Typography>
      <Box component='img' src={require('./../../assets/img7.jpg')}/>
      <Box component='img' src={require('./../../assets/img8.jpg')} sx={{marginTop: 10}}/>
    </Box>
  )
}