import * as React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: {
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
    color: '#cc0000',
    borderColor: '#cc0000',
    textTransform: 'none',
    fontSize: 17,
  }
}

export default function SecondaryButton(props) {
  return (
    <Button variant='outlined' sx={{...styles.btn}}> {props.name} </Button>
  )
}