import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Weeding/Engagement/Holud Photography" , link: "/emergency"},
        {name: "Birthday/ Kids/ New Born Babys" , link: "/checkup"},
        {name: "COMMERCIAL" , link: "/personal-treatment"},
        {name: "Product" , link: "/tooth-extract"},
        {name: "Foods" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Dhanmondi - 4A, Dhaka" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Weeding Photography" , link: "/emergency"},
        {name: "Engagement Photography" , link: "/checkup"},
        {name: "Holud Photography" , link: "/personal-treatment"},
        {name: "Birthday/ Kids/ New Born Babys" , link: "/tooth-extract"},
        {name: "COMMERCIAL" , link: "/checkup"},
        {name: "PRODUCT" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area">
            <div className="container pt-5">
                <div className="row ">
                    <FooterCol key={1} menuTitle={"Discover Us"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="pb-3">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;