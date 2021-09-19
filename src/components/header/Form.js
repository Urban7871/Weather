import React, { useState } from 'react';


const Form = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={() => onSubmit(input)}>
            <input type='text' value={input} onChange={onChange}/>
            <button>Search</button>
        </form>
    )
}

export default Form