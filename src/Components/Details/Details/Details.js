import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ArticlesDetails from './ArticlesDetails';

const Details = () => {
  const { id } = useParams()
  const [articleDetail, setArticleDetail] = useState([])

  useEffect(() => {
    const url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setArticleDetail(data))
  }, [id])
  return (
    <div>
        {
          articleDetail && articleDetail.map(detail => <ArticlesDetails key={articleDetail.id} details={detail}></ArticlesDetails>)
        }
    </div>
  );
};

export default Details;