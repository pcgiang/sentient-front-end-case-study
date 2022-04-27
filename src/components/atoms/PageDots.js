import * as React from 'react';
import { Box } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PageDots() {
  return (
    <Box sx={{display: 'flex', flexDirection:'row', color:'#707070', position:'absolute', bottom: 15}}>
      <FiberManualRecordIcon/>
      <FiberManualRecordIcon/>
      <FiberManualRecordIcon/>
      <FiberManualRecordIcon/>
      <FiberManualRecordIcon/>
    </Box>
  )

}