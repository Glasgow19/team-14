import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import Story from "./../Story";

const StoryList = () => {
  const [loading, setLoading] = useState(true);
  const [storyArray, setStoryArray] = useState([]);
  console.log(storyArray.length);

  useEffect(() => {
    firestore
      .collection("userStories")
      .get()
      .then(function(userStories) {
        const arr = [];
        userStories.forEach(userStory => {
          userStory = userStory.data();
          const storyAge = userStory.age;
          const userStoryImg = userStory.image;
          const articleStory = userStory.story;
          const userStoryName = userStory.name;

          arr.push({
            name: userStoryName,
            story: articleStory,
            age: storyAge,
            image: userStoryImg,
          });
        });
        setStoryArray(arr);
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
          {storyArray.map((story, index) => (
            <Story
              key={index}
              index={index}
              name={story.name}
              story={story.story}
              age={story.age}
              image='http://via.placeholder.com/150'
              backgroundColour={story.backgroundColour}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryList;
