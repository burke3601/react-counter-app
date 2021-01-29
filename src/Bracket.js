import React from 'react';
import { useState } from 'react';


import JokeButton from './JokeButton';
import WinnerButton from './WinnerButton';


    function Bracket(props) {

        const [jokeArray, setJokeArray] = useState([])
        const [jokeArrayTwo, setJokeTwo] = useState([])
        const jokeHolder = []
        const jokeHolderTwo= []
  
        async function getJoke(){
        
          for (let x = 0; x < 8; x++ ) {
               
                const jokePromise = fetch('https://icanhazdadjoke.com', {
                headers: {
                    Accept: 'application/json'
                }
                });
                const response = await jokePromise;
                const jokeData = await response.json();
                //console.log(jokeData);
                //console.log("~~~~~~~~~~~~~~~~~~~")
                //console.log(jokeArray)
                jokeHolder.push(jokeData)
            
            }
            setJokeArray(jokeHolder)
            console.log(jokeHolder)
            console.log(jokeArray)
            console.log(jokeHolder[0].joke)
        }
        

        async function addToFinalFour(e){
            jokeHolderTwo.push(e.target.id)
            setJokeTwo(jokeHolderTwo)
            console.log(e.target.id)

        }
        console.log(jokeArrayTwo)
        

        

        return(

            <>
    <h1>Dad Joke Bracket</h1>

    <JokeButton handleClick={getJoke}/>
    
                        <main id="tournament">
                        
                        <ul className="round round-2">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top ">{jokeArray.length ? jokeArray[0].joke : 'joke 1 filler' } <span> {jokeArray.length &&
                            <WinnerButton 
                                joke={jokeArray[0].joke} 
                                winClick ={addToFinalFour}
                            />}</span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[1].joke : 'joke 2 filler' }<span><WinnerButton  /></span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[2].joke : 'joke 3 filler'}<span><WinnerButton  /></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[3].joke : 'joke 4 filler'}<span><WinnerButton  /></span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[4].joke : 'joke 5 filler'}<span><WinnerButton  /></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[5].joke : 'joke 6 filler'}<span><WinnerButton  /></span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[6].joke : 'joke 7 filler'}<span><WinnerButton  /></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[7].joke : 'joke 8 filler'}<span><WinnerButton  /></span></li>

                            <li className="spacer">&nbsp;</li>
                        </ul>
                        <ul className="round round-3">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top"> {jokeArrayTwo.length ? jokeArrayTwo[0] : 'joke winner game 1 filler' } <span></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> <span></span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "><span></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom"> <span></span></li>

                            <li className="spacer">&nbsp;</li>
                        </ul>
                        <ul className="round round-4">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top"> test text<span></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> test text<span></span></li>
                            
                            <li className="spacer">&nbsp;</li>
                        </ul>   
                        </main> 



            </>
        )
    }

export default Bracket;