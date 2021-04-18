import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div className="col-md-4 shadow text-center ">
            <img className="effect img-fluid pb-3" src={product.imageUrl} alt=""/>
            <h4 style={{color: '#000066'}} className="text-center pb-2">Package Name: {product.name}</h4>
            <h5 style={{color: 'darkcyan', textAlign: 'center'}}>Price: {product.price + ' tk' }</h5>
            <p className="text-center text-secondary">{product.description}</p>
            <Link to={`/checkout/${product._id}`} className="btn btn-primary mb-3" >View Details</Link>    
        </div>
    );
};

export default Product;