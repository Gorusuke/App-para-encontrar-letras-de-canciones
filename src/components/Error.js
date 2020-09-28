import React from 'react';

const Error = ({mensaje}) => {
    return (
        <p className="alert alert-danger text-center col-md-8 mx-auto p-2">{mensaje}</p>
    );
}
 
export default Error;