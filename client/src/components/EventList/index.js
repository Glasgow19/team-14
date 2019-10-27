import React, { useEffect } from "react";
import { firestore } from "../../config/firebase.init";
import Event from "./../Event";

const EventList = () => {
    // const events = [];
    useEffect(() => {
        firestore
            .collection("events")
            .get()
            .then(data =>
                data.map(doc => { 
                    events.push(doc.data)
                    let event = doc.data();
                    let title = event.title;
                    let image = event.image;
                    let date = event.date;
                    let location = event.location;
                    Event(title = title, image=image,date=date,location=location)
                    console.log(event,title,image,date,location)
        })
            );
        return () => { };
    }, []);

    return <p>Hi</p>;
};

export default EventList;