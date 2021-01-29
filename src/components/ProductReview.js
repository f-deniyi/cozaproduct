import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Loader from 'react-loader-spinner';
import Footer from './Footer';
import Header from './Header';
import book from '../assets/book.webp';
import axios from 'axios';
import { toast } from 'react-toastify';



const ProductReview = (props) => {
    let productDetails = props.match.params
    useEffect(() => { console.log(productDetails) }, [productDetails])

    // let [product, updateProduct]=useState('')

    let [formDetails, setFormDetails] = useState({
        email: '',
        userId: productDetails.userId,
        amount: ''

    })


    const handleSubmit = (e) => {
        e.preventDefault();
        updateLoadingState(!isLoading);
        toast.warning('Please wait while we process your transaction');
        handlePayment(formDetails.userId, formDetails.email, formDetails.amount)
        console.log(formDetails);
    }


    // const fetchTransactionDetails =async()=>{
    //     try{
    //         const response=axios.get('')
    //         handlePayment(response.transId, )
    //         console.log(response)
    //     }catch(err){
    //        toast.error(err.message)
    //     }
    // }


    const handlePayment = async (id, email, amount) => {
        console.log({ id, email, amount })
        const url = 'https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/payments';
        try {
            const testing = await axios.post(
                url, {
                "tx_ref": "hooli-tx-1920bbtytty",
                "amount": amount,
                "currency": "NGN",
                "redirect_url": "https://www.cozaproduct/transaction",
                "payment_options": "card",
                "meta": {
                    "consumer_id": 23,
                    "consumer_mac": "92a3-912ba-1192a"
                },
                "customer": {
                    "email": email,

                },
                "customizations": {
                    'description': 'Payment for COZA Product',
                    'logo': 'https://coza.org.ng/coza-normal.png'

                }
            },
                {
                    headers: {
                        "Authorization": 'Bearer FLWSECK-fa8d6e7ae0398beb9ffa6c98d8bc0a0e-X',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            )
            console.log(testing.data.data.link);
            window.location.replace(testing.data.data.link);

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
    const [isLoading, updateLoadingState] = useState(false);


    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="">
                    <div className="mt-5 mb-3">
                        <div className='rounded mb-2 text-center'>
                            <img src={book} style={{ width: "100%", height: "100%" }} className="img-responsive" alt='book'></img>
                        </div>
                        <div className=''>
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
                                {productDetails.productId}
                            </h5>
                            <button
                                aria-label="Close"
                                className=" close"
                                type="button"
                                disabled={isLoading}
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <ModalBody>
                            <Form className='bg-light rounded p-3' onSubmit={handleSubmit}>
                                <FormGroup controlid="Email">
                                    <Label for='email'>Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        required
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

                                <FormGroup controlid="amount">
                                    <Label for='amount'>Amount</Label>
                                    <Input
                                        type="number"
                                        placeholder="Amount"
                                        id='amount'
                                        value={formDetails.amount}
                                        onChange={handleInputChange} />
                                </FormGroup>

                                <button  className="my-2 w-100 btn btn-warning font-weight-bold" disabled={isLoading} type="submit" >
                                    {!isLoading ? 'Confirm Payment' : <Loader type='Oval' color='#fff' height={30} width={30} />}
                                </button>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="secondary"
                                type="button"
                                disabled={isLoading}
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                Close
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