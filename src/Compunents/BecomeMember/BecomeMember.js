import React, { useState } from 'react';
import './BecomeMember.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Login from '../Login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const BecomeMember = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="become-member-box">
            <div className="text-center">
                <h1 className="become-member-title">Become a part of great work today</h1>
                <p>You can give Blood at any Blood Donation Vanues all over the Bangladesh. </p> <br />

                <button className="btn btn-danger" type="button" onClick={handleOpen}>
                    Join with us
                </button>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className="paper">
                            <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={handleClose} className="window-close"/>
                            <Login></Login>
                        </div>
                    </Fade>
                </Modal>

            </div>
        </div>
    );
};

export default BecomeMember;