import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const RepoCard = ({userName, name, forks, url}) => {

    return (
        <div>
    <Paper variant="outlined" sx={{mx: 5, textAlign: 'left', pl: 2}}>
        <Typography variant="h6">
            {name}
        </Typography>
        <Typography variant="caption">
            {userName} 

            <AltRouteIcon/>{forks}
        </Typography>
    </Paper>


        </div>
    )

}


export default RepoCard
