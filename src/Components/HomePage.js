import React from 'react'
import { useState } from 'react'
import {Button} from '@mui/material'

const HomePage = () => {
    const [userName, setUserName] = useState('')
    const handleInputChange = e =>{
        setUserName(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="GitHub Username ..." onChange={handleInputChange}></input>
            <Button variant="contained">Search</Button>
        </div>
    )
}

export default HomePage
