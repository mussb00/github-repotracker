import React from 'react'
import { useState } from 'react'
import {Button, TextField, InputAdornment} from '@mui/material'
import {AccountCircle, Collections} from '@mui/icons-material'

const HomePage = () => {
    const [userName, setUserName] = useState('')
    
    const handleInputChange = e =>{
        setUserName(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${userName}/repos`)
        const data = await response.json()
        console.log(data)
        console.log(userName)
        setUserName('')
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
              <input type="text" onChange={handleInputChange}/>
            <Button type="submit" variant="contained" color="success">Search</Button>
            </form>
        </div>
    )
}

export default HomePage
