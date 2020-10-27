import React, { useState } from 'react';
import VolunteerIcon from '../../icon/volunteer.png';
import './RecipientMsg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';


const RecipientMsg = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <h1 className="big-title">Recipient Message</h1>
            <p className="recipient-msg-icon">
                <FontAwesomeIcon icon={faCommentDots} size="5x" />
            </p>
            <div className="recipient-msg-box">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <p className="recipient-msg">
                            <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis omnis ad aliquid sit voluptatibus numquam incidunt, culpa odio laudantium at. Qui ab in perferendis. Incidunt, fugit. At nostrum laborum nam?
                                <FontAwesomeIcon icon={faQuoteRight} size="1x" />
                        </p>
                        <a href="#" className="recipient">Abrarul Hoque</a>
                        <p>Bakalia, Chattogram.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className="recipient-msg">
                            <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis omnis ad aliquid sit voluptatibus numquam incidunt, culpa odio laudantium at. Qui ab in perferendis. Incidunt, fugit. At nostrum laborum nam?
                            <FontAwesomeIcon icon={faQuoteRight} size="1x" />
                        </p>
                        <a href="#" className="recipient">Abrarul Hoque</a>
                        <p>Bakalia, Chattogram.</p>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default RecipientMsg;