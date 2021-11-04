import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesCard = (props) => {
  const { title, imageUrl, newsSite, url, id } = props.article
  return (
    <div className="col-md-4">
      <div className="pt-5">
        <div className="card h-100">
          <img style={{ height: "200px" }} src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <small className="text-secondary">source: <a style={{ textDecoration: "none" }} target="_blank" rel="noreferrer" href={url}>{newsSite}</a></small>
          </div>
          <div className="card-footer text-center">
            <Link to = {`/articles/${id}`}>
              <button className="btn btn-outline-secondary">Learn More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;