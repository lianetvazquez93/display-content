import React, { useState, useEffect } from "react";
import articles, { Article } from "./data";

const App: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState<string>("");

  const selectTitle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const article: Article = articles.find(
      (article: Article) => article.title === title
    );
    setArticle(article);
  }, [title]);

  return (
    <div className="container">
      <div className="content">
        <select name="title" value={title} onChange={(e) => selectTitle(e)}>
          {articles.map((article: Article) => (
            <option value={article.title}>{article.title}</option>
          ))}
        </select>
        {article ? (
          <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ) : (
          <p>Search for an article to display its content</p>
        )}
      </div>
    </div>
  );
};

export default App;
