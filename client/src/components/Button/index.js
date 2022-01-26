import React from 'react';

import styles from './Button.module.scss'

const Button = ({onClickAction,text}) => {
    return (
        <div>
            <button className={styles.button} onClick={onClickAction}>
                <span>{text}</span>
            </button>
        </div>

    );
};

export default Button;
