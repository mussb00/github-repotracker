import React from 'react'

const RepoCard = ({userName}) => {
    useEffect(() => {
        async function getCat(){
            let data = await fetch(`https://api.github.com/users/${userName}/repos`)
            setCatName(data.)
        }
        getCat()
    }, [ userName ])

    return (
        <div>
            
        </div>
    )

}


export default RepoCard
