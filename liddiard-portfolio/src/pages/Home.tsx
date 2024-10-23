import React from 'react';

import NavBar from '../components/NavBar';

const titles = ["Software Engineer",
                "Game Developer",
                "Researcher",
                "Web Developer"
                ]


const Home: React.FC = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Hi, I'm Logan Liddiard!</h1>
    <p>I'm passionate about software engineering and game development.</p>
    <p>Welcome to my portfolio! 🚀</p>
    <NavBar/>
  </div>
);

export default Home;