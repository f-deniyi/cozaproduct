import axios from 'axios'
export const fetchPublicKeyAPI = async () => {
    try {
        const data = await axios.get('https://cors-anywhere.herokuapp.com/http://appadmin.coza.org.ng/api/v1/payment/initiate?name=store&gateway=flutterwave');
        console.log(data.data.flutterwave_settings.public_key);
        return data.data.flutterwave_settings.public_key;
    } catch (err) {
        console.log(err);
    }
}

export const fetchProductDetailsAPI = async (productId) => {
    const url = `https://cors-anywhere.herokuapp.com/https://appadmin.coza.org.ng/api/v1/webstore/${productId}/details`;
    try {
        const productDetails = await axios.get(url);
        console.log(productDetails.data.data)
        return (productDetails.data.data);
    } catch (err) {
        console.log(err);
    }
}
