import React, { useEffect } from 'react';

const VerifyTransaction = (props) => {
    useEffect(() => {
    const queryString=window.location.search
        console.log(queryString);
    })
    return (
        <div>
            <h1>Verify Your Transaction Status</h1>
        </div>
    )

}
export default VerifyTransaction;