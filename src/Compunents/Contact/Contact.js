import React from 'react';
import './Contact.css';
//import { useState } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';


const Contact = () => {
    

    return (
        <div>
            <h1 className="big-title">Contact</h1> <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm></ContactForm>
                    </div>


                    {/* Contact Details Computnent */}
                    <div className="col-md-6">
                        <ContactInfo></ContactInfo>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;