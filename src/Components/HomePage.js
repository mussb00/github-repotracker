import React, {useState, useContext} from 'react'
import { RepoContext } from '../Context/Contexts'
import {Button, TextField, InputAdornment} from '@mui/material'
import {AccountCircle, Collections} from '@mui/icons-material'
import styles from './HomePage.module.css'
import { style } from '@mui/material/node_modules/@mui/system'

const HomePage = () => {
    const {setAppState, setUserName} = useContext(RepoContext)

    const handleSubmit =  e => {
        e.preventDefault()
        console.log(e)
        setUserName(e.target[0].value)
        setAppState('repositories')
        e.target.reset()
    }
    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            <TextField 
            variant="filled" 
            label="GitHub Username" 
            type="text"
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}/>
            <Button type="submit" variant="contained" color="success">Search</Button>
            </form>
        </div>
    )
}

export default HomePage
