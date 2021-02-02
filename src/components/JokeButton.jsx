import React from 'react';

function JokeButton(props) {
    return(
        <nav>
            <button className="winbutton"
                onClick={props.handleClick}
            >
                Get Jokes!
            </button>
        </nav>
    )
}


export default JokeButton;