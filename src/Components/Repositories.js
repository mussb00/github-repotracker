import React, {useContext, useState, useEffect} from 'react'
import { RepoContext } from '../Context/Contexts'


const Repositories = () => {
    const {repos, userName, setRepos} = useContext(RepoContext)

    useEffect( () => {
        fetch(`https://api.github.com/users/${userName}/repos`)
                .then(d => d.json())
                .then(d => {
                    if(d.message) {
                        alert(d.message)
                    } else {
                        console.log(userName)
                        setRepos(d)
                        console.log(d);
                    }
                })
    }, [userName])

    return (
        <div>
            <h1>HIIIIIII</h1>
        </div>

    )
}

export default Repositories
