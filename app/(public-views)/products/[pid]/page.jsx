"use client"

import React, { useState } from 'react'
import londrina from '../../../layout'
import { useSearchParams } from 'next/navigation'

const ProductDetailsPage = () => {
    const searchParams = useSearchParams()
    const prd = searchParams.get('product')

    const [product, setProduct] = useState(JSON.parse(prd))

    return (
        <main>
            <div className='flex flex-col lg:flex-row md:p-10 lg:py-16 xl:justify-center'>
                <div className='lg:order-2 p-5 lg:w-6/12 lg:px-10 xl:w-5/12 3xl:w-4/12'>
                    <p className='font-semibold text-secondary-500'>{product.sub}</p>
                    <h1 className={`${londrina.className} text-3xl font-semibold text-primary-500`}>{product.name}</h1>
                    <p className='py-3 text-slate-500'>{product.description}</p>

                    <div className='hidden lg:block'>
                        <h3 className='text-primary-500 text-xl font-semibold py-2'>Ingredients</h3>
                        <ul>
                            {product.ingredients.map((ing, idx) => {
                                return <li className='text-slate-500' key={idx}>{ing}</li>
                            })}
                        </ul>
                        <h3 className='text-primary-500 text-xl font-semibold pt-5 py-2'>Available Sizes</h3>
                        <ul>
                            {product.sizes.map((sz, idx) => {
                                return <li className='text-slate-500' key={idx}>{sz}</li>
                            })}
                        </ul>
                        <h3 className='text-primary-500 text-xl font-semibold pt-5 py-2'>Certifications</h3>
                        <ul className='flex'>
                            {product.certifications.map((cert, idx) => {
                                return <img src={`../../resources/certifications/${cert}.svg`} alt="" key={idx} className='mr-2' />
                            })}
                        </ul>
                    </div>
                </div>
                <div className='lg:order-1 lg:w-6/12 xl:w-5/12 3xl:w-4/12 lg:mt-5'>
                    <img src={`${product.image_full}`} alt="" className='md:rounded-3xl'/>
                </div>
            </div>
            <div className='p-5 md:p-10 md:pt-0 mb-10 lg:hidden'>
                <h3 className='text-primary-500 text-xl font-semibold py-2'>Ingredients</h3>
                <ul>
                    {product.ingredients.map((ing, idx) => {
                        return <li className='text-slate-500' key={idx}>{ing}</li>
                    })}
                </ul>
                <h3 className='text-primary-500 text-xl font-semibold pt-5 py-2'>Available Sizes</h3>
                <ul>
                    {product.sizes.map((sz, idx) => {
                        return <li className='text-slate-500' key={idx}>{sz}</li>
                    })}
                </ul>
                <h3 className='text-primary-500 text-xl font-semibold pt-5 py-2'>Certifications</h3>
                <ul className='flex'>
                    {product.certifications.map((cert, idx) => {
                        return <img src={`../../resources/certifications/${cert}.svg`} alt="" key={idx} className='mr-2' />
                    })}
                </ul>
            </div>
        </main>
    )
}

export default ProductDetailsPage