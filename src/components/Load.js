import React from 'react';
import  Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Load = () => {
    return (
        < div className='vh-100  loading-container' >
            <div className='text-center spinner'>
                <Loader
                    type='Oval'
                    color='#ffc107'
                    height={70}
                     width={70}
                />
            </div>
        </div >
    )

}
export default Load;