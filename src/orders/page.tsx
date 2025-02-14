
import { useEffect } from 'react'
import Layout from '@/layout'
import { useStore } from '../store/store'
import { formatCurrency } from '../lib/formatCurrency';
import Lenis from "lenis";
import 'lenis/dist/lenis.css'


const OrderPage = () => {

  const {userInfo, orders, setOrders} = useStore();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

  useEffect(() => {
    if(userInfo){
      fetch(`${import.meta.env.VITE_SERVER_URL}/api/orders/user/${userInfo._id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include"
      })
      .then((res) => res.json())
      .then((data) => setOrders(data));
    }
  }, []);

  console.log(orders);

  return (
      <Layout>
          <div className='mt-[5rem] px-[1.5rem] text-[4rem] mb-[2rem]'>
             <h1 className='text-black lg:text-[4rem] text-[2.5rem]'>YOUR ORDERS</h1>

             <div className='lg:grid grid-cols-3 gap-[1rem] mt-[1rem]'>
                 {orders.length > 0 ? (
                    orders.map((order) => (
                        <div className='border p-[.5rem]'>
                              {order.products.map((product) => (
                                 <div className='flex items-start justify-between'>
                                    <div className='flex items-start gap-[1rem]'>
                                      <img src={product.productId.images[0]} alt={product.productId.name} className='h-[5rem] w-[5rem] border'/>
                                  
                                     <div className='leading-[1.7rem]'>
                                      <h1 className='lg:text-[1rem] text-[.8rem] tracking-[.2rem] font-semibold manrope uppercase'>{product.productId.name}</h1>
                                      <p className='font-bold lg:text-[1rem] text-[.8rem] manrope'>{formatCurrency(product.productId.price)}</p>
                                      <p className='font-medium lg:text-[1rem] text-[.8rem] manrope bebas'>Qty:{product.quantity}</p>
                                      {/* {product.productId.sizes?.map((size) => (
                                        <p className='text-[1.2rem] bebas'>Sizes:{size}</p>
                                      ))} */}
                                      </div>
                                    </div>

                                    <div className='lg:text-[1rem] text-[.8rem] font-semibold tracking-[.2rem]'>ID:#{order._id.slice(0, 6)}</div>
                                 </div>
                              ))}
                        </div>
                    ))
                 ) : (
                    <div className='text-[1rem]'>
                      No Orders.
                    </div>
                 )}
             </div>
        </div>
      </Layout>
  )
}

export default OrderPage