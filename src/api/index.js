import axios from 'axios';

const config = {
    headers: { "Access-Control-Allow-Origin": "*" }
}
export const fetchPublicKeyAPI = async () => {
        const url = 'https://appadmin.coza.org.ng/api/v1/payment/initiate?name=store&gateway=flutterwave'
        const data = await axios.get(url, config);
        // console.log(data);
        // console.log(data.data.flutterwave_settings.public_key);
        return data.data.flutterwave_settings.public_key;
    
}

export const fetchProductDetailsAPI = async (productId) => {
    const url = `https://appadmin.coza.org.ng/api/v1/webstore/${productId}/details`;

    const productDetails = await axios.get(url, config);
    // console.log(productDetails)
    return (productDetails.data.data);

}
