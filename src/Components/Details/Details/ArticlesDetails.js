import React from 'react';

const ArticlesDetails = (props) => {
  const {summary, imageUrl} = props.details
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          {summary}
        </div>
        <div class="col">
          {imageUrl}
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;