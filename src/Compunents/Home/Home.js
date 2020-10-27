import React from 'react';
import BecomeMember from '../BecomeMember/BecomeMember';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Slider from '../Slider/Slider';
import Statistics from '../Statistics/Statistics';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <BecomeMember></BecomeMember>
            <Statistics></Statistics>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;