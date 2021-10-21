import React, {useContext, useState, useEffect} from 'react'
import { RepoContext } from '../Context/Contexts'
import RepoCard from './RepoCard'
import Stack from '@mui/material/Stack';
import styles from './HomePage.module.css'


const Repositories = () => {
    const {repos, userName, setRepos, setAvatar} = useContext(RepoContext)
    const [error, setError] = useState('')
    const fetchRepos = async () => {
       let repo = await fetch(`https://api.github.com/users/${userName}/repos`)
        let data = await repo.json()
        if (data.message) {setError('Error Status: 404 Not Found\n Sorry, this user does not exist')};
        console.log(data)
        setAvatar(data[0].owner.avatar_url)
        setRepos(data)
        }
    

    useEffect( () => {
        if(userName){
            fetchRepos()
        }
    }, [userName])

    const renderRepos = () => {
        return repos.map(r => <RepoCard userName={userName} name={r.name} forks={r.forks} key={r.id} issues={r.open_issues} stars={r.stargazers_count}/>)
    }
    return (
        <div className={styles.center}>
            {error? <p >{error}</p>: 
            <Stack spacing={2} sx={{mt: 3, mb: 3}}>
            {renderRepos()}
            </Stack>
            }
        </div>

    )
}

export default Repositories
