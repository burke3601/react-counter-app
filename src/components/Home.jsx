import React from 'react';
   function Home (){ 
       return(
    <>
    <div className="home-box">
    <h2 className="hb1">Dad Joke Bracket Challenge</h2>
        <p className="hb2">
            Get ready for some knee-slappers! Which dad joke will prevail?
        </p>
        <a className="bracket-button" href="/bracket">Go To Bracket!</a>

        <img className="hb3" src="./dad-joke-hero.jpg" alt=""/>
        
        </div>
    </>
       )
   }

export default Home;