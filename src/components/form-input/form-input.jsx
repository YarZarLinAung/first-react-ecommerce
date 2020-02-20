import React from 'react'
import './form-input.scss'

const FormInput = ({ handlerChange, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handlerChange} {...otherProps}></input>
        {
            label ?
            (<lable className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}      
            </lable>)
            : null
        }
    </div>
)

export default FormInput