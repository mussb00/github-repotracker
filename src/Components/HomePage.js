import React, {useState, useContext} from 'react'
import { RepoContext } from '../Context/Contexts'
import {Button, TextField, InputAdornment,Snackbar, Alert} from '@mui/material'
import {AccountCircle, Collections} from '@mui/icons-material'
import styles from './HomePage.module.css'
import { style } from '@mui/material/node_modules/@mui/system'

const HomePage = () => {
    const {setAppState, setUserName} = useContext(RepoContext)
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway'){
        return 
      }
      
      setOpen(false)
    }
    
    let errorMessage = "The username cannot be empty."
    const handleSubmit =  e => {
      e.preventDefault()
      if(!e.target[0].value){
        setOpen(true)
      } else {
        setUserName(e.target[0].value)
        setAppState('repositories')
      }
      e.target.reset()
    

    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
              <TextField
              aria-label="input"
              variant="filled" 
              label="GitHub Username" 
              type="text"
              sx={{ 
                mt: 5
              }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
            <Button type="submit" variant="contained" color="success" sx={{ 
              mt: 6
            }} className={styles.button}>Search</Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose = {handleClose} severity = "error" sx={{ width: '100%' }}>
                {errorMessage}
              </Alert>
            </Snackbar>
            </div>
            </form>
        </div>
    )
}

export default HomePage
