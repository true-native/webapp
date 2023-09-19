"use client"

import React, { useState } from 'react'
import londrina from '../../../layout'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'

const ProductDetailsPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const prd = searchParams.get('product')

    if (!prd) router.push('/products')

    const [product, setProduct] = useState(JSON.parse(prd))

    return (
        <main>
            <div className='w-11/12 md:px-5 xl:w-10/12 xl:px-8 flex 3xl:w-8/12 items-center mx-auto pt-6 lg:pt-8 text-slate-500'>
                <Link href={'/products'} className='flex items-center  lg:hover:text-primary-200'>Products</Link>
                <p className='text-primary-200 mx-2'>
                    <IoChevronForward/>
                </p>
                <p>{product?.name}</p>
            </div>
            <div className='flex flex-col lg:flex-row md:px-10 lg:py-4 xl:justify-center 2xl:pb-14 4xl:pb-32'>
                <div className='lg:order-2 p-5 lg:w-6/12 lg:px-10 xl:w-5/12 3xl:w-4/12'>
                    <p className='font-semibold text-secondary-500'>{product?.sub}</p>
                    <h1 className={`${londrina.className} text-3xl font-semibold text-primary-300`}>{product?.name}</h1>

                    <div className='hidden lg:block'>
                        <p className='py-3 text-slate-500'>{product?.description}</p>
                        <h3 className='text-primary-300 text-xl font-semibold py-2'>Ingredients</h3>
                        <ul>
                            {product?.ingredients.map((ing, idx) => (
                                <li className='text-slate-500' key={idx}>{ing}</li>
                            ))}
                        </ul>
                        <h3 className='text-primary-300 text-xl font-semibold pt-5 py-2'>Available Sizes</h3>
                        <ul>
                            {product?.sizes.map((sz, idx) => (
                                <li className='text-slate-500' key={idx}>{sz}</li>
                            ))}
                        </ul>
                        <h3 className='text-primary-300 text-xl font-semibold pt-5 py-2'>Certifications</h3>
                        <ul className='flex'>
                            {product?.certifications.map((cert, idx) => (
                                <img src={`../../resources/certifications/${cert}.svg`} alt="" key={idx} className='mr-2' />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='lg:order-1 lg:w-6/12 xl:w-5/12 3xl:w-4/12 lg:mt-5 h-[450px] md:h-[600px] lg:h-[500px] xl:h-[600px] 4xl:h-[780px]'>
                    <img src={`${product?.image_full}`} alt="" className='h-full w-full object-cover'/>
                </div>
                <div className="p-5 md:p-10 mb-10 lg:hidden">
                    <p className='py-3 text-slate-500'>{product?.description}</p>
                    <h3 className='text-primary-300 text-xl font-semibold py-2'>Ingredients</h3>
                    <ul>
                        {product?.ingredients.map((ing, idx) => (
                            <li className='text-slate-500' key={idx}>{ing}</li>
                        ))}
                    </ul>
                    <h3 className='text-primary-300 text-xl font-semibold pt-5 py-2'>Available Sizes</h3>
                    <ul>
                        {product?.sizes.map((sz, idx) => (
                            <li className='text-slate-500' key={idx}>{sz}</li>
                        ))}
                    </ul>
                    <h3 className='text-primary-300 text-xl font-semibold pt-5 py-2'>Certifications</h3>
                    <ul className='flex'>
                        {product?.certifications.map((cert, idx) => (
                            <img src={`../../resources/certifications/${cert}.svg`} alt="" key={idx} className='max-w-[40px] mr-2' />
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailsPage