import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Error from '../../components/Error';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Load from '../../components/Load';
import ProductReview from '../../components/ProductReview';
import PurchaseForm from '../../components/PurchaseForm';
import { fetchProduct } from '../../redux/product/action';
import { fetchPublicKey } from '../../redux/publicKey/action';


const ProductStore = (props) => {
    let urlParams = props.match.params;
    const { productId, userId } = urlParams;
    let { error, isLoading, fetchProduct, fetchPublicKey } = props


    useEffect(() => {
        fetchProduct(productId);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        fetchPublicKey();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <React.Fragment>
            <Header />
            {error ? <Error /> :

                (isLoading ? <Load /> :
                    <div className="container mt-5">
                        <div className="py-3">
                            <ProductReview />
                            <PurchaseForm userId={userId} productId={productId} />
                        </div>
                    </div>
                )
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
    fetchPublicKey: fetchPublicKey

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);