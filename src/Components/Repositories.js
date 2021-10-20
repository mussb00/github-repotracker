import React, {useContext, useState, useEffect} from 'react'
import { RepoContext } from '../Context/Contexts'
import RepoCard from './RepoCard'


const Repositories = () => {
    const {repos, userName, setRepos} = useContext(RepoContext)
    const [error, setError] = useState('')
    let arr = []
    const fetchRepos = async () => {
       let repo = await fetch(`https://api.github.com/users/${userName}/repos`)
        let data = await repo.json()
        if (data.message) {setError('this user does not exist')};
        arr.push(data);
        console.log(data)
        }
    

    useEffect( () => {
        if (userName) {
            fetchRepos()
        }
    }, [userName])

    const renderRepos = () => {
        console.log(arr)
        arr.map(r => <RepoCard userName={userName} name={r.name}/>)
    }
    return (
        <div>
            <h1>HIIIIIII</h1>
            {error ? error : renderRepos()}
        </div>

    )
}

export default Repositories
