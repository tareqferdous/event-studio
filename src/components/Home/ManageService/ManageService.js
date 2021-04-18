import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ManageService = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('https://serene-cliffs-75904.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])

    const handleClick = (id) =>{
        console.log(id)
        fetch(`https://serene-cliffs-75904.herokuapp.com/delete/${id}`,{
          method: 'DELETE'
        })
        .then(response => response.json())
      }

    return (
        <div className="container grid text-center my-5">
            {
                products.map(product => <Card className="shadow" style={{ width: '18rem' }}>
                <Card.Img className="w-100 img-fluid" variant="top" src={product.imageUrl} />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <h3>{'$' + product.price}</h3>
                <Link ><button onClick={()=>handleClick(product._id)} className="btn-primary">Delete</button></Link>
                </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default ManageService;



