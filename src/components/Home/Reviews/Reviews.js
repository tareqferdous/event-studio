import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://serene-cliffs-75904.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="py-5">
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>What Our Client Says</h2>
            </div>
            <div className="container d-flex justify-content-between">
                <div className="row">
                {
                    reviews.map(review => <Review review={review} ></Review>)
                } 
                </div>
            </div>
        </section>
    );
};

export default Reviews;