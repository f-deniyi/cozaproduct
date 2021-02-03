import React from 'react';
import { connect } from 'react-redux';

const Error = (props) => {
    const {error}=props
    return (
        <div className='position-relative vh-100'>
            <div className='error w-75 text-center'>
                <h5>{error}</h5>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}
export default connect(mapStateToProps, null)(Error)