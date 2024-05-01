import {loadStripe} from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheakoutForm from './CheakoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);
const Payment = () => {
    return (
        <div>
            <h1>hi pay</h1>

            <Elements stripe={stripePromise}>
                <CheakoutForm></CheakoutForm>
            </Elements>

          
  
        </div>
    );
};

export default Payment;