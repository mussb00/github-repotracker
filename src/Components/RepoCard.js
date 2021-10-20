import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {spacing} from '@mui/system'
import AltRouteIcon from '@mui/icons-material/AltRoute';

const RepoCard = ({userName, name, forks}) => {

    return (
        <div>

    {/* <List component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary={name} secondary={userName}/>
        <ListItemText secondary={forks}/>
      </ListItem>
      <Divider />
    </List> */}
    <Paper variant="outlined" sx={{mx: 5, textAlign: 'left', pl: 2}}>
        <Typography variant="h6">
            {name}
        </Typography>
        <Typography variant="caption">
            {userName} 

            <AltRouteIcon/>{forks}
        </Typography>
    </Paper>


        </div>
    )

}


export default RepoCard
