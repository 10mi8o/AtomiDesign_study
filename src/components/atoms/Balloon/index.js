import React from 'react';
import styles from './styles.css'

const Balloon = ({children, className, ...props}) => {
    return(
        <div className={'balloon' + [className].join('')} {...props}>
            {children}
        </div>
        )
};

export default Balloon;
