import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const categoryData = [
    {
        title: 'Weeding Photography',
        description: "Wedding photography is the nuanced art of capturing one of the most important days in a person's life.",
        pic: 'https://i.ibb.co/Jp7z5r9/weeding-1.jpg'
    },
    {
        title: 'Commercial photography',
        description: "Commercial photography is photography that is used to sell or promote a product or service for making money",
        pic: 'https://i.ibb.co/pj8BbBK/commercial.jpg'
    },
    {
        title: 'Fashion Photography',
        description: "Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items",
        pic: 'https://i.ibb.co/F0JCHbP/fashion4.jpg'
    }
]

const Category = () => {
    return (
        <section className="py-5">
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Photography Categories</h2>
            <p>Explore our exclusive categories, find photographers you would <br/> love to explore and hire.</p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        categoryData.map(category => <CategoryDetails category={category}></CategoryDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;