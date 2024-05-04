import { CardElement, useElements,Elements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxios from '../Hook/useAxios';
import useCarts from '../Hook/useCarts';
import { AuthContext } from '../Security/AuthProvider';

const CheakoutForm = () => {

    const [error,setError]=useState();
    const{user}=useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxios();
    const[clientsecret,setClientsecret]=useState()
    const[cartdata,refetch]=useCarts();
    const[transection,setTransection]=useState()
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

          const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientsecret,{
            payment_method:{
              card:card,
              billing_details:{
                email: user?.email || "anonymous",
                name:user?.displayName || "anonymous"
              }
            }
          })

          if(confirmError){
            console.log("confirm eror");
          }
          else{
            console.log(paymentIntent,"payment intents");
            if(paymentIntent.status==="succeeded"){
              console.log("transectiom id",paymentIntent.id);
              setTransection(paymentIntent.id);

              const payment={
                price:totalprice,
                email:user?.email,
                name:user?.displayName,
                date:new Date(),
              }

            }
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
     {
      transection&& <p className='text-green-700  font-bold ml-1'>transection Id :{transection}</p>
     }
    </form>
            
        </div>
    );
};

export default CheakoutForm;