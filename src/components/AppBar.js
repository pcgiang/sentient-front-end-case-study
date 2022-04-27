import * as React from 'react';
import { AppBar, Toolbar, Button, Box, FormControl, Select, MenuItems, InputLabel, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const styles = {
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 100,
    alignItems: 'center',
  }, buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }, button: {
    marginRight:3,
    textTransform: 'none',
    borderRadius: 0,
    color: '#707070',
    height: 40,
  }, headerText: {
    textTransform: 'none',
    color: 'black',
    paddingLeft: 1,
    paddingRight:1,
    fontSize: 15,
  }, language: {
    flexGrow: 1, 
    border:'none', 
    marginLeft: 0.5, 
    width: 65,
    color: '#707070',
  }
};

export default function MyAppBar() {
  return (
    <Box sx={{flexGrow: 0.5}}>
      <AppBar position = "static" sx={{backgroundColor:"#C4C4C4"}}>
        <Toolbar>
          <Box sx={{...styles.textContainer}}>
            <Link to='/nav'>
              <MenuIcon sx={{color: 'black'}}/>
            </Link>
            <Button variants="text" component="div" sx={{...styles.headerText}}> Sentient.io Logo </Button>
            <Button variants="text" component="div" sx={{...styles.headerText}}> Microservice Catalogue </Button>
            <Button variants="text" component="div" sx={{...styles.headerText}}> Product Catalogue </Button>
          </Box>
          <Box sx={{...styles.buttonContainer}}>
            <Button variant="outlined" color= "inherit" sx={{...styles.button}}>Login/ Sign up</Button>
            <LanguageIcon sx={{color: '#707070'}}/>
            <FormControl variant='standard' sx={{minWidth:65}}>
              <Select id="language-select" sx={{...styles.language}}>
                <MenuItem value=""> None </MenuItem>
                <MenuItem value="EN"> EN </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  );
}