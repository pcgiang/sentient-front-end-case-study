import * as React from 'react';
import { Box, Typography, Button} from '@mui/material';
import Card2 from '../../components/layouts/Card2';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 10,
  }, lowerBox: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  }, button: {
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
    color: '#cc0000',
    borderColor: '#cc0000',
    textTransform: 'none',
    fontSize: 17,
  }, contactBox: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 0.7,
    height: 50,
    backgroundColor: "#f5f2ed", 
  }, contactButton: {
    color: "#82673f",
    textTransform: "none",
    textDecoration: "underline",
    fontSize: 15,
    padding:0,
  }
}

export default function Demo() {
  return (
    <Box sx={{...styles.container}}>
      <Typography variant='h4'> Try our Demo Apps </Typography>
      <Typography> Explore some Demo Application built with Setient.io AI Technology </Typography>

      <Box sx={{...styles.lowerBox}}>
        <Card2
          subtitle='Identify & Classify Objects In Text (eng)'
          src='img4'
          text='This demo app recognition speech automatically  for both Mandarin.This demo app recognition speech automatically  for both English'
        />

        <Card2
          subtitle='Identify & Classify Objects In Text (eng)'
          src='img5'
          text='This demo app recognition speech automatically  for both Mandarin.This demo app recognition speech automatically  for both English'
        />

        <Card2
          subtitle='Identify & Classify Objects In Text (eng)'
          src='img6'
          text='This demo app recognition speech automatically  for both Mandarin.This demo app recognition speech automatically  for both English'
        />
      </Box>

      <SecondaryButton name='All Demo App'/>
      <Box sx={{...styles.contactBox}}>
        <Typography variant='h7' sx={{color:'black'}}> For enterprise enquiries, </Typography>
        <Button variant='text' sx={{...styles.contactButton}}> Contact Us </Button>
      </Box>
    </Box>
  )

}