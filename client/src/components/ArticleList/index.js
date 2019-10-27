import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import AlternatingComponent from "../AlternatingComponent"
import Article from "../Article"

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then(data =>
        data.forEach(d => {
          console.log(d.data())
          setArticles(articles.concat([d.data()]))
          console.log(articles)

        })        
      );

    return () => {};
  }, []);

  
  return (
    <div>
            {articles.map(a => <AlternatingComponent title={a.title} imgSrc={a.imgSrc} text={a.text}/>)}
    </div>
    )
};

export default ArticleList;