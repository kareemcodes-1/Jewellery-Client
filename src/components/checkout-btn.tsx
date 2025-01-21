import  {useState } from 'react'
import {loadStripe, Stripe} from '@stripe/stripe-js';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router';
import Loading from './loading';

const CheckoutBtn = () => {

    const {cart, userInfo} = useStore();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


      const handleCheckout = async () => {
        if(userInfo){
        setLoading(true);
        const stripe: Stripe | null = await loadStripe('pk_test_51Qav8tDmmBNQcKWYVvijetAK83TC7GPPM9yu9Vco1HxR8CyBJymfgflvLMIV2Bu49Q6QHjWirrLbW6qXt5jt6FnX00uf7OkJhc');
          try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/stripe/checkout`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({products: cart, userInfo})
             });
      
             const session = await res.json();
      
             const result = stripe?.redirectToCheckout({
               sessionId: session.id
             });
             
  
             if((await result)?.error){
              setLoading(false);
              console.log((await result)?.error)
             }
          } catch (error) {
              console.log(error);
              setLoading(false);
          }
        }else{
          navigate('/login');
        }
      }
    

  return (
    <button onClick={handleCheckout} type="button" className='bg-black mt-[.5rem] w-full p-[.8rem] tracking-[.4rem] text-[.8rem] font-bold text-white  text-center uppercase cursor-pointer'>
        {loading ? <Loading /> : 'checkout'}
    </button>
  )
}

export default CheckoutBtn