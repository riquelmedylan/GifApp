import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('Hola Mundo')
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        inputValue.trim().length > 0 ? 
        setCategories(cats => [inputValue, ...cats]) : alert('error')
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={inputValue} 
                type="text" 
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
