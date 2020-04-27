import React from 'react';

const Filter = ({searchTerm, onChange, searchResults}) => {
    // console.log('Filter props value is', {searchTerm, onChange, searchResults})

    return (
        <div>
            filter shown with <input type="text" value={searchTerm} onChange={onChange} />
            <ul>
                {searchResults.map((item, i) => (<li key={i}>{item.name}</li>))}
            </ul>
        </div>
    )
}

export default Filter;
