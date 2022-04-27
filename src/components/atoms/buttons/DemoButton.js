import * as React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: {
    textTransform: 'none',
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#424143',
    borderRadius: 2,
    fontFamily: 'Nunito Sans',
  }
}

export default function DemoButton() {
  return (
    <Button variant='contained' sx={{...styles.btn}}> Try Demo</Button>
  )
}