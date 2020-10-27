import React from 'react';
import './Volunteer.css';
import vlntrimg from '../../image/voluntr1.jpg';
import VolunteerIcon from '../../icon/volunteer.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusG, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Volunteer = () => {
    return (
        <div className="container">
            <h1 className="big-title">Our Volunteers</h1>
            <p className="volunteer">
                <img className="volunteer-icon" src={VolunteerIcon} alt="" />
            </p>
            <p className="small-brief">The Volunteers who give their time and talents help to fulfill our mission.</p>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img" src={vlntrimg} alt="" />
                        <div className="card-body">
                            <h1 className="card-title">Abrarul</h1>
                            <p className="card-text">Founder</p> <br />
                        </div>
                        <div className="card-footer">
                            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faGooglePlusG} size="2x"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img" src={vlntrimg} alt="" />
                        <div className="card-body">
                            <h1 className="card-title">Abrarul</h1>
                            <p className="card-text">Founder</p> <br />
                        </div>
                        <div className="card-footer">
                            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faGooglePlusG} size="2x"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img" src={vlntrimg} alt="" />
                        <div className="card-body">
                            <h1 className="card-title">Abrarul</h1>
                            <p className="card-text">Founder</p> <br />
                        </div>
                        <div className="card-footer">
                            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                            <a href="#"><FontAwesomeIcon icon={faGooglePlusG} size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;