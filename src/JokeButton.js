import React from 'react';

function JokeButton(props) {
    return(
        <nav>
            <button 
                onClick={props.handleClick}
                
            >
                Get Jokes!
            </button>
        </nav>
    )
}

export default JokeButton;