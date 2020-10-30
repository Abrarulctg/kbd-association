import React from 'react';
import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare, faInstagram, faLinkedin, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
    return (
        <div>
            <h1 className="mini-type-title">Contact us</h1>
            <ul className="contact-info-list">
                <li className="contact-address"> 
                Mostafa Garden (Ground Floor) <br/>
                Rahattarpool Circle, Bakalia, Chattogram.
                </li>
                <li> <strong>+880 1846 112 525</strong></li>
                <li><a href="/">jubarictg99@gmail.com</a></li>
            </ul>
            <br/>
            

            <h1 className="mini-type-title">Join with Social Media</h1>
            <div className="social-link">
                <a href="/"><FontAwesomeIcon icon={faFacebookSquare} size="4x" /></a>
                <a href="/"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
                <a href="/"><FontAwesomeIcon icon={faTwitterSquare} size="4x" /></a>
                <a href="/"><FontAwesomeIcon icon={faInstagram} size="4x" /></a>
                <a href="/"><FontAwesomeIcon icon={faWhatsappSquare} size="4x" /></a>
                <a href="/"><FontAwesomeIcon icon={faGooglePlusSquare} size="4x" /></a>
            </div>
        </div>
    );
};

export default ContactInfo;