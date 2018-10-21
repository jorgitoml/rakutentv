import React from 'react';

import logo from '../../assets/img/logo_rtv.png';
import Toast from '../Toast/toast';

const loading = (props) => {
    return (
        <div className="loading">
            <figure className="loading__figure">
                <img src={logo} alt="Logo" className="loading__figure__image" />
            </figure>
            
            {
                props.error ? 
                    <Toast className={"loading__error"}>
                        <h1 className="loading__error__title">Se ha producido un error</h1>
                        <p className="loading__error__subtitle">{props.message}</p>
                    </Toast>
                : 
                    null
            }
        </div>
    );
};

export default loading;