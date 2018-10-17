import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

import logo from '../assets/img/header_logo_rtv.png';

const Layout = (props) => {
    return (
        <div className="layout">
            <header className="layout__header">
                <img className="layout__header-logo" alt="Logo" src={logo} />
                {
                    props.title ? <div className="layout__header-title">{props.title}</div>:null
                }
            </header>
            <main className="layout__content">
                <div className="layout__content-inner">
                    <Scrollbar style={{height: '100%'}}>
                        <div className="layout__container">
                            {props.children}
                        </div>
                    </Scrollbar>
                </div>
            </main>
        </div>
    );
};

export default Layout;