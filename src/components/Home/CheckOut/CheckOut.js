import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';

const CheckOut = () => {
    const {id} = useParams()
    const [service, setService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory()

    useEffect(()=>{
        fetch(`https://serene-cliffs-75904.herokuapp.com/service/${id}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data[0]);
            setService(data[0])
        })  
    }, [])
    console.log(service);

    const handleClick = () =>{
        if(service.name){
            const orderDetails = {...loggedInUser};
            orderDetails.details = service
            setLoggedInUser(orderDetails);
            history.push('/shipment')
        }
    }

    return (
        <div className="container mt-5">
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>{service.name}</td>
                    <td>{service.price + ' tk'} </td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleClick} className="text-center btn btn-primary">CheckOut</button>
        </div>
    );
};

export default CheckOut;