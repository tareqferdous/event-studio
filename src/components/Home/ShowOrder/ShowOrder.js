import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://serene-cliffs-75904.herokuapp.com/showOrders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div className="container">
            <div className=" row my-5">
            {
                orders.map(order => <Card className="shadow my-5" style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Title>Service Name: {order.details.name}</Card.Title>
                <h3> Price:{ order.details.price + ' tk'}</h3>
                <p>User: {order.details.email}</p>
                </Card.Body>
                </Card>)
            }
        </div>
        </div>
    );
};

export default ShowOrder;