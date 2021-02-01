import React from 'react';

function WinnerButtonTwo(props) {
    return(
        <nav>
            <button id={props.joke}
                 
                 onClick={props.winClickTwo}
                 
            >
                Winner Button
            </button>
        </nav>
    )
}

export default WinnerButtonTwo;