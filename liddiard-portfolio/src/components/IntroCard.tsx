import React from "react";


function IntroCard(){


    return (
    <div style={{   padding: '20px' , 
                    display:'flex',
                    flexDirection: 'column' ,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    minHeight: '350px',
                    justifyContent: 'center',}}>
        
        <h1>Hi, I'm Logan Liddiard!</h1>
                <p>I'm passionate about software engineering and game development.</p>
                <p>Welcome to my portfolio! 🚀</p>
    </div>
    );
}


export default IntroCard;