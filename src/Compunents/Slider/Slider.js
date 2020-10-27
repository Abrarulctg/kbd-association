import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderOne from '../../slider/slider01.jpg';
import sliderTwo from '../../slider/slider02.jpg';
import './Slider.css';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className="slider-mini-title">Donate Blood, Save Life !!</h5>
                    <h2 className="slider-big-title">
                        Your Blood <br />
                        Can Bring Smile <br />
                        in the face of another person
                    </h2>
                    <button className="btn btn-danger">Donate Now +</button>
                    <button className="btn btn-dark">Contact Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h5 className="slider-mini-title">Donate Blood, Save Life !!</h5>
                    <h2 className="slider-big-title">
                        Your Blood <br />
                        Can Bring Smile <br />
                        in the face of another person
                    </h2>
                    <button className="btn btn-danger">Donate Now +</button>
                    <button className="btn btn-dark">Contact Now</button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};


export default Slider;