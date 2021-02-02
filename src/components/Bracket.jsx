import React from 'react';
import { useState } from 'react';


import JokeButton from './JokeButton';
import WinnerButton from './WinnerButton';



    function Bracket(props) {

        const [jokeArray, setJokeArray] = useState([])
        const [jokeArrayTwo, setJokeArrayTwo] = useState(["", "", "", ""])
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
            
            <div className="top-level">
                <h1>Dad Joke Bracket</h1>
                <p>Click the Get Jokes button to get started!</p>

                <JokeButton handleClick={getJoke}/> 

            </div>
    
    
                        <main id="tournament">
    {/* ORIGINAL 8 */}
                        
                        <ul className="round round-2">
                            <li className="spacer">&nbsp;</li>
                           
                            <li className="game game-top ">{jokeArray.length ? jokeArray[0].joke : '1' } 
                            
                                <span> 
                                
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[0].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 0)

                                        }}
                                    /> : ""}
                                </span>
                            </li>
                           
                            

                            <li className="game game-spacer"></li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[1].joke : '2' } 
                            <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[1].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 0)

                                        }}
                                    />: ""}
                                </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[2].joke : '3'} <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[2].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 1)

                                        }}
                                    /> : ""} 
                                </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[3].joke : '4'} 
                            <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[3].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 1)

                                        }}
                                    /> : ""}
                            </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[4].joke : '5'} <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[4].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 2)

                                        }}
                                    /> : ""}
                            </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArray.length ? jokeArray[5].joke : '6'} <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[5].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 2)

                                        }}
                                    /> : ""}
                            </span></li>

                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top "> {jokeArray.length ? jokeArray[6].joke : '7'} 
                            <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[6].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 3)

                                        }}
                                    /> : ""}
                            </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">{jokeArray.length ? jokeArray[7].joke : '8'} 
                            <span> 
                                    {jokeArray.length ?
                                    <WinnerButton 
                                        joke={jokeArray[7].joke} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalFour(joke, 3)

                                        }}
                                    /> : "" }
                            </span></li>

                            <li className="spacer"></li>
                        </ul>

    {/* FINAL FOUR */}
                        <ul className="round round-3">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top"> {jokeArrayTwo[0].length ? jokeArrayTwo[0] : '1 v 2'} 
                                <span>
                                    {jokeArrayTwo[0].length ?
                                    <WinnerButton 
                                        joke={jokeArrayTwo[0]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                           addToFinalTwo(joke, 0)
                                            
                                            
                                        }}
                                    /> : ""}
                                </span>
                            
                            
                              </li>
                            <li className="game game-spacer"> </li>
                            <li className="game game-bottom "> {jokeArrayTwo[1].length ? jokeArrayTwo[1] : '3 v 4'}
                                <span>
                                    {jokeArrayTwo[1].length ?
                                    <WinnerButton 
                                        joke={jokeArrayTwo[1]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                           addToFinalTwo(joke, 0)
                                            
                                        }}
                                    /> : ""}
                                </span>
                            
                            
                           </li>

                            <li className="spacer"></li>
                            
                            <li className="game game-top ">{jokeArrayTwo[2].length ? jokeArrayTwo[2] : '5 v 6'} 
                                <span>
                                    {jokeArrayTwo[2].length ?
                                    <WinnerButton 
                                        joke={jokeArrayTwo[2]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalTwo(joke, 1)
                                            
                                        }}
                                    /> : ''}
                                </span>
                            
                            </li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom">{jokeArrayTwo[3].length ? jokeArrayTwo[3] : '7 v 8' }
                                <span>
                                    {jokeArrayTwo[3].length ? 
                                    <WinnerButton 
                                        joke={jokeArrayTwo[3]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            addToFinalTwo(joke, 1)
                                            
                                        }}
                                    /> : ''}
                                </span>
                            
                            </li>

                            <li className="spacer">&nbsp;</li>
                        </ul>
    {/* FINALS */}
                        <ul className="round round-4">
                            <li className="spacer">&nbsp;</li>
                            
                            <li className="game game-top">{jokeArrayThree[0].length ? jokeArrayThree[0] : 'FINALIST'}
                                <span>
                                    {jokeArrayThree[0].length ?
                                    <WinnerButton 
                                        joke={jokeArrayThree[0]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            winnerJoke(joke, 0)
                                            
                                        }}
                                    /> : ''}
                                </span>
                            
                            </li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom "> {jokeArrayThree[1].length ? jokeArrayThree[1] : 'FINALIST'}
                                <span>
                                    {jokeArrayThree[1].length ?
                                    <WinnerButton 
                                        joke={jokeArrayThree[1]} 
                                        winClick ={(e) => {
                                            const joke = e.target.id
                                            winnerJoke(joke, 0)
                                            console.log('WINNER JOKE OVERALL')
                                        }}
                                    /> : ""}
                                </span>
                            
                            </li>
                            
                            <li className="spacer">&nbsp;</li>
                        </ul>   


                        <div className=" entry round round-5">
                            { jokeArrayFour[0] ? 'WINNING JOKE:' : 'WHICH JOKE WILL WIN?'}
                            <br/>
                            <br/>
                            { jokeArrayFour.length && jokeArrayFour[0] }
                            <br/>
                            <br/>

                            { jokeArrayFour[0] && <a className="reset-button" href="/bracket">Reset!</a> }
                            
                            

                        </div>
                        </main> 



            </>
        )
    }

export default Bracket;