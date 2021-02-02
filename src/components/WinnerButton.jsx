import React from 'react';

function WinnerButton(props) {
    return(
        <nav>
            <button className="winbutton"
                id={props.joke}
                 onClick={props.winClick}
                
                 
            >
                Advance
            </button>
        </nav>
    )
}

export default WinnerButton;