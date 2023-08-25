import React from 'react'

import styles from '../inputs/TextArea.module.css'

const TextArea = ({type, label, name, placeholder, disabled, minLength, maxLength, rows, error, errorMessage, inputRef, onchange}) => {
    return (
        <div className={styles.input_group}>
            <label htmlFor={name} style={ disabled ? {opacity: .3} : {opacity: 1} } className={ error ? styles.hasError : '' }>
                {label}
            </label>
            <textarea type={type}
                className={`${error ? styles.inputError : ''} ${styles.text_area_base}`}
                placeholder={placeholder}
                disabled={disabled}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                rows={rows}
                ref={inputRef}
                onChange={onchange}
            >
            </textarea>
            {error ? <small>{errorMessage}</small> : ''}
        </div>
    )
}

export default TextArea