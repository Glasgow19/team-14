import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase.init";
import AlternatingComponent from "./../AlternatingComponent";

const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [articleArray, setArticleArray] = useState([]);
  console.log(articleArray.length);

  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then(function(articles) {
        const arr = [];
        articles.forEach(article => {
          article = article.data();
          const articleDate = article.date;
          const articleImageUrl = article.imgSrc;
          const articleText = article.text;
          const articleTitle = article.title;

          arr.push({
            title: articleTitle,
            text: articleText,
            date: articleDate,
            imgSrc: articleImageUrl,
          });
        });
        setArticleArray(arr);
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
          {articleArray.map((article, index) => (
            <AlternatingComponent
              key={index}
              index={index}
              title={article.title}
              text={article.text}
              date={article.date}
              imgSrc='http://via.placeholder.com/150'
              backgroundColour={article.backgroundColour}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
