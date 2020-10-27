import React from 'react';
import './Statistics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faHandHoldingWater, faSmile, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
    return (
        <div className="container">
            <div className="statistics-block">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card statistics">
                            <a href="#"><FontAwesomeIcon icon={faHandHoldingWater} size="5x" /></a>
                            <p className="donate-count">3215</p>
                            <p className="statistics-title">Success Donate</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card statistics">
                            <a href="#"><FontAwesomeIcon icon={faSmile} size="5x" /></a>
                            <p className="donate-count">3135</p>
                            <p className="statistics-title">Happy Doner</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card statistics">
                            <a href="#"><FontAwesomeIcon icon={faUserFriends} size="5x" /></a>
                            <p className="donate-count">1210</p>
                            <p className="statistics-title">Happy Recipient</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card statistics">
                            <a href="#"><FontAwesomeIcon icon={faAward} size="5x" /></a>
                            <p className="donate-count">507</p>
                            <p className="statistics-title">Success Awards</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;