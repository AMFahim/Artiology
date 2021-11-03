import React from 'react';

const ArticlesCard = (props) => {
  const {title, imageUrl, newsSite} = props.article
  return (
    <div className="col-md-4">
      <div className="pt-5">
          <div className="card h-100">
            <img style={{height: "200px"}} src={imageUrl} className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{title}</h5>
            <small className="text-secondary">source: {newsSite}</small>
            </div>

            <div className ="card-footer text-center">
            <small className ="text-muted">Learn More</small>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;