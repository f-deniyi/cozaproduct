import React, { useEffect } from 'react';

const VerifyTransaction = (props) => {
    useEffect(() => {
        console.log(props.match.params)
    })
    return (
        <div>
            <h1>Verify Your Transaction Status</h1>
        </div>
    )

}
export default VerifyTransaction;