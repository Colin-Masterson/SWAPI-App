import React from 'react';

function Search({ setSearch }) {
    return (
        <div className='search-container'>
            <input
                type='text'
                className='input'
                onChange={(e) => setSearch(e)}
                placeholder='Search...'
                className='search'
            />
        </div>
    );
}

export default Search;
