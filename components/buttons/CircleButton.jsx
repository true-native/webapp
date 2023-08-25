import React from 'react'
import styles from '../buttons/CircleButton.module.css'

import { IoHelp } from 'react-icons/io5';

const CircleButton = ({primary, secondary, destructive, success, warning, grey, onClick, icon}) => {
    let buttonType;

    primary ? buttonType = styles.primary : null;
    secondary ? buttonType = styles.secondary : null;
    destructive ? buttonType = styles.destructive : null;
    success ? buttonType = styles.success : null;
    warning ? buttonType = styles.warning : null;
    grey ? buttonType = styles.grey : null;

    return (
        <button className={`${styles.button} ${buttonType}`}
            onClick={onClick}
        >
            {icon ? icon : <IoHelp/>}
        </button>
    )
}

export default CircleButton