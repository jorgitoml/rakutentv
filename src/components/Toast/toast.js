import React from 'react';

const toast = (props) => {

    const baseClass = "toast";
    const styleClasses =  props.className ? 
                            Array.isArray(props.className) ? 
                                `${baseClass} ${props.className.join(' ')}`
                            :
                                `${baseClass} ${props.className}`
                          : 
                            baseClass;

    return (
        <section className={styleClasses}>
            {props.children}
        </section>
    );
};

export default toast;