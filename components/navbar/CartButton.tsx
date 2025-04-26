import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { links } from '@/utils/links'
import { LuShoppingCart } from 'react-icons/lu'

function CartButton() {
  const cartItems = 9;
  return (
    <Button  
    variant={'outline'} 
    size="icon"
    className='flex justify-center items-center relative'
    asChild
    >
       <Link href={links.CART.href}>
          <LuShoppingCart />
          <span className='absolute -top-3 -right-3 bg-blue-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs'>
             {cartItems}
          </span>
       </Link>
    </Button>
  )
}

export default CartButton