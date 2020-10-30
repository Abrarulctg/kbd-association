import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css';


const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    //const [scholarship, setscholarship] = useState(null);

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <FontAwesomeIcon icon={faUser} size="5x" className="user-icon" />

            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="name"
                    ref={register({ required: true })}
                    placeholder="username / e-mail"
                    className="form-control"
                />
                {
                    errors.name &&
                    <span className="error">
                        username / Email is required
                                </span>
                }
                <br />

                <InputGroup className="mb-3">
                    <FormControl
                        name="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        ref={register({ required: true })}
                        placeholder="password"
                        className="form-control pass"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text
                            id="basic-addon2"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="eye-icon"
                            
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                {
                    errors.password &&
                    <span className="error"> password is required </span>
                }

                <br />
                <br />
                <input className="btn btn-danger" type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;