import React from "react";
import { Grid, Paper, Typography, Button } from '@mui/material';
import NavButton from '../components/NavButton';
function NavBar(){

return(
    <div style={{ padding: '2rem', textAlign: 'center' }}>
    <Paper>
        <Grid container sx={{ padding: 1 }}>
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
   </div>

    

);
}


export default NavBar
