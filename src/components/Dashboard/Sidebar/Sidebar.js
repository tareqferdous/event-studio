import React from 'react';
import { Link} from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus, faUserPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <h3 style={{color: '#2F4F4F'}}>Event Studio</h3>
                </li>       
                <li>
                    <Link to="/showOrder" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faMinus} /> <span>Delete Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                    </Link>
                </li>
                
            </ul>
            
        </div>
    );
};

export default Sidebar;