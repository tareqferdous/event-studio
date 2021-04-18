import React from 'react';

const CategoryDetails = ({category}) => {
    return (
        <div className="col-md-4">
            <img className="img-fluid pb-3" src={category.pic} alt=""/>
            <h4 style={{color: '#000066'}} className="text-center pb-2">{category.title}</h4>
            <p className="text-center text-secondary">{category.description}</p>
        </div>
    );
};

export default CategoryDetails;