import React, { useState, useEffect } from 'react';

export const Articles = () => {
  const [articles, setArticles] = useState();

  // initial load of data from "api"
  useEffect(() => {
    fetch('/api/articles')
      .then( response => response.json())
      .then( data => setArticles(data))
      .catch( err => { console.error("data fetch failed..."); });
    console.debug(`loaded {articles.length} articles`);
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ul>
      { articles && articles.map(article => (
        <li key={article.title}>
          <h3>{article.title}</h3>
          <p>by {article.author}</p>
        </li>
      ))}
      </ul>
    </>
    );
}