import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import Resource from "./../Resource";

const ResourceList = () => {
  const [loading, setLoading] = useState(true);
  const [resourceArray, setResourceArray] = useState([]);

  useEffect(() => {
    firestore
      .collection("resources")
      .get()
      .then(function(resources) {
        const arr = [];
        resources.forEach(resource => {
          resource = resource.data();
          const resourceTitle = resource.title;
          const resourceImg = resource.img;
          const resourceUrl = resource.url;

          arr.push({
            title: resourceTitle,
            img: resourceImg,
            url: resourceUrl,
            backgroundColour: "purple"
          });
        });
        setResourceArray(arr);
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
          {resourceArray.map((resource, index) => (
            <Resource
              key={index}
              index={index}
              title={resource.title}
              url={resource.url}
              img={resource.img}
              backgroundColour={resource.backgroundColour}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceList;
