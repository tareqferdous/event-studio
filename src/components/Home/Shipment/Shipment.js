import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const shippingData = {...loggedInUser}
        shippingData.shippingInfo = data
        shippingData.date = new Date()
        setLoggedInUser(shippingData)

        if(loggedInUser.shippingInfo.name){
            fetch(`https://serene-cliffs-75904.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loggedInUser)
        })
        .then(response => {
            console.log(response);
        })
        }

    };

    console.log(loggedInUser);

    return (
        <div className="row container">
            <div className="col-md-5">
            
            </div>
            <div className="col-md-7 my-5">
                <h3 style={{textAlign: 'center', color: 'darkcyan', marginRight:'90px'}}>Place Your Order Now</h3>
            <form className="search-box text-center ml-5" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" type="text" name="email" {...register("email")} /> <br/>
                <input placeholder="Location" type="text" name="name" {...register("name")} /> <br/>
                <input placeholder="Price" type="number" name="price" {...register("price")} />
                <br/>
                <ProcessPayment></ProcessPayment>
                <input className="btn-primary" type="submit" value="Place Order" />
            </form>
            </div>
        </div>
    );
};

export default Shipment;