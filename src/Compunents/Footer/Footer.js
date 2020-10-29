import React from 'react';
import './Footer.css';
import footerBrand from '../../icon/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className="footer-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                        <img className="footer-brand" src={footerBrand} alt="" />
                    </div>
                    <div className="col-md-10">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia cupiditate aspernatur quis itaque aperiam quidem recusandae corporis obcaecati repellat delectus, rerum, ipsa at et velit amet, atque alias iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae labore officia corporis. Nemo laboriosam assumenda ex vel enim! Accusantium et commodi enim fugiat optio consequatur velit tenetur repudiandae aperiam?</p>
                    </div>
                </div> <hr />
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="footer-title">Contact Us</h1>
                        <div className="footer-list footer-address">
                            <ul>
                                <li><a href="/">jubairctg99@gmail.com</a></li>
                                <li><a href="/">abrarctg25@gmail.com</a></li>
                                <li>Road #12, House #14</li>
                                <li>Chattogram, Bangladesh.</li>
                                <li><FontAwesomeIcon icon={faPhoneAlt} size="1x" /> +880 1846-112 525</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h1 className="footer-title">Support Links</h1>
                        <div className="row">
                            <div className="col-md-6 footer-list support-links">
                                <ul>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Malaria</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Thalassemia</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Hemolytic Anemia</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Dengue</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> sicklemia</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 footer-list support-links">
                                <ul>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Cell Elofrosis</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Blood Count</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Ychromas Eosis</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Thrombo Xtosis</a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faCaretRight} size="1x" /> Aplastic Anemia</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h1 className="footer-title">Find us on Map</h1>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title="kbda-location on map"
                                    width="721"
                                    height="500"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Chattogram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0">
                                </iframe>
                                <a href="https://putlocker-is.org">putlockerplus</a>
                            </div>
                        </div>
                    </div>
                </div> <hr />
                <div className="text-center">
                    <p className="copyright-text">2020 | All Rights Reserved | Kalauzan Blood Donor's Association </p> 
                    <a className="developer" href="https://www.linkedin.com/in/abrarul-hoque/"> Abrarul Hoque</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;