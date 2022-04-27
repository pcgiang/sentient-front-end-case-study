import * as React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: {
    textTransform: 'none',
    paddingLeft: 3,
    paddingRight: 3,
    color: '#424143'
  }
}

export default function InfoButton() {
  return (
    <Button variant='text' sx={{...styles.btn}}>More Info</Button>
  )
}