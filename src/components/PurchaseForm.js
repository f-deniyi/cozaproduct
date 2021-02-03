import React, { useState } from 'react';
import { useRavePayment } from 'react-ravepayment';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from 'react-redux';


const PurchaseForm = (props) => {
    const { userId, product ,publicKey} = props;
    const [modalOpen, setModalOpen] = useState(false);

    let [formDetails, setFormDetails] = useState({
        email: ''
    })

    const handleInputChange = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.id]: e.target.value
        })
    }



    //flutterwave configuration
    const config = {
        txref: userId,
        customer_email: formDetails.email,
        amount: product.price,
        PBFPubKey: publicKey,
        custom_logo: 'https://coza.org.ng/coza-normal.png',
        custom_title: 'Payment for COZA Product',
        production: true,
    }

    //Initiate flutterwave
    const { initializePayment } = useRavePayment(config);


//     const VerifyTransaction=(flwRef)=>{
//         toast.error('Transaction Closed');
//         history.push(`/transaction/${flwRef}/${userId}/${productId}`);

//    }

    const onSuccess = (ref) => {
        console.log(ref);
        window.flutter_inappwebview.callHandler('payResponse', 1, (JSON.stringify(ref))).then(function(result) {
        });
        // let flwRef=ref.data.data.flwRef
        // window.location.assign(`/transaction/${flwRef}/${userId}/${productId}`);

    }

    const onClose = () => {
        window.flutter_inappwebview.callHandler('payResponse', 2, 2).then(function(result) {
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        initializePayment(onSuccess, onClose);
    }


    return (
        <div>
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
                            <Label for='userId'>User Id</Label>
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

        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        publicKey: state.publicKey,
        product: state.product,
    }
}
export default connect(mapStateToProps, null)(PurchaseForm);