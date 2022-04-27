import * as React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  container: {
    backgroundColor: '#C4C4C4',
  }, navbar: {
    marginBottom: 5,
    display:'flex', 
    flexDirection:'column',
    alignItems: 'flex-start',
    width: 300,
    height: 500,
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 5,
    borderRight: 1,
    borderRadius: 0,
    boxShadow: 0,
    backgroundColor: '#C4C4C4',
  }, link: {
    textDecoration: "none",
    textTransform: 'none',
    color: 'black',
    fontSize: 20,
  }
}

export default function NavigationBar() {

  return (
    <Box sx={{...styles.container}}>
      <Box sx={{...styles.navbar}}>
        <NavLink to="/landing" style={{...styles.link}}>
          <MenuIcon/>
        </NavLink>
        <NavLink to="/nlp" style={{...styles.link}}> Natural Language Processing </NavLink>
        <NavLink to="/voice" style={{...styles.link}}> Voice </NavLink>
        <NavLink to="/data" style={{...styles.link}}> Data </NavLink>
        <NavLink to="/cv" style={{...styles.link}}> Computer Vision </NavLink>
        <NavLink to="/utility" style={{...styles.link}}> Utility </NavLink>
      </Box>
    </Box>
  )
}

