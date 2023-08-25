"use client"

import { useState } from 'react';
import { IoMenu, IoClose, IoLogoInstagram, IoLogoFacebook, IoCallOutline, IoLeafOutline, IoMailOutline, IoBagHandleOutline, IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link';
import Image from 'next/image';

const MobileNavigation = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    return (
        <>
            <nav className='h-[90px] w-full flex items-center justify-between p-8 bg-white shadow-nav fixed z-50 top-0 left-0 lg:hidden'>
                <Link href="/">
                    <Image
                        src="/true-native-logo.svg"
                        alt="True Native"
                        width={140}
						height={100}
                    />
                </Link>
                {
                    !isPaneOpen ?
                    <IoMenu onClick={() => setIsPaneOpen((current) => !current)} className='text-4xl stroke-primary-500 fill-primary-500 cursor-pointer'/> :
                    <IoClose onClick={() => setIsPaneOpen((current) => !current)} className='text-4xl stroke-primary-500 fill-primary-500 cursor-pointer'/>
                }
            </nav>
            <div className={`fixed top-[90px] -right-full z-20 h-full w-fit max-w-[300px] bg-white flex flex-col items-end justify-between transition-all duration-300 ${isPaneOpen ? 'right-0 shadow-mobile-nav' : ''}`}>
                <ul className='p-8'>
                    <li className='flex flex-row items-center pr-8 my-4 text-primary-500'
						onClick={() => setIsPaneOpen((current) => !current)}
					>
                        <IoHomeOutline className='text-lg text-secondary-500 mr-4'/>
                        <Link href="/">Home</Link>
                    </li>
                    <hr className='flex h-px w-full text-gray-100'/>
                    <li className='flex flex-row items-center pr-8 my-4 text-primary-500'
						onClick={() => setIsPaneOpen((current) => !current)}
					>
                        <IoLeafOutline className='text-lg text-secondary-500 mr-4'/>
                        <Link href="/about-us">About</Link>
                    </li>
                    <hr className='flex h-px w-full text-gray-100'/>
                    <li className='flex flex-row items-center pr-8 my-4 text-primary-500'
						onClick={() => setIsPaneOpen((current) => !current)}
					>
                        <IoMailOutline className='text-lg text-secondary-500 mr-4'/>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <hr className='flex h-px w-full text-gray-100'/>
                    <li className='flex flex-row items-center pr-8 my-4 text-primary-500'
						onClick={() => setIsPaneOpen((current) => !current)}
					>
                        <IoBagHandleOutline className='text-lg text-secondary-500 mr-4'/>
                        <Link href="/products">Products</Link>
                    </li>
                    <hr className='flex h-px w-full text-gray-100'/>
                    <li className='flex flex-row items-center font-semibold pr-8 my-4 text-primary-500'>
                        <IoCallOutline className='text-lg text-secondary-500 mr-4'/>
                        +1 800 968 9467
                    </li>
                    <div className='w-full flex items-center mt-16 text-2xl gap-4 text-primary-300'>
                        <Link href="https://www.instagram.com/naturesfoodz/" target="_blank" className='bg-slate-100 p-3 rounded-lg'><IoLogoInstagram/></Link>
                        <Link href="https://www.facebook.com/naturesfoodz" target="_blank" className='bg-slate-100 p-3 rounded-lg'><IoLogoFacebook/></Link>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default MobileNavigation