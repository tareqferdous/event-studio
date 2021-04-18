import React from 'react';
import banner from '../../../images/banner.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="container d-flex align-items-center">
            <div className="row">
                <div className="col-md-5 pt-5">
                    <h1 className="pb-2" style={{color: '#fff'}}>Hire A Photographer <br/> For Any Event </h1>
                    <h6 className="pb-2" style={{color: '#C9DEDE',fontSize: '17px', lineHeight: '22px'}}>Welcome to Event Studio, the first and largest professional photographers directory in Bangladesh</h6>
                    <button style={{color: '#1A5276 ', fontWeight: '500'}} className="btn btn-warning">Hire Photographer</button>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid ml-5" src={banner} alt=""/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;