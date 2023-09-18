import React from 'react'
import Link from 'next/link'

import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'

import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer className='bg-primary-700 flex flex-col items-start justify-between w-full pt-[65px] pb-[50px] px-[40px] lg:flex-row lg:p-[50px] lg:items-center 2xl:py-[50px] 2xl:px-[100px]'>
                <Link href="/">
                    <img
                        src="/true-native-logo-white.svg"
                        alt="True Native"
                        width={150}
                        height={80}
                    />
                </Link>
                <ul className='lg:flex lg:flex-row lg:justify-between'>
                    <li className='my-8 mx-0 flex flex-col text-white font-bold lg:my-0 lg:mx-8 2xl:mx-12'>
                        About
                        <Link href='/about-us' className='my-2 font-normal text-primary-100'>Our Story</Link>
                        <Link href='/about-us' className='my-2 font-normal text-primary-100'>Our Mission</Link>
                    </li>
                    <li className='my-8 mx-0 flex flex-col text-white font-bold lg:my-0 lg:mx-8 2xl:mx-12'>
                        Shop
                        <Link href='/' className='my-2 font-normal text-primary-100'>Where to Buy</Link>
                    </li>
                    <li className='my-8 mx-0 flex flex-col text-white font-bold lg:my-0 lg:mx-8 2xl:mx-12'>
                        Support
                        <Link href='/contact' className='my-2 font-normal text-primary-100'>Contact us</Link>
                    </li>
                    <li className='my-8 mx-0 flex flex-col text-white font-bold lg:my-0 lg:mx-8 2xl:mx-12'>
                        Policies
                        <Link href='/privacy' className='my-2 font-normal text-primary-100'>Privacy Policy</Link>
                        <Link href='/terms' className='my-2 font-normal text-primary-100'>Terms & Conditions</Link>
                    </li>
                </ul>
                <div className='flex lg:flex-col'>
                    <Link href="https://www.instagram.com/naturesfoodz/" target="_blank" className='text-3xl text-white mr-7 lg:mx-0 lg:my-1'><IoLogoInstagram/></Link>
                    <Link href="https://www.facebook.com/naturesfoodz" target="_blank" className='text-3xl text-white mr-7 lg:mx-0 lg:my-1'><IoLogoFacebook/></Link>
                </div>
            </footer>
            <div className='h-[90px] w-full p-4 text-center flex items-center justify-center bg-primary-900 text-primary-100 lg:h-[50px]'>
                © 2022 TRUE NATIVE. All Rights Reserved.
            </div>
        </>
    )
}

export default Footer