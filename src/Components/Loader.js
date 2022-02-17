import React from 'react';
import ReactLoading from 'react-loading';

function Loader() {
    return (
        <div className='load-container'>
            <h1>Loading Please Wait!</h1>
            <ReactLoading
                type='spin'
                color='##100a00'
                height={'10%'}
                width={'10%'}
                className='loader'
            />
        </div>
    );
}

export default Loader;
