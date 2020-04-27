import React from 'react';

const PersonForm = ({ onSubmit, name, number, nameChange, numberChange }) => {
    // console.log('PersonForm props value is', { onSubmit, name, number, nameChange, numberChange })

    return (
        <form>
            <div>
                name: <input value={name} onChange={nameChange} />
                number: <input value={number} onChange={numberChange} />
            </div>
            <div>
                <input type="button" value="add" onClick={onSubmit} />
            </div>
        </form>
    )
}

export default PersonForm;
