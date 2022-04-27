import * as React from 'react';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InfoButton from '../atoms/buttons/InfoButton';
import DemoButton from '../atoms/buttons/DemoButton';

const assets = require('./../../assets.js')

const styles = {
  card: {
    height: 250,
    width: 308,
    marginLeft: 2,
    marginRight: 2,
    padding: 5,
  }, img: {
    width: 70,
    height: 70,
    paddingRight: 3,
  }, subtitle: {
    fontStyle: 'normal',
    fontSize: 23,
  }, text: {
    fontSize: 17,
  }, rowContainer: {
    display: 'flex', flexDirection:'row',
  },
}

export default function Card2(props) {
  return (
    <Card sx={{...styles.card}}>
      <Box sx={{...styles.rowContainer, paddingBottom: 3}}>
        <Box component='img' sx={{...styles.img}} src={assets[props.src]}/>
        <Typography variant='h5' sx={{...styles.subtitle}}> {props.subtitle} </Typography>
      </Box>
      <Typography variant='h6' sx={{...styles.text}}> {props.text} </Typography>
      <hr/>
      <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
        <InfoButton/>
        <DemoButton/>
      </Box>
  </Card>

  )
}