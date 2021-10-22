import * as React from 'react';
import {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {RepoContext} from '../Context/Contexts'

export default function ButtonAppBar() {
  const {appState, setAppState, avatar, setAvatar} = useContext(RepoContext)
  const history = () => {
    // console.log(appState)
    if (appState === 'repositories') {
      console.log('hiiii')
      setAppState('home')
      setAvatar('')
    } else {
      setAppState('repositories')
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GitHubIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Repo Tracker
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NotificationsNoneIcon/>
          </IconButton>
          <div onClick={history}>
          <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="backBtn"
            sx={{ mr: 2 }}>
              <ArrowBackIcon/>
          </IconButton>
          </div>
          <img src = {avatar} style={{width:"30px", borderRadius: "50%", marginTop: "1px" }}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}