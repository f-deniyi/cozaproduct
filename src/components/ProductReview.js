import React from 'react';
import { connect } from 'react-redux';
const ProductReview = (props) => {
    const {product}=props;
    return (
        <div>
            <div className="mt-4 mb-3 card">
                <div className='text-center'>
                    <img src={product.cover_image} className="card-img-top img-fluid" alt='product'></img>
                </div>
                <div className='card-body'>
                    <h5 className="my-2"><span className='font-weight-bold'>Title:</span> {`${product.title}`}</h5>
                    <h5 className="mb-2"><span className='font-weight-bold'>Author:</span> {`${product.author}`}</h5>
                    <h5 className="mb-2"><span className='font-weight-bold'>Description:</span> {`${product.description}`}</h5>
                    <h5 className="mb-2"><span className='font-weight-bold'>Price:</span> {`${product.price}`}</h5>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        product: state.product,
    }
}
export default connect(mapStateToProps, null)(ProductReview);