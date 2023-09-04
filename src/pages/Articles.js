import React from 'react';
import { useDataSSR } from '../useDataSSR';


export const Articles = () => {
  // useDataSSR replaces useState, useEffect
  const articles = useDataSSR('articles', () => {
      //const getReq = 'http://localhost:3001/api/articles';  // CORS error
      const getReq = 'http://localhost:3001/api/articles'; // isomorphic fetch requires full URL

      return fetch(getReq).then( response => response.json())
  });

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

export default Articles;
