import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import Event from "./../Event";

const EventList = () => {
  const [loading, setLoading] = useState(true);
  const [eventArray, setEventArray] = useState([]);
  console.log(eventArray.length);

  useEffect(() => {
    firestore
      .collection("events")
      .get()
      .then(function(events) {
        const arr = [];
        events.forEach(event => {
          event = event.data();
          const eventDate = "Today";
          const eventImageUrl = "http://via.placeholder.com/150";
          const eventLocation = "Glasgow";
          const eventTitle = event.title;

          arr.push({
            title: eventTitle,
            location: eventLocation,
            date: eventDate,
            imgSrc: eventImageUrl,
            backgroundColour: "purple"
          });
        });
        setEventArray(arr);
      })
      .then(() => {
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <div>
      {loading && <p>Loading</p>}
      {!loading && (
        <div>
          {eventArray.map((event, index) => (
            <Event
              key={index}
              index={index}
              title={event.title}
              location={event.location}
              date={event.date}
              imgSrc={event.imgSrc}
              backgroundColour={event.backgroundColour}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
