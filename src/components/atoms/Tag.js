import * as React from 'react';
import { Card } from '@mui/material';

const styles = {
  tag: {
    width: 80,
    height: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    fontSize: 12,
    alignItems: 'center'
  }
}
export default function Tag(props) {
  return (
    <Card sx={{...styles.tag, backgroundColor: props.color}}>{props.name}</Card>
  )
}