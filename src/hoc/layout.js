import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

const Layout = (props) => {
    return (
        <div className="page">
            <header className="page__header">
                HEADER!!!!
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