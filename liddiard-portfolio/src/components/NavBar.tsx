import React from "react";
import { Grid, Paper, Typography, Button } from '@mui/material';
import NavButton from '../components/NavButton';
function NavBar(){

return(
    
    <Paper>
        <Grid container spacing={1} sx={{ padding: 1 }}>
            <Grid item xs={3}>
                
                <NavButton label="Home" to='/Home'/>
                
                
            </Grid>
            <Grid item xs={3}>
            
                <NavButton label="About" to='/About'/>
        
            </Grid>

            <Grid item xs={3}>

    
                <NavButton label="Projects" to='/Projects'/>
    
                
            </Grid>

            <Grid item xs={3}>

                <NavButton label="Research" to='/Reseach'/>
    
            </Grid>
            

        </Grid>
    </Paper>
    

);
}


export default NavBar
