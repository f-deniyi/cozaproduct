import React, { useEffect } from 'react';

const VerifyTransaction=(props)=>{
    useEffect(()=>{
        console.log(props.match.params)
    })
    
}
export default VerifyTransaction;