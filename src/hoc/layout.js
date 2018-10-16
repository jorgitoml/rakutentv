import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import logo from '../assets/header_logo_rtv.png';

const Layout = (props) => {
    return (
        <div className="page">
            <header className="page__header">
                <img className="page__header-logo" alt="Logo" src={logo} />
                {
                    props.title ? <div className="page__header-title">{props.title}</div>:null
                }
            </header>
            <main className="page__content">
                <div className="page__content-inner">
                    <Scrollbars
                        renderThumbVertical={props => <div {...props} className="scroll-thumb-vertical"/>}
                    >
                        {props.children}
                    </Scrollbars>
                </div>
            </main>
        </div>
    );
};

export default Layout;