import React from 'react'
import Participant from './Participant';
function AddParticipant() {
    return (
        <div className="AddParticipant">
            <form>
            <label>Add Participant Email-ID:
                <input type="email" />
            </label>
            <input type="submit" value="Submit"></input>
            </form>
            {/* every time add participant is clicked Participant card is loaded */}
            <Participant email=""/>
            
        </div>
    )
}

export default AddParticipant
