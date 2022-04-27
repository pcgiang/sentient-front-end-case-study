import * as React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: {
    margin: 3,
    textTransform: 'none',
    color: "#707070",
    border: 1,
    borderRadius: 0,
    fontSize: 15,
    width: 150,
    height: 40,
  }
}

export default function PrimaryButton(props) {
  return (
    <Button variant='outlined' sx={{...styles.btn}}> {props.name} </Button>
  )
}