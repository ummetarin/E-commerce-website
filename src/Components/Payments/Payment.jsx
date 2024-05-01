import {loadStripe} from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    return (
        <div>
            <h1>hi pay</h1>

            <Elements stripe={stripePromise}>

            </Elements>

          
  
        </div>
    );
};

export default Payment;