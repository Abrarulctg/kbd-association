import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderOne from '../../slider/slider01.jpg';
import sliderTwo from '../../slider/slider02.jpg';
import './Slider.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ContactInfo from '../ContactInfo/ContactInfo';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        Your Blood Can <br />
                        Bring Smile in the  <br />
                        face of another person
                    </h2>
                    <button className="btn btn-danger">Donate Now+</button>
                    <button className="btn btn-dark" type="button" onClick={handleOpen}>
                        Contact Now
                    </button>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal-c"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className="paper-c">
                               <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={handleClose} className="window-close"/>
                                <ContactInfo></ContactInfo>
                            </div>
                        </Fade>
                    </Modal>

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
                        Your Blood Can <br />
                        Bring Smile in the  <br />
                        face of another person
                    </h2>
                    <button className="btn btn-danger">Donate Now+</button>
                    <button className="btn btn-dark" type="button" onClick={handleOpen}>
                        Contact Now
                    </button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};


export default Slider;