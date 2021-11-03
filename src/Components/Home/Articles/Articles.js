import React, { useEffect, useState } from 'react';
import ArticlesCard from './ArticlesCard'

const Articles = () => {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => res.json())
    .then(data => setArticles(data))
  }, [])
  return (
    <div className="container">
      <div>
        <h3 className="text-center text-secondary pt-5">OUR LATEST ARTICLES</h3>
      </div>
      <div className="row">
        {
          articles.map(art => <ArticlesCard key={articles.id} article={art}></ArticlesCard>)
        }
      </div>
    </div>
  );
};

export default Articles;