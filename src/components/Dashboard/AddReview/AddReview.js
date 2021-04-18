import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            email: data.email,
            name: data.name,
            location: data.location,
            description: data.description,
            imageUrl: imageUrl,
        };
        
        const url = `https://serene-cliffs-75904.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))

    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2fcb3e4a487e3faff20e9074db8dbc9e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return (
        <div>
             <section className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h4 style={{color: 'darkcyan', marginLeft:'70px'}}>Add Review</h4>
                    <form className="search-box text-center ml-5" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Email" type="text" name="email" {...register("email")} /> <br/>
                    <input onChange={handleImageUpload} placeholder="Image" type="file" name="image" /> <br/>
                    <input placeholder="Title" type="text" name="name" {...register("name")} /> <br/>
                    <input placeholder="Location" type="text" name="location" {...register("location")} /> <br/>
                    <textarea className="form-control mb-4" rows="5" cols="72" placeholder="Description" type="text" name="description" {...register("description")} />        
                    <input className="btn-primary" type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddReview;