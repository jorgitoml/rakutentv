import React from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

import logo from '../assets/img/header_logo_rtv.png';

const Layout = (props) => {
    return (
        <div className="layout">

            <header className="layout__header">
                <Link to="/" className="layout__header__logo">
                    <img alt="Logo" src={logo} />
                </Link>
                
                {
                    props.title ? <div className="layout__header__title">{props.title}</div>:null
                }
                
            </header>

            <main className="layout__content">
                <div className="layout__content__inner">
                    <Scrollbar style={{height: '100%'}}>
                        <div className="page__container">
                            {props.children}
                        </div>
                    </Scrollbar>
                </div>
            </main>
            
        </div>
    );
};

export default Layout;