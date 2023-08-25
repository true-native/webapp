import React from 'react'

import styles from '../inputs/Input.module.css'

const InputText = ({type, label, name, placeholder, disabled, minLength, maxLength, error, errorMessage, inputRef, onchange}) => {
    return (
        <div className={styles.input_group}>
            <label htmlFor={name} style={ disabled ? {opacity: .3} : {opacity: 1}} className={ error ? styles.hasError : '' }>
                {label}
            </label>
            <input type={type}
                className={`${error ? styles.inputError : ''} ${styles.input_base}`}
                placeholder={placeholder}
                disabled={disabled}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                ref={inputRef}
                onChange={onchange}
            />
            {error ? <small>{errorMessage}</small> : ''}
        </div>
    )
}

export default InputText