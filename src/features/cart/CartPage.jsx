import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { base } from '../../data/apis';
import { setCarts } from './cartSlice';


const CartPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);



  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.price, 0);




  const handleSubmit = async () => {

  }

  return (
    <div className='p-5'>
      {carts.length === 0 ? <h1>list is empty add some</h1> :
        <div>

          <div >
            {carts.map((cart) => {
              return <div className='grid grid-cols-4 gap-12' key={cart.product}>
                <img className='w-full h-36' src={`${base}/${cart.image}`} alt="" />
                <div>
                  <select defaultValue={cart.qty} name="qty" id="" onChange={(e) => {

                    dispatch(setCarts({ ...cart, qty: Number(e.target.value) }));
                  }}>
                    {[...Array(cart.stock).keys()].map((c) => {
                      return <option key={c + 1} value={c + 1}>{c + 1}</option>
                    })}
                  </select>
                </div>
                <h1>Rs.{cart.price}</h1>
              </div>
            })}

          </div>

          <div className='flex justify-between'>
            <h1>Total</h1>
            <p>{total}</p>
          </div>
          <Button onClick={handleOpen} className='mt-10'>Place An Order</Button>
          {/* <CustomDialog open={open} handleOpen={handleOpen} handleConfirm={handleSubmit} /> */}
        </div>}

    </div>
  )
}

export default CartPage