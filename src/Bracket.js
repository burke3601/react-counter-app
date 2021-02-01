import React from 'react';
import { useState } from 'react';


import JokeButton from './JokeButton';
import WinnerButton from './WinnerButton';


    function Bracket(props) {

        const [jokeArray, setJokeArray] = useState([])
        const [jokeArrayTwo, setJokeArrayTwo] = useState(["","","",""])
        const [jokeArrayThree, setJokeArrayThree] = useState(["", ""])
        const [jokeArrayFour, setJokeArrayFour] = useState([""])
        const jokeHolder = []
        
  
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
            
        }
    
        async function addToFinalFour(joke, spot){
                const ffArr = [...jokeArrayTwo]
                ffArr[spot] = joke
                setJokeArrayTwo(ffArr)
               
            }
        
        async function addToFinalTwo(joke, spot){
            const finalArray = [...jokeArrayThree]
            finalArray[spot] = joke
            setJokeArrayThree(finalArray)
            
        }

        async function winnerJoke(joke, spot){
            const finalArray = [...jokeArrayFour]
            finalArray[spot] = joke
            setJokeArrayFour(finalArray)
           
        }

        

        
        
        return(
            <>
    <h1>Dad Joke Bracket</h1>

    <JokeButton handleClick={getJoke}/>
    
                        <main id="tournament">
    {/* ORIGINAL 8 */}
                        
                        <ul className="round round-2">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top ">{jokeArray.length ? jokeArray[0].joke : 'Click the Get Jokes button to get started!' } 
                                <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[0].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 0)

                                        }}
                                    />}
                                </span>
                            </li>

                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[1].joke : '' } <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[1].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 0)

                                        }}
                                    />}
                                </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[2].joke : ''} <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[2].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 1)

                                        }}
                                    />}
                                </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[3].joke : ''} 
                            <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[3].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 1)

                                        }}
                                    />}
                            </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[4].joke : ''} <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[4].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 2)

                                        }}
                                    />}
                            </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[5].joke : ''} <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[5].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 2)

                                        }}
                                    />}
                            </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[6].joke : ''} <span> 
                                    {jokeArray.length &&
                                    <WinnerButton 
                                        joke={jokeArray[6].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 3)

                                        }}
                                    />}
                            </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[7].joke : ''} <span> 
                                    {jokeArray.length ? (
                                    <WinnerButton 
                                        joke={jokeArray[7].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 3)

                                        }}
                                    /> ) : '' }
                            </span></li>

                            <li className="spacer">&nbsp;</li>
                        </ul>

    {/* FINAL FOUR */}
                        <ul className="round round-3">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top"> {jokeArrayTwo.length ? (
                                <span>
                                    {jokeArrayTwo[0]}
                                    <WinnerButton 
                                        joke={jokeArrayTwo[0]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                           addToFinalTwo(joke, 0)
                                            console.log('winner button final 4 joke[0] did it work?')
                                            
                                        }}
                                    />
                                </span>
                            
                            )
                             : 'joke winner game 1 filler' } <span></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArrayTwo.length ? (
                                <span>
                                    {jokeArrayTwo[1]}
                                    <WinnerButton 
                                        joke={jokeArrayTwo[1]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                           addToFinalTwo(joke, 0)
                                            console.log('winner button final 4 did it work?')
                                            console.log(joke)
                                        }}
                                    />
                                </span>
                            
                            )
                            : 'joke winner game 2 filler' }<span></span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top ">{jokeArrayTwo.length ? (
                                <span>
                                    {jokeArrayTwo[2]}
                                    <WinnerButton 
                                        joke={jokeArrayTwo[2]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalTwo(joke, 1)
                                            console.log('winner button final 4 joke[2]did it work?')
                                        }}
                                    />
                                </span>
                            
                            ) : 'joke winner game 3 filler' }<span></span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom">{jokeArrayTwo.length ? (
                                <span>
                                    {jokeArrayTwo[3]}
                                    <WinnerButton 
                                        joke={jokeArrayTwo[3]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalTwo(joke, 1)
                                            console.log('winner button final 4  joke[3]did it work?')
                                        }}
                                    />
                                </span>
                            
                            ) : 'joke winner game 4 filler' } <span></span></li>

                            <li className="spacer">&nbsp;</li>
                        </ul>
    {/* FINALS */}
                        <ul className="round round-4">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top">{jokeArrayThree.length ? (
                                <span>
                                    {jokeArrayThree[0]}
                                    <WinnerButton 
                                        joke={jokeArrayThree[0]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            winnerJoke(joke, 0)
                                            console.log('WINNER JOKE OVERALL')
                                        }}
                                    />
                                </span>
                            
                            ) : 'joke winner game 4 filler' } <span></span>
    

                            </li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArrayThree.length ? (
                                <span>
                                    {jokeArrayThree[1]}
                                    <WinnerButton 
                                        joke={jokeArrayThree[1]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            winnerJoke(joke, 0)
                                            console.log('WINNER JOKE OVERALL')
                                        }}
                                    />
                                </span>
                            
                            ) : 'joke winner game 4 filler' } <span></span></li>
                            
                            <li className="spacer">&nbsp;</li>
                        </ul>   


                        <h1 className="winner">
                            {jokeArrayFour.length && jokeArrayFour[0] }
                        </h1>
                        </main> 



            </>
        )
    }

export default Bracket;