import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="error-code"> <span>4</span>0<span>4</span> </h1>
            <h2>Page not Found!!!</h2>
            <h3>It is look like nothing found at this Url. Please Check the Url carefully.</h3>
            <br/>
            <br/>
            <br/>
            <a href="/home"><button className="btn btn-danger">Go Back to Home</button></a>
        </div>
    );
};

export default NotFound;