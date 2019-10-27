import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import Fact from "./../Fact";

const FactList = () => {
  const [loading, setLoading] = useState(true);
  const [factArray, setFactArray] = useState([]);

  useEffect(() => {
    firestore
      .collection("facts")
      .get()
      .then(function(facts) {
        const arr = [];
        facts.forEach(fact => {
          fact = fact.data();
          const factTitle = fact.title;
          const factImg = fact.img;
          const factUrl = fact.url;

          arr.push({
            title: factTitle,
            img: factImg,
            url: factUrl,
            backgroundColour: "purple"
          });
        });
        setFactArray(arr);
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
        <div style={{overflow:'hidden', display: 'WebkitBox', 'WebkitBoxOrient': 'vertical', WebkitLineClamp: 5}}>

        
          {factArray.map((fact, index) => (
            <Fact
              key={index}
              index={index}
              title={fact.title}
              url={fact.url}
              img={fact.img}
              backgroundColour={fact.backgroundColour}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FactList;
