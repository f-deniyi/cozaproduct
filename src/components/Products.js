import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Footer from './Footer';
import Header from './Header';
import book from '../assets/book.webp';
import { useRavePayment } from 'react-ravepayment';
import { toast } from 'react-toastify';
import axios from 'axios';


const Product = (props) => {
    let urlParams = props.match.params;
    useEffect(() => {
        fetchKeyAndProduct();
    })
    let [publicKey, setPublicKey] = useState('');
    let [product, updateProduct]=useState({});

    let productDetails = {
        productId: urlParams.productId,
        userId: urlParams.userId
    }


    let [formDetails, setFormDetails] = useState({
        email: '',
        userId: '',
        price: ''

    })

    
    const fetchKeyAndProduct = () => {
        // fetchPublicKey();
        loadProductDetails()
        console.log(productDetails);
    }


    const fetchPublicKey = async () => {
        try {
            const data = await axios.get('https://cors-anywhere.herokuapp.com/http://appadmin.coza.org.ng/api/v1/payment/initiate?name=store&gateway=flutterwave');
            let publicKey = data.data.flutterwave_settings.public_key;
            setPublicKey(publicKey);
        } catch (err) {
            console.log(err);
        }
    }

    const loadProductDetails = async () => {
        console.log("not working yet");
    }


    const config = {
        txref: 'rave-12345',
        customer_email: formDetails.email,
        customer_phone: '234803390095',
        amount: formDetails.price,
        PBFPubKey: publicKey,
        custom_logo: 'https://coza.org.ng/coza-normal.png',
        custom_title:'Payment for COZA Product',
        production: true,
    }


    const { initializePayment } = useRavePayment(config)
    const onSuccess = () => {

    }
    const onClose = () => {
        toast.error('Transaction Closed')
        console.log('transaction closed');
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formDetails);
        initializePayment(onSuccess, onClose);
        // toast.success('User succesfully captured',{autoClose:3000});
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
            <div className="container">
                <div className="">
                    <div className="mt-5 mb-3">
                        <div className='rounded mb-2 text-center'>
                            <img src={book} className="img-responsive" alt='book'></img>
                        </div>
                        <div className='mx-auto w-75'>
                            <h5 className="my-3">Name: Not in Vain! </h5>
                            <h5 className="mb-2">Price: #5000</h5>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Button
                            color="info"
                            type="button"
                            className='mt-5'
                            onClick={() => setModalOpen(!modalOpen)}
                        >
                            Buy
                    </Button>
                    </div>


                    <Modal isOpen={modalOpen}>
                        <div className=" modal-header">
                            <h5 className=" modal-title" id="exampleModalLabel">
                                Not in Vain!
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
                            <Form className='bg-light rounded p-3' >
                                <FormGroup controlid="Email">
                                    <Label for='email'>Email</Label>
                                    <Input
                                        type="email"
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
                                        value={formDetails.userId}
                                        disabled
                                        onChange={handleInputChange} />
                                </FormGroup>

                                <FormGroup controlid="price">
                                    <Label for='price'>Price</Label>
                                    <Input
                                        type="number"
                                        placeholder="price"
                                        id='price'
                                        value={formDetails.price}
                                        onChange={handleInputChange} />
                                </FormGroup>
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
                            <Button color="primary" type="button" onClick={handleSubmit}>
                                Confirm Payment
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )

}
export default Product;