import React, {useContext, useState, useEffect} from 'react'
import { RepoContext } from '../Context/Contexts'
import RepoCard from './RepoCard'
import Stack from '@mui/material/Stack';


const Repositories = () => {
    const {repos, userName, setRepos} = useContext(RepoContext)
    const [error, setError] = useState('')
    const fetchRepos = async () => {
       let repo = await fetch(`https://api.github.com/users/${userName}/repos`)
        let data = await repo.json()
        if (data.message) {setError('this user does not exist')};
        setRepos(data)
        }
    

    useEffect( () => {
        if(userName){
            fetchRepos()
        }
    }, [userName])

    const renderRepos = () => {
        return repos.map(r => <RepoCard userName={userName} name={r.name} forks={r.forks} key={r.id} url={r.url}/>)
    }
    return (
        <div>
            <Stack spacing={2} sx={{mt: 3, mb: 3}}>
            {renderRepos()}
            </Stack>
        </div>

    )
}

export default Repositories
