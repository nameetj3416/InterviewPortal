import React from 'react';
import TimePicker from './TimePicker';
import AddParticipant from'./AddParticipant';

import './Schedule.css';


  
function Schedule() {
    return (
        <div className="schedule">
            
            <div className="time-picker">
                <div className="startTime">
                    <h2>Select Start time: </h2>
                    <TimePicker/>
                </div>
                <div className="endTime">
                    <h2>Select End time: </h2>
                    <TimePicker/>
                </div>

            </div>
            <AddParticipant/>
            {/* /display participants of current room */}
            
            
            
        </div>
    )
}

export default Schedule
