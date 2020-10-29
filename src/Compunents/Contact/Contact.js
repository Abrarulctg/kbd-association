import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
//import { useState } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    // function refreshPage() {
    //     window.location.reload(false);
    //     alert("Scholarship Information has been sent successfully to Database, Click ok to refresh the page.");
    // }


    const onSubmit = data => {
        console.log(data);
        //scholarshipInfo(data);

        // fetch('https://isfbd20.herokuapp.com/addScholarship', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(scholarshipInfo => {
        //         setscholarship(scholarshipInfo.id)
        //         refreshPage()
        //     });
    };

    return (
        <div>
            <h1 className="big-title">Contact</h1> <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mini-type-title">Drop a Message</h1>
                        <small>We will contact you ASAP!</small>
                        <br /> <br />  <br />

                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                            <h3 className="input-title">Name</h3>
                            <input
                                name="name"
                                ref={register({ required: true })}
                                placeholder="Name"
                                className="form-control"
                            />
                            {
                                errors.name &&
                                <span className="error">
                                    Name is required
                                </span>
                            }


                            <h3 className="input-title">Email</h3>
                            <input
                                name="email"
                                ref={register({ required: true })}
                                placeholder="sample@domain.com"
                                className="form-control"
                            />
                            {
                                errors.name &&
                                <span className="error">
                                    Email is required
                                </span>
                            }


                            <h3 className="input-title">Subject</h3>
                            <input
                                name="subject"
                                ref={register({ required: false })}
                                placeholder="Subject (Optional)"
                                className="form-control"
                            />

                            <h3 className="input-title">Message</h3>
                            <textarea
                                name="message"
                                ref={register({ required: true })}
                                placeholder="Your Message"
                                className="form-control"
                            >
                            </textarea>
                            {
                                errors.name &&
                                <span className="error">
                                    Message is required
                                </span>
                            }

                            <br />
                            <br />
                            <input className="btn btn-danger" type="submit" />
                        </form>

                    </div>

                    <div className="col-md-6">
                        <ContactInfo></ContactInfo>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;