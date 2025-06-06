import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
         <Link href={"/cart"} className="group relative">
            <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect"/>
            <span className="absolute -top-1 -right-1 bg-shop_dark_green w-3.5 h-3.5 text-white rounded-full items-center flex justify-center text-xs font-semibold">0</span>
         
         </Link>
  )
}

export default CartIcon