import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import AlternatingComponent from "../AlternatingComponent"

const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [articleArray, setArticleArray] = useState([]);

  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then(articles =>
        articles.forEach(article => {
          article = article.data();
          const articleDate = "Today";
          const articleImgUrl = "http://via.placeholder.com/150";
          const articleTitle = article.title;
          const articleText = article.text;
          console.log(articleTitle);

          setArticleArray(
            articleArray.concat([
              {
                title: articleTitle,
                date: articleDate,
                imgSrc: articleImgUrl,
                text: articleText,
                backgroundColour: "purple"
              }
            ])
          );
        })
      )
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
          {articleArray.map((article, index) => (
            <AlternatingComponent
              key={index}
              index={index}
              title={article.title}
              date={article.date}
              text={article.text}
              imgSrc={article.imgSrc}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;