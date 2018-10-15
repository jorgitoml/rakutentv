import React from 'react';

import logo from '../assets/logo_rtv.png';

const loading = (props) => {
    return (
        <div className="loading">
            <figure className="loading__image-box">
                <img src={logo} alt="Logo" className="loading__image" />
            </figure>
            {
                props.error ? 
                <section className="loading__error-box">
                    <h1 className="loading__error-title">Se ha producido un error</h1>
                    <p className="loading__error-subtitle">Intentelo pasados unos minutos</p>
                </section> 
                : 
                null
            }
        </div>
    );
};

export default loading;