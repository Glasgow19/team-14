import React from 'react'
import Event from './Event'

const EventList = () => {
    const events = ["test", "abc"]

    return (
        <div>
            {events.map(e => <Event title = {e} /> )}
        </div>
    )
}

export default EventList
