import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useRavePayment } from 'react-ravepayment';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { fetchPublicKey } from '../redux/publicKey/action';
import { fetchProduct } from '../redux/product/action';
import Footer from './Footer';
import Header from './Header';
import Load from './Load';
import { useHistory } from "react-router-dom";
import VerifyTransaction from './VerifyTransaction';


const Product = (props) => {
    let urlParams = props.match.params;
    const { productId, userId } = urlParams;
    const { fetchProduct, fetchPublicKey, publicKey, product, isLoading, error } = props

    useEffect(() => {
        fetchKeyAndProduct()
        //eslint ignore nextl
    }, [])

    const fetchKeyAndProduct = () => {
        fetchPublicKey();
        fetchProduct(productId);
    }


    let [formDetails, setFormDetails] = useState({
        email: ''
    })

    //flutterwave configuration
    const config = {
        txref: userId,
        customer_email: formDetails.email,
        customer_phone: '234803390095',
        amount: product.price,
        PBFPubKey: publicKey,
        custom_logo: 'https://coza.org.ng/coza-normal.png',
        custom_title: 'Payment for COZA Product',
        production: true,
    }

    //Initiate flutterwave
    const { initializePayment } = useRavePayment(config);

    // let history=useHistory();

    // const VerifyTransaction=()=>{
    //      toast.error('Transaction Closed');
    //      history.push(`/transaction/${userId}`);

    // }


    const onSuccess = (reference) => {

        console.log(reference);

    }

    //
    const onClose = () => {
        toast.error('Transaction Closed');

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formDetails);
        initializePayment(onSuccess, onClose);
    }

    const handleInputChange = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.id]: e.target.value
        })
    }
    const [modalOpen, setModalOpen] = useState(false);





    return (
        <React.Fragment>
            <Header />
            {error && toast.warning(error)}
            {  error ?
                <div className='position-relative vh-100'>
                    <div className='error'>
                        <h5>{error}</h5>
                    </div>
                </div> : isLoading ? <Load /> :

                    <div className="container mt-5">
                        <div className="py-3">
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

                            <div className='text-center py-2'>
                                <Button
                                    color="warning"
                                    type="button"
                                    className='mb-5 w-50 font-weight-bold'
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Buy
                    </Button>
                            </div>


                            <Modal isOpen={modalOpen}>
                                <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        {product.title}
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <ModalBody>
                                    <Form className='bg-light rounded p-3' onSubmit={handleSubmit} >
                                        <FormGroup controlid="Email">
                                            <Label for='email'>Email</Label>
                                            <Input
                                                type="email"
                                                required
                                                placeholder="Email"
                                                id='email'
                                                value={formDetails.email}
                                                onChange={handleInputChange} />
                                            <FormText>Enter your Email to recieve Receipt</FormText>
                                        </FormGroup>

                                        <FormGroup controlid="userId">
                                            <Label for='userId'>  User Id</Label>
                                            <Input
                                                type="text"
                                                placeholder="User Id"
                                                id='userId'
                                                value={userId}
                                                disabled
                                            />
                                        </FormGroup>

                                        <FormGroup controlid="price">
                                            <Label for='price'>Price</Label>
                                            <Input
                                                type="number"
                                                placeholder="price"
                                                id='price'
                                                disabled
                                                value={product.price}
                                            />
                                        </FormGroup>
                                        <button className='btn w-100 font-weight-bold btn-warning' type="submit">
                                            Confirm Payment
                                </button>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Close
                            </Button>
                                </ModalFooter>
                            </Modal>

                        </div>
                    </div>
            }
            <Footer />
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        publicKey: state.publicKey,
        product: state.product,
        error: state.error
    }
}
const mapDispatchToProps = {
    fetchProduct: fetchProduct,
    fetchPublicKey: fetchPublicKey

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);