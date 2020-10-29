import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    //const [scholarship, setscholarship] = useState(null);

    const onSubmit = data => {
        console.log(data);
    };

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
                        errors.name &&
                        <span className="error">
                            Email is required
                                </span>
                    }

                    <br />
                    <br />
                    <input className="btn btn-danger" type="submit" />
                </form>
            </div>
        );
    };

    export default Login;