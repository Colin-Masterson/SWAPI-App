import React from 'react';

function Search({ search }) {
    return (
        <div className='search-container'>
            <input
                type='text'
                onChange={(e) => search(e)}
                placeholder='Search...'
                className='search'
            />
        </div>
    );
}

export default Search;
