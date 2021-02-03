import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import Load from './Load';
import { fetchProduct } from '../redux/product/action';

const VerifyTransaction = (props) => {
    const {flwRef,userId,productId}=props.match.params;
    const { isLoading, error,  } = props

    useEffect(() => {
        console.log({flwRef,userId,productId});
    }, [])// eslint-disable-line react-hooks/exhaustive-deps



    return (
        <React.Fragment>
            <Header />
            {error ? <h1>{error}</h1> :

                isLoading ?
                    <Load /> :
                    <div>
                        <h1>Verify Your Transaction Status</h1>
                    </div>

            }
            <Footer />
        </React.Fragment>


    )

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}
const mapDispatchToProps = {
    fetchProduct: fetchProduct,

}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyTransaction);