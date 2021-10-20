import React, {useState, useContext} from 'react'
import { RepoContext } from '../Context/Contexts'
import {Button, TextField, InputAdornment} from '@mui/material'
import {AccountCircle, Collections} from '@mui/icons-material'

const HomePage = () => {
    const {setAppState, setUserName} = useContext(RepoContext)

    const handleSubmit =  e => {
        e.preventDefault()
        
        setUserName(e.target[0].value)
        setAppState('repositories')
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <TextField 
            variant="filled" 
            label="GitHub Username" 
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}/> */}
              <input type="text"/>
            <Button type="submit" variant="contained" color="success">Search</Button>
            </form>
        </div>
    )
}

export default HomePage
