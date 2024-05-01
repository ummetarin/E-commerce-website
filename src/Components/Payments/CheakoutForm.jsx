import { CardElement, useElements,Elements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxios from '../Hook/useAxios';
import useCarts from '../Hook/useCarts';

const CheakoutForm = () => {

    const [error,setError]=useState();

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxios();
    const[clientsecret,setClientsecret]=useState()
    const[cartdata,refetch]=useCarts();
    const totalprice=cartdata.reduce((total,item)=>total+item.price,0)
    

    useEffect(()=>{
      axiosSecure.post('/create_payment',{price:totalprice})
      .then(res=>{
        setClientsecret(res.data.clientSecret);
      })


    },[axiosSecure,totalprice])
 
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

         if (card == null) {
          return;
         }
         const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
          }
        
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className='py-3'>
     <button className='bg-orange-600 text-white btn' type="submit" disabled={!stripe || !clientsecret}>
        Pay
      </button>
     </div>
     <p className='text-red-500'>{error}</p>
    </form>
            
        </div>
    );
};

export default CheakoutForm;