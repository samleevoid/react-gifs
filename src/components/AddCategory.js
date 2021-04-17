import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

    //Aquest error és pq el useState tal com està a sota és undefined i més avall el inputValue treu aquest error, s'ha de posar string buid ''
    // const [inputValue, setInputValue] = useState();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit Fet!')
        if( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        // <> //no cal pq el form em fa de 'fragment'
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}