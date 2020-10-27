import React from 'react';
import './PhotoGallery.css';
import donationOne from '../../image/donation-1.jpg';
import donationTwo from '../../image/donation-2.jpg';
import donationThree from '../../image/donation-3.jpg';
import donationFour from '../../image/donation-4.jpg';

const PhotoGallery = () => {
    return (
        <div className="container">
            <div className="photo-gallery">
            <h1 className="big-title">gallary</h1>
            <p>Some of our Blood Donation Pictures</p>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationOne} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationTwo} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationThree} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationFour} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationOne} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="donation-pic" src={donationOne} alt=""/>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default PhotoGallery;