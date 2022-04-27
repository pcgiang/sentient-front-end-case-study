import * as React from 'react';
import { Box, Button } from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
  }, contentContainer: {
    width: 0.6,
    display:'flex', 
    flexDirection:'column',
    alignItems: 'flex-start',
    paddingTop: 7,
    paddingLeft: 10,
  }, btn: {
    textTransform: 'none',
    color: 'black',
    fontSize: 17,
  },img: {
    maxWidth: 1,
  }
}

export default function NLP() {
  return (
    <Box sx={{...styles.container}}>
      <NavigationBar/>
      <Box sx={{...styles.contentContainer}}>
        <Box sx={{display:'flex',flexDirecton:'row', alignItems:'center'}}>
        <Button variant='text' sx={{...styles.btn}}> Natural Language Processing </Button>
        <ArrowRightAltIcon/>
        </Box>
        <Box component='img' src={require('./../../assets/img9.jpg')} sx={{...styles.img}}/>
      </Box>
    </Box>
  )
}