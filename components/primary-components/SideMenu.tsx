import React, { FC } from 'react';
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/Index';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
           <div className={`fixed inset-y-0 h-screen bg-black/50  text-white/80 left-0 z-50 w-full shadow-xl ${isOpen? "translate-x-0":"-translate-x-full"} hoverEffect`}>
              <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green gap-6 flex flex-col">
                <div className="flex items-center justify-center gap-5">
                    <Logo className="text-white" spanDesign="hover:text-white"/>
                    <button onClick={onClose} className="hover:text-shop_light_green hoverEffect">
                        <X/>
                    </button>
                </div>
                <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
                    {headerData?.map((item) => (
                       <Link key={item?.title} href={item?.href} className={`hover:text-shop_light_green hoverEffect ${pathname === item?.href &&  "text-shop_light_green"}`}>
                        {item?.title}
                       </Link>
                    ))}
                </div>
                <SocialMedia/>
              </div>
           </div>
  );
};

export default SideMenu;
