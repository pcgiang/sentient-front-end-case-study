import * as React from 'react';
import { Box, Typography, Button} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tag from '../../components/atoms/Tag';
import Card1 from '../../components/layouts/Card1';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#E5E5E5",
    height: 500,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  }, inner: {
    marginTop: 5,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }, card: {
    width: 280,
    height: 250,
    backgroundColor: '#ffffff',
    marginLeft: 2.5,
    marginRight: 2.5,
    position: 'relative',
  }, tagContainer: {
    position:'absolute', 
    right: 2, 
    display: 'flex', 
    flexDirection: 'row'
  }
}

export default function API() {
  return (
    <Box sx={{...styles.container}}>
      <Typography variant='h4'sx={{paddingTop:5}}>Featured APIs</Typography>
      <Typography variant='h6' sx={{paddingTop:2, display: 'flex', flexDirection:'row'}}> 
        <Typography variant='h6' sx={{color:'#FFA000'}}>10% OFF&nbsp;</Typography> 
        on API calls for selected Microservices, now till 26-Dec-2020 </Typography>

      <Box sx={{...styles.inner}}>
        <ArrowBackIosIcon/>

        <Box sx={{...styles.card}}>
          <Box sx={{...styles.tagContainer}}>
            <Tag name='NEW' color='#B71C1C'/>
            <Tag name='10% OFF' color='#F2A43A'/>
          </Box>
          <Card1 
            header='ASR-SG-ENG'
            subheader = 'Sentient.io'
            text='Transcribes audio files containing speech  content in Singaporean-accented English.Transcribes audio files containing speech'
            />
        </Box>

        <Box sx={{...styles.card}}>
          <Box sx={{...styles.tagContainer}}>
              <Tag name='POPULAR' color='#95AD36'/>
              <Tag name='10% OFF' color='#F2A43A'/>
            </Box>
            <Card1 
              header='D&B Business Check Plus (SG)'
              subheader = 'Dun & Bradstreet Singapore'
              text='Transcribes audio files containing speech  content in Singaporean-accented English.Transcribes audio files containing speech'
              />
        </Box>

        <Box sx={{...styles.card}}>
          <Box sx={{...styles.tagContainer}}>
              <Tag name='10% OFF' color='#F2A43A'/>
            </Box>
            <Card1 
              header='ASR-SG-ENG'
              subheader = 'Sentient.io'
              text='Transcribes audio files containing speech  content in Singaporean-accented English.Transcribes audio files containing speech'
              />
        </Box>

        <Box sx={{...styles.card}}>
          <Box sx={{...styles.tagContainer}}>
                <Tag name='POPULAR' color='#95AD36'/>
                <Tag name='10% OFF' color='#F2A43A'/>
              </Box>
              <Card1 
                header='D&B Business Check Plus (SG)'
                subheader = 'Dun & Bradstreet Singapore'
                text='Transcribes audio files containing speech  content in Singaporean-accented English.Transcribes audio files containing speech'
                />
        </Box>
        <ArrowForwardIosIcon/>
      </Box>
      <SecondaryButton name='All Microservices'/>
    </Box>
  );
}