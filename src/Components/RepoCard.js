import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const RepoCard = ({userName, name, forks, issues, stars}) => {

    return (
        <div>
    <Paper variant="outlined" sx={{mx: 5, textAlign: 'left', pl: 2}}>
        <Typography variant="h6">
            <a href={`https://github.com/${userName}/${name}`}>
            {name}
            </a>
        </Typography>
        <Typography variant="caption">
            {userName} &nbsp;
             <i class="fas fa-code-branch"></i> {forks}&nbsp;
             <i class="far fa-dot-circle"></i> {issues}&nbsp;
             <i class="far fa-star"></i> {stars} 

        </Typography>
    </Paper>


        </div>
    )

}


export default RepoCard
