import * as React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const styles = {
  container: {
    position: 'absolute',
    padding: 2,
  }, header: {
    marginTop: 5,
    paddingBottom: 2,
  }, subheader: {
    paddingBottom: 2,
    fontSize: 13,
  }, text: {
    fontSize: 15
  }
}

export default function Card1(props) {
  return (
    <Box sx={{...styles.container}}>
      <Typography sx={{...styles.header}}>{props.header}</Typography>
      <Typography sx={{...styles.subheader}}>{props.subheader} </Typography>
      <Typography sx={{...styles.text}}>{props.text}</Typography>
    </Box>
  )
}