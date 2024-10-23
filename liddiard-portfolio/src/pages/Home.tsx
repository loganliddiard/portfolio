import React from 'react';
import { Container, Grid, Box, Paper, Typography, Button } from '@mui/material';
import NavBar from '../components/NavBar';

const titles = ["Software Engineer",
                "Game Developer",
                "Researcher",
                "Web Developer"
                ]




const Home: React.FC = () => (

  <Container maxWidth="lg">
    <Grid container sx={{ padding: 1 }}>
            <Grid item xs={8}>
                
            
            <h1>Hi, I'm Logan Liddiard!</h1>
            <p>I'm passionate about software engineering and game development.</p>
            <p>Welcome to my portfolio! 🚀</p>
          
                
                
            </Grid>
            <Grid item xs={4}>
             
                <h1>Image Goes Here</h1>
        
            </Grid>

  
            

    </Grid>
    <NavBar/>
  
  </Container>

 
);

export default Home;