import React, { useState, useEffect } from 'react';

export const Articles = () => {
  // if SSR preloaded articles, use that as default
  const [articles, setArticles] = useState(window && window.preloadedArticles);
  console.debug(`articles initialized to ${articles}`);

  // initial load of data from "api"; not called by SSR
  useEffect(() => {
    console.info('Articles.useEffect...');
    if (window && !window.preloadedArticles) {
      console.debug('fetching articles.... (none pre-loaded)');
      //const getReq = 'http://localhost:3001/api/articles';  // CORS error
      const getReq = '/api/articles'
      fetch(getReq)
        .then( response => response.json())
        .then( data => setArticles(data))
        .catch( err => { console.error(`fetch ${getReq} failed...`); });
    }
    // console.debug(`loaded ${articles.length} articles`);
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