import React from 'react'

function Participant(props) {
    return (
        <div className="participant">
            <p>{props.name}</p>
            <p>{props.email}</p>

            
        </div>
    )
}

export default Participant
