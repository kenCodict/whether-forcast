import React, {useState} from 'react'


const Context = () => {
    // Fetch all data from nasa eonet
    const [eventData, setEventData] = useState([])
    // Used to store the event that the user wants to go to
    const [selectedEvent, setSelectedEvent] = useState(null);
    // need to relender marker because user has changed filter option
    const [relenderMarkers, setRelenderMarkes] = useState(null)
  return (
    <div>Context</div>
  )
}

export default Context