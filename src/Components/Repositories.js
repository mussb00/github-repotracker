import React, {useContext, useState, useEffect} from 'react'
import { RepoContext } from '../Context/Contexts'
import RepoCard from './RepoCard'


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
        console.log(repos)
        return repos.map(r => <RepoCard userName = {userName} name={r.name}/>)
    }
    return (
        <div>
            <h1>HIIIIIII</h1>
            <p>{renderRepos()}</p>
        </div>

    )
}

export default Repositories
