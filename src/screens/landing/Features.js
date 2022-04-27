import * as React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
  card: {
    textAlign: 'center',
    margin: 3,
    paddingBottom: 5,
  }, lowerbox: {
    display: 'flex', justifyContent:'space-evenly',
    paddingTop: 5
  }, column: {
    width: 0.33, textAlign: 'left', marginRight:3
  }, img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 0.3,
    marginBottom: 2
  }, title: {
    color: '#424143', 
    fontSize: 24
  }, subtitle: {
    color:'#424143', 
    fontSize: 14,
  }, text: {
    color:'#424143', 
    fontSize: 18,
  }
}

export default function Features() {
  return (
    <Box sx={{...styles.card}}>
    <Typography sx={{...styles.title}}> Why use Sentient.io? </Typography>
    <Typography sx={{...styles.subtitle}}> Revolutionise your business with Enterprise AI </Typography>

    <Box sx={{...styles.lowerbox}}>
      <Box sx={{...styles.column}}>
      <Box component="img" sx={{...styles.img}} src={require('./../../assets/img1.jpg')}/>        
        <Typography sx={{...styles.text, display:'flex', flexDirection:'row'}}> 
          <Typography sx={{...styles.text, color: '#B7251C'}}> Model pre-trained&nbsp;</Typography> 
          for your use case 
        </Typography>
      <Typography sx={{...styles.text}}> Browse our platform and choose from our catalouge of pre-trained AI microservices that best meets your use case </Typography>
      </Box>

      <Box sx={{...styles.column}}>
      <Box component="img" sx={{...styles.img}} src={require('./../../assets/img2.jpg')}/>
          <Typography sx={{...styles.text, display:'flex', flexDirection:'row'}}> 
            Integrate&nbsp; 
            <Typography sx={{...styles.text, color: '#ceb790'}}> quickly and easily </Typography>
          </Typography>
      <Typography sx={{...styles.text}}> Straightforward API implementation with detailed documentation and responsive technical support </Typography>
      </Box>

      <Box sx={{...styles.column}}>
      <Box component="img" sx={{...styles.img}} src={require('./../../assets/img3.jpg')}/>    
        <Typography sx={{...styles.text, display:'flex', flexDirection:'row'}}> 
          <Typography sx={{...styles.text, color: '#bbd85d'}}> Scale automatically &nbsp;</Typography>
          as you grow 
        </Typography>
      <Typography sx={{...styles.text}}> Pay only as you use with per-API-call pricing allowing you to scale up or scale down anytime </Typography>
      </Box>
      
    </Box>
  </Box>
  )
}