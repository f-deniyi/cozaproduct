import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Load from './Load';

const VerifyTransaction = (props) => {
    const { isLoading } = props
    useEffect(() => {
        const queryString = window.location.search
        console.log(queryString);
    })
    return (

        isLoading ?
            <Load /> :
            <div>
                <h1>Verify Your Transaction Status</h1>
            </div>

    )

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,

    }
}

export default connect(mapStateToProps)(VerifyTransaction);