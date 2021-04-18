import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('https://serene-cliffs-75904.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <section className="py-5">
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Service and Details</h2>
            <p>Here are our most popular packages! Explore & Enjoy</p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                {
                    products.map(product => <Product product={product}></Product>)
                } 
                </div>
            </div>
        </section>
    );
};

export default Products;

