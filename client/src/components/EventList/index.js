import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import Event from "./../Event";

const EventList = () => {
  const [loading, setLoading] = useState(true);
  const [eventArray, setEventArray] = useState([]);

  useEffect(() => {
    firestore
      .collection("events")
      .get()
      .then(function(events) {
        const arr = [];
        events.forEach(event => {
          event = event.data();
          const eventDate = event.date;
          const eventImageUrl = event.imgSrc;
          const eventLocation = event.location;
          const eventTitle = event.title;

          arr.push({
            title: eventTitle,
            location: eventLocation,
            date: eventDate,
            imgSrc: eventImageUrl
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
              eventLocation={event.location}
              date={event.date}
              imgSrc={event.imgSrc}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
