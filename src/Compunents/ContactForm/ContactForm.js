import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const [message, setMessage] = useState(null);

    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm('gmail', 'email_jubairctg99', e.target, 'user_TocmKjZePBtJZJH2op18a')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }
    const onSubmit = data =>{
        console.log(data);
        setMessage(data);
    }

    return (
        <div>

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
                    errors.email &&
                    <span className="error">
                        Email is required
                                </span>
                }


                <h3 className="input-title">Subject ‍<span><small>(Optional)</small></span></h3>
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
                    errors.message &&
                    <span className="error">
                        Message is required
                                </span>
                }

                <br />
                <br />
                <input className="btn btn-danger" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;