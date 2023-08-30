"use client"

import React from 'react'
import { Londrina_Solid } from 'next/font/google'

import ProductCard from '../components/cards/ProductCard';
import { IoArrowForward } from 'react-icons/io5';
import RectButton from '../components/buttons/RectButton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ProductCardSkeleton from '../components/skeleton/ProductCardSkeleton'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const Featured = () => {
    const featuredProductsListQuery = useQuery({
        queryKey: ['featured-products'],
        queryFn: async () => await axios.get('/api/products/featured').then((res) => res.data)
    })

    return (
        <section className="w-11/12 flex flex-col text-center my-10 mx-auto 3xl:w-10/12 2xl:my-20 text-primary-500">
            <div className='text-center'>
                <h2 className={`${londrina.className} heading text-3xl xl:text-4xl`}>FEATURED PRODUCTS</h2>
                <p className='text-slate-400'>
                    Super foods that are healthy and delicious.
                </p>
            </div>

            {
                featuredProductsListQuery.isError ? <strong>Could not get products</strong> : null
            }
            <div className="w-full my-5 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:my-10 mx-auto 3xl:my-8">
                {
                    featuredProductsListQuery.isLoading ?
                    <>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                        <ProductCardSkeleton/>
                    </> : null
                }
                {
                    featuredProductsListQuery.data ? featuredProductsListQuery.data.map((prd) => (
                        <ProductCard product={prd} key={prd.pid}/>
                    )) : ''
                }
            </div>
            <div className="mt-4 mx-auto 3xl:mt-8">
                <RectButton text="VIEW ALL PRODUCTS" variant='primary' iconRight={<IoArrowForward/>} link="/products"/>
            </div>
        </section>
    )
}

export default Featured

