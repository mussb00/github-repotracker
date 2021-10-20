import React from 'react'
import { useState } from 'react'
import {Button, TextField, InputAdornment} from '@mui/material'
import {AccountCircle} from '@mui/icons-material'

const HomePage = () => {
    const [userName, setUserName] = useState('')
    
    const handleInputChange = e =>{
        setUserName(e.target.value)
    }

    const handleSubmit = () => {
        // if fetch returns error display the error (e.g. 'no user')
        // otherwise change appState and 
        setUserName('')
    }
    return (
        <div>
            <form>
            <TextField 
            variant="filled" 
            label="GitHub Username" 
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}/>
            <Button variant="contained" color="success" onClick={handleSubmit}>Search</Button>
            </form>
        </div>
    )
}

export default HomePage
