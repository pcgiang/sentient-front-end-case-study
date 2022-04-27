import React, {useState} from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import {Link} from 'react-router-dom';

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <List>
        <ListItem onClick={()=>setOpenDrawer(false)}>
          <ListItemText>
            <Link to='/nlp'> Natural Langauge Processing </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link to='/voice'> voice </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link to='/data'> Data </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link to='/cv'> Computer Vision </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link to='/utility'> Utility </Link>
          </ListItemText>
        </ListItem>

      </List>
    </Drawer>
  )
}