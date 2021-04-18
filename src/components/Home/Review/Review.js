import React from 'react';

const Review = ({review}) => {
    return (
        <div className=" col-md-4 card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{review.description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3 img-fluid review-img" src={review.imageUrl} alt="" width=""/>
                <div>
                    <h6 className="text-primary">{review.name}</h6>
                    <p className="m-0">{review.location}</p>
                </div>
            </div>
       </div>
    );
};

export default Review;