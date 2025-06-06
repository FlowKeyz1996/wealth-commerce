import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
const FavoriteButton = () => {
  return (
    <Link href={"/cart"} className="group relative">
            <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect"/>
            <span className="absolute -top-1 -right-1 bg-shop_dark_green w-3.5 h-3.5 text-white rounded-full items-center flex justify-center text-xs font-semibold">0</span>
         
         </Link>
  )
}

export default FavoriteButton