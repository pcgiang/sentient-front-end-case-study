import * as React from 'react';
import './../../index.css'
import { Box, Typography, Button, Card } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import MessageIcon from '@mui/icons-material/Message';
import CloudIcon from '@mui/icons-material/Cloud';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ConstructionIcon from '@mui/icons-material/Construction';
import PageDots from '../../components/atoms/PageDots';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

const styles = {
  container: {
    display: 'flex',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flexGrow: 0.5,
  }, leftbox: {
    width: 0.3,
    padding: 7,
  }, card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#b3b3b3",
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }, serviceContainer: {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly',
  }, innerContainer: {
    display: 'flex',
    marginTop: 2,
  }, service: {
    color: "#b3b3b3",
    fontSize: 15,
  }, icon: {
    color: "#b3b3b3",
    marginRight: 1,
  }
};

export default function PromotionPage() {
  return (
    <Box sx={{...styles.container}}>
    <Box sx={{...styles.leftbox}}>
      <Typography sx={{fontSize: 40, paddingBottom: 3, fontFamily: 'Nunito Sans'}}>Add AI Capabilities into Your Project </Typography>
      <Typography sx={{fontSize: 17}}>Subscribe to AI algorithms and data services to build your next solution </Typography>
      <Box>
        <PrimaryButton name='Try it Free'/>
        <PrimaryButton name='Contact Sales'/>
      </Box>
      <hr/>
      <Typography sx={{textAlign: 'center', verticalAligh: 'text-bottom',}}> Explore microservice by category </Typography>

      <Box sx={{...styles.serviceContainer}}>
        <Box sx={{...styles.innerContainer}}>
          <MemoryIcon sx={{...styles.icon}}/>
          <Typography sx={{...styles.service}}>Natural Language Processing</Typography>
        </Box>
        <Box sx={{...styles.innerContainer}}>
          <MessageIcon sx={{...styles.icon, color: '#B7251C'}}/>
          <Typography sx={{...styles.service, color: '#B7251C'}}> Voice </Typography>
        </Box>
        <Box sx={{...styles.innerContainer}}>
          <CloudIcon sx={{...styles.icon}}/>
          <Typography sx={{...styles.service}}> Data </Typography>
        </Box>
        <Box sx={{...styles.innerContainer}}>
          <RemoveRedEyeIcon sx={{...styles.icon}}/>
          <Typography sx={{...styles.service}}> Computer Vision </Typography>
        </Box>
        <Box sx={{...styles.innerContainer}}>
          <ConstructionIcon sx={{...styles.icon}}/>
          <Typography sx={{...styles.service}}> Utility </Typography>
        </Box>
      </Box>
    </Box>
    <Card sx={{...styles.card}}>
      <Typography variant="h4">Promotion </Typography>
      <Typography variant="h4">Engine </Typography>
      <PageDots/>
    </Card>
  </Box>

  )
}