import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Footer from './Footer';
import Header from './Header';
import book from '../assets/book.webp';
import axios from 'axios';



const ProductReview = (props) => {
    let productDetails = props.match.params
    useEffect(() => { console.log(productDetails) }, [productDetails])

    let [formDetails, setFormDetails] = useState({
        email: '',
        userId: productDetails.userId,
        price: ''

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(formDetails.userId, formDetails.email,formDetails.amount)
        console.log(formDetails);
    }
    const handlePayment = (id, email, amount) => {
        console.log({id,email,amount})
        const url = 'https://api.flutterwave.com/v3/payments';
        try {
            axios.post(
                url, {
                data: {
                    "tx_ref": "hooli-tx-1920bbtytty",
                    "amount": amount,
                    "currency": "NGN",
                    "redirect_url": "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
                    "payment_options": "card",
                    "meta": {
                        "consumer_id": 23,
                        "consumer_mac": "92a3-912ba-1192a"
                    },
                    "customer": {
                        "email": email,

                    },
                    "customizations": {
                        id

                    }
                }
            },
                {
                    headers: {
                        Authorization: 'Bearer FLWSECK-fa8d6e7ae0398beb9ffa6c98d8bc0a0e-X'
                    }
                }
            )

        } catch (err) {
            console.log(`error:${err}`)
            
        }


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
                            Confirm Payment
                    </Button>
                    </div>


                    <Modal isOpen={modalOpen}>
                        <div className=" modal-header">
                            <h5 className=" modal-title" id="exampleModalLabel">
                                {productDetails.productId}
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
                                Save changes
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )

}
export default ProductReview;